const serverConfiguration = {
  fetch(req: Request) {
    return new Response('Bun!');
  },
};

export default serverConfiguration;
