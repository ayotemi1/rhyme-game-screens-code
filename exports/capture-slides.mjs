import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SLIDES = [
  { name: 'S1-Hero',              path: 'AppStoreS1' },
  { name: 'S2-Bouncing-Beat',     path: 'AppStoreS2' },
  { name: 'S3-Track-Progress',    path: 'AppStoreS3' },
  { name: 'S4-Share-Journey',     path: 'AppStoreS4' },
  { name: 'S5-Start-Freestyling', path: 'AppStoreS5' },
];

const BASE_URL = 'http://localhost:80/__mockup/preview/rhyme-game';
const WIDTH    = 390;
const HEIGHT   = 844;

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  for (const slide of SLIDES) {
    const url  = `${BASE_URL}/${slide.path}`;
    const file = path.join(__dirname, `${slide.name}.png`);

    const page = await browser.newPage();
    await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 800));   // let fonts/images settle
    await page.screenshot({ path: file, fullPage: false });
    await page.close();

    console.log(`✓ Saved: ${slide.name}.png`);
  }

  await browser.close();
  console.log('\nAll 5 slides exported to exports/');
})();
