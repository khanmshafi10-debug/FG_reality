#!/usr/bin/env node
/* Structural audit: confirms every page carries the polish assets and the
   rebuilt footer exactly once, with no mojibake left behind. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'src', 'www.fgrealty.qa');

function walk(d, a = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      if (e.name === 'build' || e.name === 'node_modules') continue;
      walk(p, a);
    } else if (e.name.endsWith('.html')) a.push(p);
  }
  return a;
}

const files = walk(ROOT).sort();
const bad = [];

for (const f of files) {
  const h = fs.readFileSync(f, 'utf8');
  const rel = path.relative(ROOT, f).split(path.sep).join('/');
  const chk = {
    css: (h.match(/ui-polish\.css/g) || []).length,
    js: (h.match(/ui-polish\.js/g) || []).length,
    footer: (h.match(/class="footerWrapper pvFooter"/g) || []).length,
    details: (h.match(/<details class="pvFooter__col"/g) || []).length,
    webp: (h.match(/prime-view-logo\.webp/g) || []).length,
    moji: (h.match(/â€|Â©|â†/g) || []).length,
    jsLast: h.lastIndexOf('ui-polish.js') < h.lastIndexOf('</body>'),
    cssInHead: h.indexOf('ui-polish.css') < h.indexOf('</head>'),
  };
  const ok =
    chk.css === 1 && chk.js === 1 && chk.footer === 1 && chk.details === 5 &&
    chk.webp >= 1 && chk.moji === 0 && chk.jsLast && chk.cssInHead;
  if (!ok) bad.push(`${rel} ${JSON.stringify(chk)}`);
}

console.log(`files: ${files.length} | problems: ${bad.length}`);
bad.slice(0, 12).forEach((b) => console.log('  ' + b));
