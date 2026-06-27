const fs = require('fs');
const raw = fs.readFileSync('C:/Users/sipps/.gemini/antigravity-ide/brain/bf37286c-fc21-4c69-92ca-a3623c80d118/.system_generated/steps/1385/content.md', 'utf8');
const jsonStart = raw.indexOf('{"data"');
if (jsonStart === -1) { console.log('No JSON found'); process.exit(); }
const json = JSON.parse(raw.slice(jsonStart));
const free = json.data.filter(m =>
  m.pricing &&
  parseFloat(m.pricing.prompt) === 0 &&
  parseFloat(m.pricing.completion) === 0
);
// Sort by context length desc
free.sort((a, b) => (b.context_length || 0) - (a.context_length || 0));
console.log('Total free models:', free.length);
console.log('');
free.forEach(m => {
  console.log(m.id.padEnd(60), 'ctx:', String(m.context_length || 0).padStart(8));
});
