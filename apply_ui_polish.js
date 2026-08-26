#!/usr/bin/env node
/**
 * Site-wide UI repair pass.
 *
 *  1. Replaces the dark footer with a premium light-theme footer on every page
 *     (EN + AR variants, preserving each page's language and logo format).
 *  2. Repairs mojibake left by an earlier UTF-8 double-encoding pass
 *     (â€™ / Â© / â†— and friends).
 *  3. Links ui-polish.css last in <head> so its corrections win.
 *
 * Idempotent: safe to re-run.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'src', 'www.fgrealty.qa');

/* ------------------------------------------------------------------ *
 * Footer content model
 * ------------------------------------------------------------------ */

const CONTACT = {
  address: 'Tower 22, Lusail Marina Promenade, Doha, Qatar',
  phone: '+974 4400 0000',
  phoneHref: '+97444000000',
  email: 'info@primeviewrealestate.qa',
};

const COLUMNS_EN = [
  {
    title: 'Waterfront Estates',
    links: [
      ['/en/development/skala-villas.html', 'Skala Villas'],
      ['/en/development/via-doro.html', "Via D'Oro Villas"],
      ['/en/development/carlton-house.html', 'Carlton House'],
      ['/en/development/canal-bay.html', 'Canal Bay'],
      ['/en/development/skala-tower.html', 'Skala Tower'],
      ['/en/development/la-mer-tower.html', 'La Mer Tower'],
    ],
  },
  {
    title: 'Lusail Heights',
    links: [
      ['/en/development/city-avenue.html', 'City Avenue'],
      ['/en/development/rivan.html', 'Rivan Tower'],
      ['/en/development/elite-residence.html', 'Elite Residence'],
      ['/en/development/boulevard-residence.html', 'Boulevard Residence'],
      ['/en/development/orjuwan.html', 'Orjuwan Tower'],
      ['/en/development/bliss-residences.html', 'Bliss Residences'],
    ],
  },
  {
    title: 'The Pearl Island',
    links: [
      ['/en/development/milos.html', 'Milos Residence'],
      ['/en/development/floresta-105.html', 'Floresta 105'],
      ['/en/development/al-mayyas.html', 'Al Mayyas Tower'],
      ['/en/development/coralia-villas.html', 'Coralia Villas'],
      ['/en/development/corallia.html', 'Corallia Lease-to-Own'],
      ['/en/development/marbella.html', 'Marbella Residence'],
    ],
  },
  {
    title: 'Villa Estates &amp; Towers',
    links: [
      ['/en/development/flora-villas.html', 'Flora Villas'],
      ['/en/development/bliss-gardens.html', 'Bliss Gardens (Salata)'],
      ['/en/development/bliss-gardens-2.html', 'Bliss Gardens (Muraikh)'],
      ['/en/development/voya-residence.html', 'Voya Waterfront'],
      ['/en/development/bliss-tower.html', 'Bliss Tower'],
      ['/en/development/miran-tower.html', 'Miran Tower'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['/en/about.html', 'About Us'],
      ['/en/developments.html', 'All Projects ↗', true],
      ['/en/areas.html', "Qatar's Areas"],
      ['/en/contact.html', 'Contact Advisory'],
      ['/en/privacy-policy.html', 'Privacy Policy'],
      ['/en/terms-and-conditions.html', 'Terms &amp; Conditions'],
    ],
  },
];

const COLUMNS_AR = [
  {
    title: 'الواجهة البحرية',
    links: [
      ['/en/development/skala-villas.html', 'فلل سكالا'],
      ['/en/development/via-doro.html', 'فلل فيا دورو'],
      ['/en/development/carlton-house.html', 'كارلتون هاوس'],
      ['/en/development/canal-bay.html', 'كانال باي'],
      ['/en/development/skala-tower.html', 'برج سكالا'],
      ['/en/development/la-mer-tower.html', 'برج لا مير'],
    ],
  },
  {
    title: 'أبراج لوسيل',
    links: [
      ['/en/development/city-avenue.html', 'سيتي أفينيو'],
      ['/en/development/rivan.html', 'برج ريفان'],
      ['/en/development/elite-residence.html', 'إيليت ريزيدنس'],
      ['/en/development/boulevard-residence.html', 'بوليفارد ريزيدنس'],
      ['/en/development/orjuwan.html', 'برج أرجوان'],
      ['/en/development/bliss-residences.html', 'بليس ريزيدنس'],
    ],
  },
  {
    title: 'جزيرة اللؤلؤة',
    links: [
      ['/en/development/milos.html', 'ميلوس ريزيدنس'],
      ['/en/development/floresta-105.html', 'فلوريستا 105'],
      ['/en/development/al-mayyas.html', 'برج المياس'],
      ['/en/development/coralia-villas.html', 'فلل كوراليا'],
      ['/en/development/corallia.html', 'كوراليا إيجار للتملك'],
      ['/en/development/marbella.html', 'ماربيلا ريزيدنس'],
    ],
  },
  {
    title: 'الفلل والأبراج السكنية',
    links: [
      ['/en/development/flora-villas.html', 'فلورا فيلا'],
      ['/en/development/bliss-gardens.html', 'بليس جاردنز (السلاطة)'],
      ['/en/development/bliss-gardens-2.html', 'بليس جاردنز (المريخ)'],
      ['/en/development/voya-residence.html', 'فويا ووترفرونت'],
      ['/en/development/bliss-tower.html', 'برج بليس'],
      ['/en/development/miran-tower.html', 'برج ميران'],
    ],
  },
  {
    title: 'الشركة',
    links: [
      ['/en/about.html', 'من نحن'],
      ['/en/developments.html', 'كافة المشاريع الـ 24 ↗', true],
      ['/en/areas.html', 'مناطق قطر'],
      ['/en/contact.html', 'اتصل بنا'],
      ['/en/privacy-policy.html', 'سياسة الخصوصية'],
      ['/en/terms-and-conditions.html', 'الشروط والأحكام'],
    ],
  },
];

const COPY_EN = {
  home: '/',
  brand: 'Prime View Real Estate',
  about:
    "Prime View Real Estate W.L.L. is Qatar's premier luxury real estate brokerage. Discover our bespoke portfolio of flagship residential, waterfront, and architectural developments across Lusail, The Pearl, and Doha.",
  badge: '24 Flagship Developments',
  legal:
    'Prime View Real Estate W.L.L. — licensed luxury real estate brokerage in Qatar. All rights reserved.',
  copyright: '© 2026 Prime View Real Estate W.L.L. All Rights Reserved.',
  privacy: 'Privacy Policy',
  terms: 'Terms and Conditions',
  social: 'Follow Prime View Real Estate',
};

const COPY_AR = {
  home: '/ar.html',
  brand: 'برايم فيو العقارية',
  about:
    'تأسست شركة برايم فيو العقارية في الدوحة - قطر، لتقدم لعملائها نخبة المشاريع الفاخرة التي تضم 24 مشروعاً سكنياً رائداً في لوسيل واللؤلؤة وكافة مناطق قطر.',
  badge: '24 مشروعاً رائداً',
  legal:
    'برايم فيو العقارية ذ.م.م. — شركة وساطة عقارية مرخصة في قطر. جميع الحقوق محفوزة.',
  copyright:
    '© 2026 برايم فيو العقارية ذ.م.م. جميع الحقوق محفوزة.',
  privacy: 'سياسة الخصوصية',
  terms: 'الشروط والأحكام',
  social: 'تابعنا',
};

/* Social icons — currentColor so they adapt to the light theme. */
const SOCIALS = [
  ['Facebook', 'M9.5 16v-6h2.2l.33-2.4H9.5V6.2c0-.66.2-1.1 1.1-1.1h1.5V2.9c-.3-.04-1.1-.12-2-.12-2 0-3.3 1.2-3.3 3.4v1.4H4.6V10h2.2v6h2.7z'],
  ['X', 'M9.52 6.77 15.48 0h-1.41L8.9 5.88 4.76 0H0l6.25 8.9L0 16h1.41l5.46-6.21L11.24 16H16L9.52 6.77zm-1.93 2.2-.63-.89L1.92 1.04h2.17l4.06 5.69.63.88 5.29 7.4h-2.17L7.59 8.97z'],
  ['Instagram', 'M8 1.44c2.14 0 2.39.01 3.23.05.78.03 1.2.17 1.48.28.35.13.66.33.92.6.27.26.47.57.6.92.11.28.25.7.28 1.48.04.84.05 1.09.05 3.23s-.01 2.39-.05 3.23c-.03.78-.17 1.2-.28 1.48a2.6 2.6 0 0 1-1.52 1.52c-.28.11-.7.25-1.48.28-.84.04-1.09.05-3.23.05s-2.39-.01-3.23-.05c-.78-.03-1.2-.17-1.48-.28a2.6 2.6 0 0 1-1.52-1.52c-.11-.28-.25-.7-.28-1.48C1.45 10.39 1.44 10.14 1.44 8s.01-2.39.05-3.23c.03-.78.17-1.2.28-1.48.13-.35.33-.66.6-.92.26-.27.57-.47.92-.6.28-.11.7-.25 1.48-.28C5.61 1.45 5.86 1.44 8 1.44zm0 2.45A4.11 4.11 0 1 0 12.11 8 4.11 4.11 0 0 0 8 3.89zm0 6.78A2.67 2.67 0 1 1 10.67 8 2.67 2.67 0 0 1 8 10.67zm5.24-6.94a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0z'],
  ['LinkedIn', 'M16 16h-3.31v-5.2c0-1.24-.03-2.83-1.72-2.83-1.73 0-2 1.35-2 2.74V16H5.66V5.32h3.18v1.46h.05a3.6 3.6 0 0 1 3.14-1.73c3.36 0 3.97 2.21 3.97 5.08V16zM.26 5.32h3.32V16H.26V5.32zM1.92 0a1.92 1.92 0 1 1 0 3.86 1.92 1.92 0 0 1 0-3.86z'],
  ['YouTube', 'M15.67 1.88A2.06 2.06 0 0 0 14.26.37C13.01 0 8 0 8 0S2.99 0 1.74.35A2.06 2.06 0 0 0 .33 1.88C0 3.22 0 6 0 6s0 2.8.33 4.12a2.06 2.06 0 0 0 1.41 1.51C3 12 8 12 8 12s5.01 0 6.26-.35a2.06 2.06 0 0 0 1.41-1.51C16 8.8 16 6.01 16 6.01s.01-2.79-.33-4.13zM6.41 8.57V3.43L10.57 6 6.41 8.57z'],
];

function svgIcon(pathData) {
  return `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false"><path d="${pathData}" fill="currentColor"/></svg>`;
}

const ICON_PIN =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>';
const ICON_PHONE =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"/></svg>';
const ICON_MAIL =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="m22 6-10 7L2 6"/></svg>';

/*
 * On mobile the five link columns stack into ~30 rows of footer. <details>
 * gives a native accordion with no JS required to open it; the script below
 * only collapses them under 768px, so a JS-less client still sees every link.
 * The disclosure chevron is drawn by .pvFooter__colTitle::after in CSS.
 */
const COLLAPSE_SCRIPT = `      <script>
        (function () {
          var mq = window.matchMedia('(max-width: 768px)');
          var cols = document.querySelectorAll('.pvFooter__col');
          function sync() {
            for (var i = 0; i < cols.length; i++) cols[i].open = !mq.matches;
          }
          sync();
          if (mq.addEventListener) mq.addEventListener('change', sync);
          else if (mq.addListener) mq.addListener(sync);
        })();
      </script>`;

/**
 * Builds the light-theme footer.
 * @param {'en'|'ar'} lang
 * @param {string} logoSrc  keeps each page's existing logo format (.webp/.png)
 */
function buildFooter(lang, logoSrc) {
  const t = lang === 'ar' ? COPY_AR : COPY_EN;
  const cols = lang === 'ar' ? COLUMNS_AR : COLUMNS_EN;

  const colsHtml = cols
    .map(
      (c) => `
          <details class="pvFooter__col" open>
            <summary class="pvFooter__colTitle"><span>${c.title}</span></summary>
            <ul class="pvFooter__list">
${c.links
  .map(
    ([href, label, featured]) =>
      `              <li><a href="${href}"${featured ? ' class="is-featured"' : ''}>${label}</a></li>`
  )
  .join('\n')}
            </ul>
          </details>`
    )
    .join('');

  const socialHtml = SOCIALS.map(
    ([name, d]) =>
      `            <a class="pvFooter__socialLink" href="/en/contact.html" aria-label="${name}">${svgIcon(d)}</a>`
  ).join('\n');

  return `<div class="footerWrapper pvFooter">
      <footer class="pvFooter__inner">
        <div class="pvFooter__top">

          <!-- Brand -->
          <div class="pvFooter__brand">
            <a class="pvFooter__brandLogo" href="${t.home}" aria-label="${t.brand}">
              <picture>
                <source srcset="${logoSrc}" type="image/webp" />
                <img src="/images/prime-view-logo.png" alt="${t.brand}" width="232" height="52" loading="lazy" decoding="async" />
              </picture>
            </a>
            <p class="pvFooter__about">${t.about}</p>
            <div class="pvFooter__badge">
              <span class="pvFooter__badgeDot" aria-hidden="true"></span>${t.badge}
            </div>
            <ul class="pvFooter__contact">
              <li class="pvFooter__contactItem">${ICON_PIN}<span>${CONTACT.address}</span></li>
              <li class="pvFooter__contactItem">${ICON_PHONE}<a class="pvFooter__contactLink" href="tel:${CONTACT.phoneHref}" dir="ltr">${CONTACT.phone}</a></li>
              <li class="pvFooter__contactItem">${ICON_MAIL}<a class="pvFooter__contactLink" href="mailto:${CONTACT.email}" dir="ltr">${CONTACT.email}</a></li>
            </ul>
          </div>

          <!-- Link columns -->
          <nav class="pvFooter__cols" aria-label="${lang === 'ar' ? t.brand : 'Footer'}">${colsHtml}
          </nav>
        </div>

        <!-- Social + legal -->
        <div class="pvFooter__bottom">
          <div class="pvFooter__social" role="list" aria-label="${t.social}">
${socialHtml}
          </div>
          <p class="pvFooter__legal">${t.legal}</p>
        </div>

        <div class="pvFooter__meta">
          <p class="pvFooter__copyright">${t.copyright}</p>
          <div class="pvFooter__metaLinks">
            <a href="/en/privacy-policy.html">${t.privacy}</a>
            <span class="pvFooter__metaSep" aria-hidden="true"></span>
            <a href="/en/terms-and-conditions.html">${t.terms}</a>
          </div>
        </div>
      </footer>
${COLLAPSE_SCRIPT}
    </div>`;
}

/* ------------------------------------------------------------------ *
 * Mojibake repair
 * ------------------------------------------------------------------ */

/*
 * The corruption here is UTF-8 bytes that were decoded as cp1252 - so
 * "Qatar’s" became "Qatarâ€™s" and "©" became "Â©". Rather than
 * enumerate every damaged sequence, reverse the exact operation: map each
 * character back to the cp1252 byte it came from, then decode those bytes as
 * UTF-8. A run is only rewritten when it decodes to valid multi-byte UTF-8,
 * which leaves legitimately-authored Latin-1 characters untouched.
 */

// cp1252 0x80-0x9F -> Unicode. Undefined slots pass through as U+008x.
const CP1252_HIGH = [
  0x20ac, 0x0081, 0x201a, 0x0192, 0x201e, 0x2026, 0x2020, 0x2021,
  0x02c6, 0x2030, 0x0160, 0x2039, 0x0152, 0x008d, 0x017d, 0x008f,
  0x0090, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2013, 0x2014,
  0x02dc, 0x2122, 0x0161, 0x203a, 0x0153, 0x009d, 0x017e, 0x0178,
];

// Unicode code point -> cp1252 byte, for every byte 0x80-0xFF.
const TO_BYTE = new Map();
CP1252_HIGH.forEach((cp, i) => TO_BYTE.set(cp, 0x80 + i));
for (let b = 0xa0; b <= 0xff; b++) TO_BYTE.set(b, b); // Latin-1 range is 1:1

const REPLACEMENT_CHAR = String.fromCharCode(0xfffd);

function fixMojibake(html) {
  let out = "";
  let count = 0;
  let i = 0;

  while (i < html.length) {
    const cp = html.codePointAt(i);

    // A mojibake run always starts with a character that maps to a UTF-8
    // lead byte (0xC2-0xF4).
    const lead = TO_BYTE.get(cp);
    if (lead === undefined || lead < 0xc2 || lead > 0xf4) {
      out += html[i];
      i += 1;
      continue;
    }

    // Collect the following run of cp1252-mappable characters.
    const bytes = [];
    let j = i;
    while (j < html.length && bytes.length < 4) {
      const b = TO_BYTE.get(html.codePointAt(j));
      if (b === undefined) break;
      bytes.push(b);
      j += 1;
    }

    // Decode greedily: longest prefix that is valid multi-byte UTF-8 wins.
    let matched = null;
    for (let len = bytes.length; len >= 2; len--) {
      const buf = Buffer.from(bytes.slice(0, len));
      const text = buf.toString("utf8");
      // Round-trip check rejects invalid sequences (which decode to U+FFFD).
      if (
        !text.includes(REPLACEMENT_CHAR) &&
        Buffer.compare(Buffer.from(text, "utf8"), buf) === 0
      ) {
        matched = { text, len };
        break;
      }
    }

    if (matched) {
      out += matched.text;
      i += matched.len;
      count += 1;
    } else {
      out += html[i];
      i += 1;
    }
  }

  return { html: out, count };
}

/* ------------------------------------------------------------------ *
 * Per-file transforms
 * ------------------------------------------------------------------ */

const CSS_LINK = '<link rel="stylesheet" href="/ui-polish.css?v=20260825">';
const JS_LINK = '<script src="/ui-polish.js?v=20260825" defer></script>';

const CSS_LINK_RE = /[ \t]*<link[^>]*ui-polish\.css[^>]*>\n?/i;

/*
 * Anchors on the FIRST </head>. Six pages (developments, privacy-policy,
 * terms-and-conditions, and their /en counterparts) ship two nested documents
 * — a second <html><head> opens partway through the first <body> — so the last
 * </head> is not in the head at all. An earlier pass anchored there and left
 * the stylesheet inside the body on those pages. Relocating an already-placed
 * link keeps the script self-healing rather than needing a manual pass.
 */
function ensurePolishCss(html) {
  const firstHeadClose = html.indexOf('</head>');
  if (firstHeadClose < 0) return { html, changed: false };

  const existing = html.match(CSS_LINK_RE);
  if (existing) {
    if (existing.index < firstHeadClose) return { html, changed: false };
    html =
      html.slice(0, existing.index) +
      html.slice(existing.index + existing[0].length);
  }

  const i = html.indexOf('</head>');
  return {
    html: html.slice(0, i) + '    ' + CSS_LINK + '\n' + html.slice(i),
    changed: true,
  };
}

/*
 * The motion layer loads deferred at the end of <body>: it only ever adds
 * classes, and gating the reveal states behind the `pv-anim` class it sets
 * means a blocked or failed load leaves the page fully visible.
 */
function ensurePolishJs(html) {
  if (html.includes('/ui-polish.js')) return { html, changed: false };
  const i = html.lastIndexOf('</body>');
  if (i < 0) return { html, changed: false };
  return {
    html: html.slice(0, i) + '    ' + JS_LINK + '\n' + html.slice(i),
    changed: true,
  };
}

function replaceFooter(html, lang) {
  // Matches the original `class="footerWrapper"` and the rebuilt
  // `class="footerWrapper pvFooter"`, so re-runs stay idempotent.
  const start = html.indexOf('<div class="footerWrapper');
  if (start < 0) return { html, changed: false, reason: 'no footerWrapper' };
  const close = html.indexOf('</footer>', start);
  if (close < 0) return { html, changed: false, reason: 'no </footer>' };

  // The wrapper <div> closes after </footer>; consume it too.
  const afterFooter = close + '</footer>'.length;
  const tail = html.slice(afterFooter);
  const divClose = tail.indexOf('</div>');
  if (divClose < 0) return { html, changed: false, reason: 'no wrapper close' };
  const end = afterFooter + divClose + '</div>'.length;

  const oldBlock = html.slice(start, end);
  // A WebP logo exists alongside the PNG; serve it to every page and keep the
  // PNG only as the <picture> fallback.
  const logoSrc = '/images/prime-view-logo.webp';

  return {
    html: html.slice(0, start) + buildFooter(lang, logoSrc) + html.slice(end),
    changed: true,
  };
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'build' || entry.name === 'node_modules') continue;
      walk(p, acc);
    } else if (entry.name.endsWith('.html')) {
      acc.push(p);
    }
  }
  return acc;
}

