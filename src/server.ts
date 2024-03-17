const serverConfiguration = {
  fetch(req: Request) {
    return new Response('Bun!');
  },
};

export function initServer() {
  const server = Bun.serve(serverConfiguration);
  console.log(`Listening on ${server.url}`);
}
