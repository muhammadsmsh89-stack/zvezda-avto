// Build pipeline: structured HTML -> print-ready A4 PDF via local Chromium (Playwright).
// Usage: node scripts/build-pdf.js <input.html> <output.pdf> "<Doc Title>"
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

async function build(inputHtml, outputPdf, docTitle) {
  const inputPath = path.resolve(inputHtml);
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input not found: ${inputPath}`);
  }
  fs.mkdirSync(path.dirname(path.resolve(outputPdf)), { recursive: true });

  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const page = await browser.newPage();
  await page.goto('file://' + inputPath, { waitUntil: 'load' });
  // Let @font-face embeds settle.
  await page.waitForTimeout(150);

  await page.pdf({
    path: path.resolve(outputPdf),
    format: 'A4',
    printBackground: true,
    margin: { top: '18mm', bottom: '16mm', left: '16mm', right: '16mm' },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="width:100%;font-family:Arial,sans-serif;font-size:7.5px;color:#8a8a86;padding:0 16mm;display:flex;justify-content:space-between;">
        <span>AI MONEY START</span><span>${docTitle.replace(/"/g, '&quot;')}</span>
      </div>`,
    footerTemplate: `
      <div style="width:100%;font-family:Arial,sans-serif;font-size:7.5px;color:#8a8a86;padding:0 16mm;display:flex;justify-content:flex-end;">
        <span class="pageNumber"></span>&nbsp;/&nbsp;<span class="totalPages"></span>
      </div>`,
  });

  await browser.close();

  // Report page count via pdfinfo-less method: count "/Type /Page" occurrences is unreliable across encodings,
  // so we re-open with a lightweight parse using the pdf-lib-free trick: count '/Type/Page' via pdf.js is overkill here;
  // instead we shell out to pdfinfo if present, else fall back to a raw scan.
  return outputPdf;
}

const [, , inputHtml, outputPdf, docTitle] = process.argv;
if (!inputHtml || !outputPdf) {
  console.error('Usage: node build-pdf.js <input.html> <output.pdf> "<Doc Title>"');
  process.exit(1);
}
build(inputHtml, outputPdf, docTitle || '')
  .then((p) => console.log('Built:', p))
  .catch((e) => { console.error(e); process.exit(1); });
