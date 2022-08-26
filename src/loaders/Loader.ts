import * as fs from "fs";

export function load(dir: string) {
  const items: string[] = [];

  function read(path: string) {
    fs.readdirSync(`src/${path}`).map((item) => {
      if (fs.statSync(`src/${path}/${item}`).isDirectory()) read(`${path}/${item}`);
      else items.push(`${path}/${item}`);
    });
  }
  read(dir);
  return items;
}
