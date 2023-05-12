import { WebSocketServer } from 'ws';
import { all } from './util.mjs';

import pgpass from 'pgpass';
import parse from 'pg-connection-string';


import pgpfn from 'pg-promise';
const initData={};
import pgpmon from 'pg-monitor';
const pgp=pgpfn(initData);
pgpmon.attach(initData);
const pgp_cred = { host: "/var/run/postgresql/" }
const db = pgp(pgp_cred);

async function server() {
  console.log("server");
  const wss = new WebSocketServer({ host: "127.0.0.1", port: 8080 });

  wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', async function message(data) {
      const sql = data.toString();
      const res = await db.any(sql);
      const str = JSON.stringify({sql,res});
      ws.send(str);
    });
  });
}
var sp = server();
Promise.all([sp]);
