import { readFileSync } from 'fs';


async function readJson(filename){
  const buf = JSON.parse(readFileSync(filename).toString());
  return buf;
}

//console.log("readJson:",await readJson("/home/nn/.parse/pg_admin.json"));
export const all={};
all.readJson=readJson;
