const HAPI = require("@hapi/hapi");
const routes = require("./routes");

async function init() 
{
    const server = HAPI.server({
        host : "localhost",
        port : 5000
    })


    server.route(routes)


    await server.start();
    console.log(`Server running at ${server.info.uri}`)
}

init();

