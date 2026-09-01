// Reports page counts for the built PDFs (uses pdf-lib, no native deps).
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function count(file) {
  const bytes = fs.readFileSync(file);
  const doc = await PDFDocument.load(bytes, { updateMetadata: false });
  return doc.getPageCount();
}

(async () => {
  const files = process.argv.slice(2);
  for (const f of files) {
    const n = await count(path.resolve(f));
    console.log(`${path.basename(f)}: ${n} pages`);
  }
})();