const files = walk(ROOT).sort();
let footersDone = 0;
let cssDone = 0;
let jsDone = 0;
let mojibakeFixed = 0;
const skipped = [];

for (const file of files) {
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  let html = fs.readFileSync(file, 'utf8');
  const before = html;

  const lang = /<html[^>]*lang="ar"/.test(html) ? 'ar' : 'en';

  const moji = fixMojibake(html);
  html = moji.html;
  mojibakeFixed += moji.count;

  const foot = replaceFooter(html, lang);
  html = foot.html;
  if (foot.changed) footersDone++;
  else skipped.push(`${rel} (${foot.reason})`);

  const css = ensurePolishCss(html);
  html = css.html;
  if (css.changed) cssDone++;

  const js = ensurePolishJs(html);
  html = js.html;
  if (js.changed) jsDone++;

  if (html !== before) fs.writeFileSync(file, html, 'utf8');
  console.log(
    `${foot.changed ? 'footer' : '  --  '} | ${css.changed ? 'css' : ' - '} | ` +
      `${js.changed ? 'js' : ' -'} | ${String(moji.count).padStart(3)} moji | ${rel}`
  );
}

console.log(
  `\nDone. ${files.length} files scanned | ${footersDone} footers rebuilt | ` +
    `${cssDone} css links added | ${jsDone} js links added | ` +
    `${mojibakeFixed} mojibake sequences repaired.`
);
if (skipped.length) console.log('Skipped footers:\n  ' + skipped.join('\n  '));
