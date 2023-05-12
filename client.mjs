import WebSocket from 'ws';

const ws = new WebSocket('ws://localhost:8080/path');

ws.on('error', console.error);

ws.on('open', function open() {
  ws.send('select count(*) from "_User"');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});

