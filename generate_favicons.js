/**
 * Regenerates the full favicon set for the site from a single source image.
 *
 * Source is square-cropped to the subject's bounding box first: the raw render
 * carries a wide vignette margin that turns the icon into an unreadable smudge
 * at 16x16, so the crop is what makes the small sizes legible.
 *
 * Outputs into the web root (src/www.fgrealty.qa):
 *   favicon-{16,32,48,64,96,128,192,512}.png, favicon.png, favicon.ico,
 *   favicon.svg (raster embedded so the 89 existing <link> refs keep working),
 *   apple-touch-icon.png, android-chrome-{192,512}.png,
 *   plus the two nested learn/ and lp/ favicon.svg copies.
 */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE = 'C:/Users/AR LAPTOP/Downloads/ChatGPT Image Aug 7, 2026, 03_54_35 AM.png';
const WEB_ROOT = path.join(__dirname, 'src', 'www.fgrealty.qa');

// Subject bounding box in the 1024x1024 source, squared off and centred on the head.
const CROP = { left: 98, top: 35, width: 865, height: 865 };

// Nested copies referenced by the learn/ and lp/ pages (icon links + msapplication-TileImage).
const NESTED_SVGS = [
    'learn/wp-content/uploads/2024/03/favicon.svg',
    'lp/wp-content/uploads/2024/05/favicon.svg',
];

const PNG_SIZES = [16, 32, 48, 64, 96, 128, 192, 512];
const ICO_SIZES = [16, 32, 48, 64];

/** Cropped master, kept at 1024 so every downscale is a clean reduction. */
function master() {
    return sharp(SOURCE).extract(CROP).resize(1024, 1024, { fit: 'cover' });
}

function pngAt(size, opts = {}) {
    return master()
        .resize(size, size, { fit: 'cover', kernel: 'lanczos3' })
        .png({ compressionLevel: 9, palette: opts.palette !== false })
        .toBuffer();
}

/**
 * Builds an .ico containing PNG-encoded entries.
 * Layout: 6-byte ICONDIR, then one 16-byte ICONDIRENTRY per image, then payloads.
 */
function buildIco(entries) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = icon
    header.writeUInt16LE(entries.length, 4);

    const dir = Buffer.alloc(16 * entries.length);
    let offset = header.length + dir.length;

    entries.forEach(({ size, data }, i) => {
        const at = i * 16;
        dir.writeUInt8(size >= 256 ? 0 : size, at + 0); // 0 means 256
        dir.writeUInt8(size >= 256 ? 0 : size, at + 1);
        dir.writeUInt8(0, at + 2); // palette count
        dir.writeUInt8(0, at + 3); // reserved
        dir.writeUInt16LE(1, at + 4); // colour planes
        dir.writeUInt16LE(32, at + 6); // bits per pixel
        dir.writeUInt32LE(data.length, at + 8);
        dir.writeUInt32LE(offset, at + 12);
        offset += data.length;
    });

    return Buffer.concat([header, dir, ...entries.map((e) => e.data)]);
}

/** SVG wrapper around the raster, so SVG-preferring browsers get the new mark. */
function buildSvg(png, size) {
    const b64 = png.toString('base64');
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" role="img" aria-label="Prime View Real Estate">` +
        `<image width="${size}" height="${size}" href="data:image/png;base64,${b64}" xlink:href="data:image/png;base64,${b64}"/>` +
        `</svg>\n`;
}

function write(relPath, data) {
    const full = path.join(WEB_ROOT, relPath);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, data);
    console.log(`  ${relPath.padEnd(48)} ${String(data.length).padStart(8)} b`);
}

(async () => {
    const meta = await sharp(SOURCE).metadata();
    console.log(`source ${meta.width}x${meta.height} ${meta.format}`);
    console.log(`crop   ${CROP.width}x${CROP.height} at (${CROP.left},${CROP.top})\n`);

    // Small sizes stay full-colour: palette quantisation muddies the face at 16-32px.
    for (const size of PNG_SIZES) {
        write(`favicon-${size}x${size}.png`, await pngAt(size, { palette: false }));
    }

    write('favicon.png', await pngAt(32, { palette: false }));
    write('apple-touch-icon.png', await pngAt(180, { palette: false }));
    write('android-chrome-192x192.png', await pngAt(192, { palette: false }));
    write('android-chrome-512x512.png', await pngAt(512, { palette: false }));

    const icoEntries = [];
    for (const size of ICO_SIZES) {
        icoEntries.push({ size, data: await pngAt(size, { palette: false }) });
    }
    write('favicon.ico', buildIco(icoEntries));

    // 256px raster inside the SVG: sharp enough for large surfaces without bloating
    // a file that every page loads.
    const svg = buildSvg(await pngAt(256, { palette: false }), 256);
    write('favicon.svg', svg);
    for (const nested of NESTED_SVGS) {
        if (fs.existsSync(path.join(WEB_ROOT, nested))) write(nested, svg);
    }

    console.log('\ndone');
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
