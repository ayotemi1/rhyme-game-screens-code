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

const BASE_URL         = 'http://localhost:80/__mockup/preview/rhyme-game';
const WIDTH            = 390;
const HEIGHT           = 844;
const DEVICE_SCALE     = 4;   // 4× = ~1560×3376px — 4K quality

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/nix/store/qa9cnw4v5xkxyip6mb9kxqfq1z4x2dx1-chromium-138.0.7204.100/bin/chromium',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
    ],
  });

  for (const slide of SLIDES) {
    const url  = `${BASE_URL}/${slide.path}`;
    const file = path.join(__dirname, `${slide.name}.png`);

    const page = await browser.newPage();
    await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: DEVICE_SCALE });
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 20000 });
    await new Promise(r => setTimeout(r, 1200));   // let fonts, images & gradients settle
    await page.screenshot({ path: file, fullPage: false });
    await page.close();

    console.log(`✓  ${slide.name}.png  (${WIDTH * DEVICE_SCALE}×${HEIGHT * DEVICE_SCALE}px)`);
  }

  await browser.close();
  console.log('\nAll 5 slides saved to exports/');
})();
