const fastify = require('fastify')({

    logger: true

  })




  fastify.get('/', function (req, reply){

    reply.send([

        { id: 1, title: 'Task One', body: 'This is a task' },
        { id: 2, title: 'Task Two', body: 'This is the task ' },
        { id: 3, title: 'Task Three', body: 'This is the ultimate task' },

    ]);

  });


  fastify.register(require('./routes/posts'))


 fastify.listen({ port: 3000}, function(err, address) {
    if(err) {
        fastify.log.error(err)

        process.exit(1)

    }
  })