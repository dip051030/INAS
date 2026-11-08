import fs from 'fs';

const extracted = fs.readFileSync('extracted_components.css', 'utf8');
const editorial = fs.readFileSync('exec_editorial.css', 'utf8');

const baseCss = `@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,400;1,700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #0b1536;
  --accent-gold: #dfc07a;
  --accent-crimson: #c8102e;
  --accent-blue: #00137d;
}

html {
  scroll-behavior: smooth;
  font-family: 'Lato', sans-serif;
}

body {
  color: #333333;
  background-color: #ffffff;
  overflow-x: hidden;
}

.font-script {
  font-family: 'Dancing Script', cursive;
}

.font-display {
  font-family: 'Fraunces', Georgia, serif;
}

/* Base custom styles extracted from inasukorg.uk */
`;

const fullCss = `${baseCss}\n\n${extracted}\n\n/* Editorial Committee Styles */\n${editorial}`;

fs.writeFileSync('app/globals.css', fullCss);
console.log('Saved app/globals.css with size:', fullCss.length);
