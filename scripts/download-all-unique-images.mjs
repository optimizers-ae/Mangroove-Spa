import fs from 'fs';
import https from 'https';
import path from 'path';

const imgDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const imagesToDownload = [
  // Page Hero Backgrounds
  { name: 'hero-about-bg.jpg', id: '1583416750470-965b2707b355', w: 1920 },
  { name: 'hero-treatments-bg.jpg', id: '1590490360182-c33d57733427', w: 1920 },
  { name: 'hero-gallery-bg.jpg', id: '1512917774080-9991f1c4c750', w: 1920 },
  { name: 'hero-contact-bg.jpg', id: '1582719478250-c89cae4dc85b', w: 1920 },

  // Treatments
  { name: 'treatment-hot-oil.jpg', id: '1600334129128-685c5582fd35', w: 1200 },
  { name: 'treatment-jacuzzi.jpg', id: '1584132967334-10e028bd69f7', w: 1200 },
  { name: 'treatment-hot-stone.jpg', id: '1544161515-4ab6ce6db874', w: 1200 },
  { name: 'treatment-moroccan-bath.jpg', id: '1507652313519-d4e9174996dd', w: 1200 },
  { name: 'treatment-classical.jpg', id: '1570172619644-dfd03ed5d881', w: 1200 },

  // Home Specific Images
  { name: 'home-intro-arch.jpg', id: '1522337360788-8b13dee7a37e', w: 1200 },
  { name: 'home-jacuzzi-feature.jpg', id: '1584132915807-fd1f5fbc078f', w: 1200 },
  { name: 'home-pillar-1.jpg', id: '1537633552985-df8429e8048b', w: 800 },
  { name: 'home-pillar-2.jpg', id: '1540541338287-41700207dee6', w: 800 },
  { name: 'home-pillar-3.jpg', id: '1566073771259-6a8506099945', w: 800 },
  { name: 'home-pillar-4.jpg', id: '1515377905703-c4788e51af15', w: 800 },

  // About Specific Images
  { name: 'about-story.jpg', id: '1512918728675-ed5a9ecdebfd', w: 1200 },
  { name: 'about-comfort-privacy.jpg', id: '1578683010236-d716f9a3f461', w: 1000 },
  { name: 'about-comfort-oils.jpg', id: '1519823551278-64ac92734fb1', w: 1000 },
  { name: 'about-comfort-acoustic.jpg', id: '1506126613408-eca07ce68773', w: 1000 },
  { name: 'about-arch.jpg', id: '1560066984-138dadb4c035', w: 1000 },
  { name: 'about-jacuzzi.jpg', id: '1571896349842-33c89424de2d', w: 1000 },
  { name: 'about-marble.jpg', id: '1596178065887-1198b6148b2b', w: 1000 },

  // Gallery Specific (all 12 distinct)
  { name: 'gallery-1.jpg', id: '1540555700478-4be289fbecef', w: 1200 },
  { name: 'gallery-2.jpg', id: '1571896349842-33c89424de2d', w: 1200 },
  { name: 'gallery-3.jpg', id: '1515377905703-c4788e51af15', w: 1200 },
  { name: 'gallery-4.jpg', id: '1600334129128-685c5582fd35', w: 1200 },
  { name: 'gallery-5.jpg', id: '1507652313519-d4e9174996dd', w: 1200 },
  { name: 'gallery-6.jpg', id: '1590490360182-c33d57733427', w: 1200 },
  { name: 'gallery-7.jpg', id: '1583416750470-965b2707b355', w: 1200 },
  { name: 'gallery-8.jpg', id: '1570172619644-dfd03ed5d881', w: 1200 },
  { name: 'gallery-9.jpg', id: '1584132915807-fd1f5fbc078f', w: 1200 },
  { name: 'gallery-10.jpg', id: '1539650116574-8efeb43e2750', w: 1200 },
  { name: 'gallery-11.jpg', id: '1519823551278-64ac92734fb1', w: 1200 },
  { name: 'gallery-12.jpg', id: '1545205597-3d9d02c29597', w: 1200 }
];

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(imgDir, item.name);
    const url = `https://images.unsplash.com/photo-${item.id}?auto=format&fit=crop&w=${item.w}&q=85`;
    const file = fs.createWriteStream(dest);

    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redir) => {
          redir.pipe(file);
          file.on('finish', () => { file.close(); console.log('Downloaded:', item.name); resolve(item.name); });
        }).on('error', reject);
      } else if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); console.log('Downloaded:', item.name); resolve(item.name); });
      } else {
        console.warn('Failed:', item.name, res.statusCode);
        resolve(null);
      }
    }).on('error', reject);

  });
}


async function run() {
  console.log(`Starting download of ${imagesToDownload.length} unique images...`);
  // Download in parallel chunks of 4 to be polite and fast
  for (let i = 0; i < imagesToDownload.length; i += 4) {
    const chunk = imagesToDownload.slice(i, i + 4);
    await Promise.all(chunk.map(downloadFile));
  }
  console.log('Finished downloading all images!');
}

run().catch(console.error);

