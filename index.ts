import { initServer } from './src/server';
import { initDb } from './src/db';

console.log('Hello via Bun!');

await initDb();
initServer();
