const server = {
  fetch(req: Request) {
    return new Response('Bun!');
  },
};

export default server;
