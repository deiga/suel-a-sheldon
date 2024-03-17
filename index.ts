import { initServer } from './src/server';
import TxtDb from './src/db';

console.log('Hello via Bun!');

await TxtDb.init();
initServer();

TxtDb.list();
