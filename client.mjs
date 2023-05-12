import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080/path');

ws.on('error', console.error);

ws.on('open', function open() {
  ws.send('select * from "_User"');
});

ws.on('message', function message(data) {
  const text=data.toString();
  data=JSON.parse(text);
  console.log(JSON.stringify({data},null,2));
  ws.close();
});

