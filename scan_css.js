#!/usr/bin/env node
/* Locates structural breaks in a stylesheet: an unterminated comment or an
   unbalanced block silently kills every rule after it in the CSSOM. */
const fs = require('fs');

const file = process.argv[2];
const src = fs.readFileSync(file, 'utf8');

let i = 0;
let depth = 0;
let line = 1;
let inComment = false;
let commentStart = 0;
let inString = false;
let quote = '';
let stringStart = 0;
const notes = [];
const stack = [];

const BACKSLASH = String.fromCharCode(92);
const SQ = String.fromCharCode(39);
const DQ = String.fromCharCode(34);

while (i < src.length) {
  const c = src[i];
  const d = src[i + 1];

  if (c === '\n') {
    // A string literal may not span a raw newline; that means it was never
    // closed and we would otherwise swallow the rest of the file too.
    if (inString) {
      notes.push('unclosed ' + quote + ' string opened at line ' + stringStart);
      inString = false;
    }
    line++;
    i++;
    continue;
  }

  if (inComment) {
    if (c === '*' && d === '/') {
      inComment = false;
      i += 2;
      continue;
    }
    i++;
    continue;
  }

  if (inString) {
    if (c === BACKSLASH) {
      i += 2;
      continue;
    }
    if (c === quote) inString = false;
    i++;
    continue;
  }

  if (c === '/' && d === '*') {
    inComment = true;
    commentStart = line;
    i += 2;
    continue;
  }

  if (c === DQ || c === SQ) {
    inString = true;
    quote = c;
    stringStart = line;
    i++;
    continue;
  }

  if (c === '{') {
    depth++;
    stack.push(line);
    if (depth > 3) notes.push('nesting depth ' + depth + ' reached at line ' + line);
    i++;
    continue;
  }

  if (c === '}') {
    depth--;
    stack.pop();
    if (depth < 0) {
      notes.push('unmatched } at line ' + line);
      depth = 0;
    }
    i++;
    continue;
  }

  i++;
}

console.log(file);
console.log('  lines            : ' + line);
console.log('  depth at EOF     : ' + depth + (depth === 0 ? '  (balanced)' : '  <-- UNBALANCED'));
console.log('  open comment     : ' + (inComment ? 'line ' + commentStart + '  <-- UNTERMINATED' : 'none'));
if (stack.length) console.log('  blocks still open, opened at lines: ' + stack.join(', '));
notes.slice(0, 25).forEach((n) => console.log('  ! ' + n));
if (notes.length > 25) console.log('  ... and ' + (notes.length - 25) + ' more');
