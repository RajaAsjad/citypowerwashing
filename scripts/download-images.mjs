import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images");

/** Base Wix media IDs → local filenames (HD fit URLs) */
const IMAGES = {
  "hero-bg": {
    url: "https://static.wixstatic.com/media/cb98f6_d050efd6681c4f0681ce6f2d39295b4e~mv2.jpg/v1/fit/w_2500,h_1330,al_c/cb98f6_d050efd6681c4f0681ce6f2d39295b4e~mv2.jpg",
    file: "hero-bg.jpg",
  },
  logo: {
    url: "https://static.wixstatic.com/media/cb98f6_fd28d4ea4614465ebb2140b1f15de119~mv2.png/v1/fit/w_500,h_500,al_c,q_95/cb98f6_fd28d4ea4614465ebb2140b1f15de119~mv2.png",
    file: "logo.png",
  },
  "hero-crew": {
    url: "https://static.wixstatic.com/media/cb98f6_6ead4c0ab7034057bf1174c295a4ece8~mv2.png/v1/fit/w_1200,h_1200,al_c,q_95/mobileheroguy_edited_edited.png",
    file: "hero-crew.png",
  },
  "house-washing": {
    url: "https://static.wixstatic.com/media/cb98f6_2ba385a89e504b319927f77b7967c39e~mv2.webp/v1/fit/w_1600,h_1000,al_c,q_90/cb98f6_2ba385a89e504b319927f77b7967c39e~mv2.webp",
    file: "house-washing.webp",
  },
  "roof-cleaning": {
    url: "https://static.wixstatic.com/media/cb98f6_e2d46a6e33eb47a6a5f399bc583db94a~mv2.webp/v1/fit/w_1600,h_1200,al_c,q_90/garden%20center%20roof%20cleaning%20in%20Central%20Florida.webp",
    file: "roof-cleaning.webp",
  },
  "roof-cleaning-2": {
    url: "https://static.wixstatic.com/media/cb98f6_21299aaee9c241b3b2bf370dfc920bc4~mv2.webp/v1/fit/w_1600,h_1200,al_c,q_90/garden%20center%20commercial%20roof%20washing%20in%20Deltona%20FL.webp",
    file: "roof-cleaning-commercial.webp",
  },
  "driveway-before": {
    url: "https://static.wixstatic.com/media/cb98f6_02a867fe3a1a4904bd8f5de2db9ff175~mv2.webp/v1/fit/w_1200,h_900,al_c,q_90/cb98f6_02a867fe3a1a4904bd8f5de2db9ff175~mv2.webp",
    file: "project-before.webp",
  },
  "driveway-after": {
    url: "https://static.wixstatic.com/media/cb98f6_741a32218b104fffa63a19d823e84cc2~mv2.webp/v1/fit/w_1200,h_900,al_c,q_90/grease%20removal%20after%20(1).webp",
    file: "project-after.webp",
  },
  "patio-washing": {
    url: "https://static.wixstatic.com/media/cb98f6_7bae6c4b864f49c8bae5e627750c6f0c~mv2.jpg/v1/fit/w_1600,h_1200,al_c,q_90/patio-washing-central-fl_edited.jpg",
    file: "patio-washing.jpg",
  },
  "pool-deck": {
    url: "https://static.wixstatic.com/media/cb98f6_40861e89965c4030a1b6abda5f48d6af~mv2.webp/v1/fit/w_1600,h_1200,al_c,q_90/pool-deck-cleaning-in-Deltona-FL.webp",
    file: "pool-deck.webp",
  },
  "commercial": {
    url: "https://static.wixstatic.com/media/cb98f6_faa3df6bd7994048b8a3a700ed7e5518~mv2.webp/v1/fit/w_1600,h_1066,al_c,q_90/cb98f6_faa3df6bd7994048b8a700ed7e5518~mv2.webp",
    file: "commercial.webp",
  },
  "residential": {
    url: "https://static.wixstatic.com/media/cb98f6_e1d760ab37c64637af2038a01a9cdc64~mv2.webp/v1/fit/w_1600,h_1200,al_c,q_90/cb98f6_e1d760ab37c64637af2038a01a9cdc64~mv2.webp",
    file: "residential.webp",
  },
  "guarantee": {
    url: "https://static.wixstatic.com/media/cb98f6_ce6f7100d9e34d3a8bae8455ac3bb717~mv2.png/v1/fit/w_640,h_564,al_c,q_95/guarantee_edited_edited.png",
    file: "guarantee.png",
  },
  "project-1": {
    url: "https://static.wixstatic.com/media/11062b_c4a9409cabea4e2eaa4afdda662b7eecf000.jpg/v1/fit/w_1600,h_900,al_c,q_90/11062b_c4a9409cabea4e2eaa4afdda662b7eecf000.jpg",
    file: "project-1.jpg",
  },
  "project-2": {
    url: "https://static.wixstatic.com/media/11062b_07807325328a416f9e0684ec88ae3249f000.jpg/v1/fit/w_1600,h_900,al_c,q_90/11062b_07807325328a416f9e0684ec88ae3249f000.jpg",
    file: "project-2.jpg",
  },
  "project-3": {
    url: "https://static.wixstatic.com/media/cb98f6_56546daab45947f9a16fd45b60434eb9f000.jpg/v1/fit/w_1600,h_900,al_c,q_90/cb98f6_56546daab45947f9a16fd45b60434eb9f000.jpg",
    file: "project-3.jpg",
  },
};

fs.mkdirSync(outDir, { recursive: true });

for (const [key, { url, file }] of Object.entries(IMAGES)) {
  const dest = path.join(outDir, file);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    console.log(`✓ ${key} → ${file} (${(buf.length / 1024).toFixed(0)} KB)`);
  } catch (e) {
    console.error(`✗ ${key}: ${e.message}`);
    // retry without wrong filename in commercial URL
    if (key === "commercial") {
      const alt =
        "https://static.wixstatic.com/media/cb98f6_faa3df6bd7994048b8a3a700ed7e5518~mv2.webp/v1/fit/w_1600,h_1066,al_c,q_90/cb98f6_faa3df6bd7994048b8a3a700ed7e5518~mv2.webp";
      const res = await fetch(alt);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`✓ ${key} (retry) → ${file}`);
    }
  }
}

console.log("\nDone.");
