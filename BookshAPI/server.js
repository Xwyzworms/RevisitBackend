const HAPI = require("@hapi/hapi");
const {routes} = require("./routes");

const theServer = async() => {
    const server = HAPI.server({
        port  : 9000,
        host : "localhost",
    });

    server.route(routes);

    await server.start();
    console.log("Server iS Running");
}

theServer();