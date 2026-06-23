const pages = [
  "https://www.citypowerwashing.com",
  "https://www.citypowerwashing.com/soft-house-washing",
  "https://www.citypowerwashing.com/soft-wash-roof-cleaning",
  "https://www.citypowerwashing.com/driveway-pressure-washing",
  "https://www.citypowerwashing.com/commercial-pressure-washing-central-florida",
];

const urls = new Set();

for (const page of pages) {
  try {
    const res = await fetch(page);
    const html = await res.text();
    const matches = html.match(/https:\/\/static\.wixstatic\.com\/media\/[^"'\s)]+/g) || [];
    matches.forEach((u) => urls.add(u.split("#")[0]));
    console.log(`${page}: ${matches.length} images`);
  } catch (e) {
    console.error(page, e.message);
  }
}

console.log("\n--- UNIQUE IMAGES ---\n");
[...urls].forEach((u) => console.log(u));
