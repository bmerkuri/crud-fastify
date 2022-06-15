const fastify = require('fastify')({ logger: true });
fastify.register(require('./routes/posts')); // we will be working with posts.js only for now

fastify.get('/', (req, reply) => {
    reply.send('Hello World!');
  });

  const startServer = async () => {
    try {
      await fastify.listen(PORT);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  };