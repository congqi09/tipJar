import { createContext } from './trpc';
import { appRouter } from './root';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import ws from 'ws';

const port = process.env.NODE_ENV === 'production' ? 3000 : 3001;

const wss = new ws.Server({
  port: port,
});
const handler = applyWSSHandler({
  wss,
  router: appRouter,
  createContext,
});

wss.on('connection', (ws) => {
  console.log(`➕➕ Connection (${wss.clients.size})`);
  ws.once('close', () => {
    console.log(`➖➖ Connection (${wss.clients.size})`);
  });
});

console.log('✅ WebSocket Server listening on ws://localhost:' + port);

process.on('SIGTERM', () => {
  console.log('SIGTERM');
  handler.broadcastReconnectNotification();
  wss.close();
});
