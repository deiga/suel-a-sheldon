import serverConfiguration from './src/server';

console.log('Hello via Bun!');

const server = Bun.serve(serverConfiguration);

console.log(`Listening on ${server.url}`);
