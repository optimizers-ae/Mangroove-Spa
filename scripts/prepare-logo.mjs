import fs from 'fs';
import sharp from 'sharp';

async function processLogo() {
  // Let's create an elegant framed logo asset preserving the original emblem
  const input = 'public/mangroove-logo-badge.png';
  
  // Create a high-res version with soft vignette
  await sharp(input)
    .resize(500, 360, { fit: 'contain', background: { r: 245, g: 240, b: 232, alpha: 0 } })
    .toFile('public/mangroove-logo.png');

  console.log('Processed mangroove-logo.png successfully');
}

processLogo().catch(console.error);

