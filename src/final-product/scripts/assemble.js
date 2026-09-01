// Writes the four HTML sources from their content.js builders.
const fs = require('fs');
const path = require('path');

const { buildGuideHtml } = require('../guide/content');
const { buildWorkbookHtml } = require('../workbook/content');
const { buildPromptPackHtml } = require('../prompt-pack/content');
const { buildActionPlanHtml } = require('../action-plan/content');

function write(relPath, html) {
  const p = path.join(__dirname, '..', relPath);
  fs.writeFileSync(p, html, 'utf8');
  console.log('Wrote', p);
}

write('guide/guide.html', buildGuideHtml());
write('workbook/workbook.html', buildWorkbookHtml());
write('prompt-pack/prompt-pack.html', buildPromptPackHtml());
write('action-plan/action-plan.html', buildActionPlanHtml());
