const fs = require('fs');
const path = require('path');

const cssBlock = `<style id="fgCardOverlayFixCSS">
/* ── Uniform Image Fill & Seamless Gradient Overlay for Project Cards ── */
.developmentCard,
.areaCard {
    position: relative !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-end !important;
    overflow: hidden !important;
    border-radius: 12px !important;
    background-color: #0d131f !important;
    text-decoration: none !important;
    color: inherit !important;
    cursor: pointer !important;
    transform: translateZ(0);
}

/* Ensure picture container and image stretch 100% of card dimensions */
.developmentCard__image,
.areaCard__image {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 1 !important;
    overflow: hidden !important;
    border-radius: inherit !important;
}

.developmentCard__image picture,
.areaCard__image picture {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
}

.developmentCard__image img,
.developmentCard__img,
.areaCard__image img,
.areaCard__img {
    display: block !important;
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center !important;
    border-radius: inherit !important;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.developmentCard:hover .developmentCard__img,
.areaCard:hover .areaCard__img {
    transform: scale(1.06) !important;
}

/* Single smooth uniform gradient overlay from top to bottom — eliminates separate gray block */
.developmentCard__overlay,
.areaCard__overlay {
    position: absolute !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100% !important;
    z-index: 2 !important;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.15) 45%, rgba(0, 0, 0, 0.85) 100%) !important;
    border-radius: inherit !important;
    pointer-events: none !important;
}

/* Metadata Text Area — seamlessly blends over the gradient */
.developmentCard__metadata,
.areaCard__metadata {
    position: relative !important;
    z-index: 3 !important;
    width: 100% !important;
}

.developmentCard .cardMetadata {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    padding: 0.75rem 0.5rem !important;
    border-radius: 0 !important;
    color: #ffffff !important;
}

.developmentCard .cardTag {
    position: absolute !important;
    top: 10px !important;
    left: 10px !important;
    z-index: 4 !important;
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25) !important;
}
</style>
`;

const files = [
    path.join(__dirname, 'src/www.fgrealty.qa/index.html'),
    path.join(__dirname, 'src/www.fgrealty.qa/ar.html')
];

files.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    let html = fs.readFileSync(filePath, 'utf8');

    // Remove existing if already present
    html = html.replace(/<style id="fgCardOverlayFixCSS">[\s\S]*?<\/style>\s*/g, '');

    const targetMarker = '<section class="homepageDevelopmentsList">';
    if (html.includes(targetMarker)) {
        html = html.replace(targetMarker, cssBlock + '\n                    ' + targetMarker);
        fs.writeFileSync(filePath, html, 'utf8');
        console.log('Successfully added fgCardOverlayFixCSS to', path.relative(__dirname, filePath));
    } else {
        console.warn('Marker not found in', filePath);
    }
});
