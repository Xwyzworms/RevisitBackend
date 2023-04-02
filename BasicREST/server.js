/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const initServer = async() => {
  const server = Hapi.server({
    port: 5001,
    host: 'localhost', 
    routes : {
      cors : {
        origin : [`*`],
      },
    },
  });

  server.route(routes);


  await server.start();
  console.log("Server is running ");
}

initServer();
