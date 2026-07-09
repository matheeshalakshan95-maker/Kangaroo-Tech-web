import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { header, footer } from './partials.mjs';
import { pages } from './pages/index.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SITE_URL = 'https://kangarotech.com.au';

const layout = (page) => {
  const canonical = page.file === 'index.html' ? `${SITE_URL}/` : `${SITE_URL}/${page.file}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
<link rel="manifest" href="manifest.webmanifest" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${page.title}</title>
<meta name="description" content="${page.description}" />
<meta name="theme-color" content="#0a1a3c" />
<link rel="canonical" href="${canonical}" />

<meta property="og:type" content="website" />
<meta property="og:site_name" content="KANGARO TECH" />
<meta property="og:title" content="${page.title}" />
<meta property="og:description" content="${page.description}" />
<meta property="og:url" content="${canonical}" />
<meta property="og:image" content="${SITE_URL}/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${page.title}" />
<meta name="twitter:description" content="${page.description}" />
<meta name="twitter:image" content="${SITE_URL}/og-image.png" />

${page.jsonLd || ''}
<link rel="stylesheet" href="assets/css/style.css" />
<link rel="stylesheet" href="assets/vendor/bootstrap-icons.css" />
</head>
<body>
${header(page.active)}
<main>
${page.body}
</main>
${footer()}
<script src="assets/js/main.js"></script>
</body>
</html>
`;
};

mkdirSync(ROOT, { recursive: true });

pages.forEach((page) => {
  const html = layout(page);
  writeFileSync(join(ROOT, page.file), html, 'utf-8');
  console.log('wrote', page.file);
});

console.log(`\n${pages.length} pages generated.`);
