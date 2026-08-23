const fs = require('fs');
const path = require('path');
const sharp = require(path.join(__dirname, 'node_modules/sharp'));

const newImgPath = 'C:/Users/AR LAPTOP/Downloads/ChatGPT Image Aug 23, 2026, 11_31_44 AM.png';
const yourstayDir = path.join(__dirname, 'src/yourstay.qa/build/images/svg');
const targetSvg = path.join(yourstayDir, 'yourstay_qa_logo.svg');

async function processLogo() {
  console.log('Reading source image:', newImgPath);
  const meta = await sharp(newImgPath).metadata();
  console.log(`Source image: ${meta.width}x${meta.height}, format: ${meta.format}`);

  // Trim transparent borders / optimize
  const trimmedBuffer = await sharp(newImgPath)
    .trim()
    .png()
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log(`Trimmed image: ${trimmedMeta.width}x${trimmedMeta.height}`);

  // Calculate aspect ratio
  const width = trimmedMeta.width;
  const height = trimmedMeta.height;
  const b64 = trimmedBuffer.toString('base64');

  // Build clean responsive SVG with embedded high-resolution lossless raster
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <image width="${width}" height="${height}" href="data:image/png;base64,${b64}" xlink:href="data:image/png;base64,${b64}"/>
</svg>\n`;

  fs.mkdirSync(yourstayDir, { recursive: true });
  fs.writeFileSync(targetSvg, svgContent, 'utf8');
  console.log(`Successfully replaced ${targetSvg} (${svgContent.length} bytes)!`);

  // Also save PNG version in same folder if needed
  fs.writeFileSync(path.join(yourstayDir, 'yourstay_qa_logo.png'), trimmedBuffer);
  console.log('Saved yourstay_qa_logo.png');
}

processLogo().catch(err => {
  console.error('Error processing logo:', err);
  process.exit(1);
});
