import fetch from 'node-fetch';

async function run() {
  const res = await fetch('https://test-garden-site-v1.vercel.app/assets/index-DdJbrk8-.js');
  const text = await res.text();
  
  // Find strings like "Welcome to the garden", object keys are usually not like this.
  const regex = /"([^"]{15,200})"/g;
  let match;
  let strings = [];
  while ((match = regex.exec(text)) !== null) {
    if (!match[1].startsWith('react.') && !match[1].includes('http') && match[1].includes(' ')) {
      strings.push(match[1]);
    }
  }
  console.log(Array.from(new Set(strings)).join('\n'));
}
run();
