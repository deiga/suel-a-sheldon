import serverConfiguration from './src/server';
import { initDb } from './src/db';

console.log('Hello via Bun!');

await initDb();

const server = Bun.serve(serverConfiguration);

console.log(`Listening on ${server.url}`);
