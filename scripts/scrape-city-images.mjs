const cityPages = [
  ["deltona", "https://www.citypowerwashing.com/pressure-washing-deltona-florida"],
  ["debary", "https://www.citypowerwashing.com/pressure-washing-debary-florida"],
  ["deland", "https://www.citypowerwashing.com/pressure-washing-deland-florida"],
  ["orange-city", "https://www.citypowerwashing.com/pressure-washing-orange-city"],
  ["lake-mary", "https://www.citypowerwashing.com/pressure-washing-lake-mary-florida"],
  ["sanford", "https://www.citypowerwashing.com/pressure-washing-sanford-florida"],
];

for (const [name, url] of cityPages) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const matches = [...html.matchAll(/static\.wixstatic\.com\/media\/([^"'\s]+~mv2\.(?:jpg|webp|png))/gi)];
    const ids = [...new Set(matches.map((m) => m[1].split("/")[0]))];
    console.log(`\n${name}:`);
    ids.slice(0, 8).forEach((id) => console.log(`  https://static.wixstatic.com/media/${id}/v1/fit/w_1600,h_900,al_c,q_90/image`));
  } catch (e) {
    console.log(`${name}: ${e.message}`);
  }
}
