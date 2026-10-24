
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const projectRoot = process.cwd();
const inputRoot = path.join(projectRoot, "public", "assets", "projects");
const outputRoot = path.join(projectRoot, "project-contact-sheets");

const COLUMNS = 4;
const ROWS = 5;
const CELL_WIDTH = 240;
const CELL_HEIGHT = 270;
const IMAGE_HEIGHT = 225;
const LABEL_HEIGHT = CELL_HEIGHT - IMAGE_HEIGHT;

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getWebpFiles(folder) {
  return fs
    .readdirSync(folder, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.webp$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort();
}

async function createContactSheet(folderName, files, pageNumber) {
  const folderPath = path.join(inputRoot, folderName);
  const pageFiles = files.slice(
    pageNumber * COLUMNS * ROWS,
    (pageNumber + 1) * COLUMNS * ROWS
  );

  const composites = [];

  for (let index = 0; index < pageFiles.length; index++) {
    const filename = pageFiles[index];
    const imagePath = path.join(folderPath, filename);

    const thumbnail = await sharp(imagePath)
      .rotate()
      .resize(CELL_WIDTH - 12, IMAGE_HEIGHT - 12, {
        fit: "contain",
        background: "#ffffff",
      })
      .png()
      .toBuffer();

    const labelSvg = Buffer.from(`
      <svg width="${CELL_WIDTH}" height="${LABEL_HEIGHT}">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text
          x="${CELL_WIDTH / 2}"
          y="22"
          font-family="Arial, sans-serif"
          font-size="11"
          font-weight="bold"
          fill="#111111"
          text-anchor="middle"
        >${escapeXml(filename)}</text>
        <text
          x="${CELL_WIDTH / 2}"
          y="43"
          font-family="Arial, sans-serif"
          font-size="10"
          fill="#555555"
          text-anchor="middle"
        >${escapeXml(folderName.replace("project-section-", ""))}</text>
      </svg>
    `);

    const cell = await sharp({
      create: {
        width: CELL_WIDTH,
        height: CELL_HEIGHT,
        channels: 4,
        background: "#ffffff",
      },
    })
      .composite([
        {
          input: thumbnail,
          left: 6,
          top: 6,
        },
        {
          input: labelSvg,
          left: 0,
          top: IMAGE_HEIGHT,
        },
      ])
      .png()
      .toBuffer();

    const column = index % COLUMNS;
    const row = Math.floor(index / COLUMNS);

    composites.push({
      input: cell,
      left: column * CELL_WIDTH,
      top: row * CELL_HEIGHT,
    });
  }

  const sheetWidth = COLUMNS * CELL_WIDTH;
  const sheetHeight = ROWS * CELL_HEIGHT;
  const pageLabel = String(pageNumber + 1).padStart(2, "0");
  const outputName = `${folderName}-page-${pageLabel}.jpg`;

  await sharp({
    create: {
      width: sheetWidth,
      height: sheetHeight,
      channels: 3,
      background: "#d4af37",
    },
  })
    .composite(composites)
    .jpeg({ quality: 88 })
    .toFile(path.join(outputRoot, outputName));

  console.log(`Created: ${outputName} (${pageFiles.length} images)`);
}

async function main() {
  if (!fs.existsSync(inputRoot)) {
    throw new Error(`Projects folder not found: ${inputRoot}`);
  }

  fs.mkdirSync(outputRoot, { recursive: true });

  const folders = fs
    .readdirSync(inputRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  let totalImages = 0;
  let totalSheets = 0;

  for (const folderName of folders) {
    const folderPath = path.join(inputRoot, folderName);
    const files = getWebpFiles(folderPath);

    if (files.length === 0) continue;

    totalImages += files.length;

    const pages = Math.ceil(files.length / (COLUMNS * ROWS));

    for (let page = 0; page < pages; page++) {
      await createContactSheet(folderName, files, page);
      totalSheets++;
    }
  }

  console.log("");
  console.log("Contact sheets completed.");
  console.log(`Images processed: ${totalImages}`);
  console.log(`Sheets created: ${totalSheets}`);
  console.log(`Output folder: ${outputRoot}`);
}

main().catch((error) => {
  console.error("Failed to create contact sheets:");
  console.error(error);
  process.exitCode = 1;
});
