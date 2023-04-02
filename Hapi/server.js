const HAPI = require("@hapi/hapi");
const routes = require("./routes");

const init = async() =>
{
    const server = HAPI.server({
        host : "localhost",
        port : 5000,
        routes: {
            cors : {
                origin : ['*'],
            }
        }
    })


    server.route(routes)

    await server.start();
    console.log(`Server running at ${server.info.uri}`)
}

init();

