/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

async function initServer() {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);


  await server.start();
  console.log("Server is running ");
}

initServer();
