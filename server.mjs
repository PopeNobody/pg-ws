import { WebSocketServer } from 'ws';
import { all } from './util.mjs';
const readJson=all.readJson;
const configDir=process.env.HOME+"/.parse/";
const flavor=process.env.PARSE_FLAVOR;
const configFile=configDir+"config-"+flavor+".json";
const config=await readJson(configFile);
console.log({config});
process.exit(0);

import pgpfn from 'pg-promise';
const initData={};
import pgpmon from 'pg-monitor';
const pgp=pgpfn(initData);
pgpmon.attach(initData);
const db = pgp(pgp_cred);

console.log(db.any('select count(*) from "_User"'));
// async function server() {
//   console.log("server");
//   const wss = new WebSocketServer({ host: "127.0.0.1", port: 8080 });
// 
//   wss.on('connection', function connection(ws) {
//     ws.on('error', console.error);
// 
//     ws.on('message', function message(data) {
//       console.log(data.toString());
//     });
// 
//   });
// }
// var sp = server();
// Promise.all([sp]);
