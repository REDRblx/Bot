import fs from "fs";

export function loadCommands(dir: string) {
  const items: string[] = [];

  function readCommands(path: string) {
    fs.readdirSync(`src/${path}`).map((item) => {
      if (fs.statSync(`src/${path}/${item}`).isDirectory()) readCommands(`${path}/${item}`);
      else items.push(`${path}/${item}`);
    });
  }
  readCommands(dir);
  return items;
}
