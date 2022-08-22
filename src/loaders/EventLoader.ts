import fs from "fs";

export function loadEvents(dir: string) {
  const items: string[] = [];

  function readEvents(path: string) {
    fs.readdirSync(`src/${path}`).map((item) => {
      if (fs.statSync(`src/${path}/${item}`).isDirectory()) readEvents(`${path}/${item}`);
      else items.push(`${path}/${item}`);
    });
  }
  readEvents(dir);
  return items;
}
