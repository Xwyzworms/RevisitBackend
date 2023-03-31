const http = require("http");

// READ THE DOCS RIP
function requestListener(request, response) 
{

    const methodRequest = request.method;
    const url = request.url;

    console.log(methodRequest)
    response.setHeader(name = "Content-type",
                 value ="application/json" );
    response.setHeader(name="X-Powered-By", value= "NodeJs");
    response.setHeader(name="SiriusBlack",value="Potter");

    if(url == "/") 
    {
        if(methodRequest == "GET" ) 
        {
            response.statusCode = 200;
            stringJson = JSON.stringify({
                message : "Hey, you're in homepage"
            })
            response.end(stringJson);
        }
        else 
        {
            response.statusCode = 400;
            stringJson = JSON.stringify({
                message : `You cannot access this page with ${methodRequest}, wtf`
            }) 
            response.end(stringJson)
        }
    }

    else if (url == "/about") 
    {
        if(methodRequest == "GET" ) 
        {
            response.statusCode = 200;
            stringJson = JSON.stringify({
                message : "You're accessing about page"
            }) 
            response.end(stringJson)
        }
        
        else if(methodRequest == "POST") 
        {
            let body = []
            request.on("data", (chunk) => {
                body.push(chunk);
            })

            request.on("end", () => {
                body = Buffer.concat(body).toString()
                const nameUser = JSON.parse(body);
                response.statusCode = 200;
                response.end(`<h1> Heyyaa how are you ${nameUser["name"]}</h1>` );
            }) 
        }

        else 
        {
            response.statusCode = 400;;
            stringJson = JSON.stringify({
                message : `You cannot access with ${methodRequest}, WTF`
            })
            response.end(stringJson)
        }
    }
    else 
    {
        response.statusCode = 404;
        stringJson = JSON.stringify({
            message : "Page is not found"
            })
        response.end(stringJson);
    }

    /*
    if(methodRequest == "POST") 
    {
        let body = []
        request.on("data", (chunk) => {
            body.push(chunk) // Masih berupa Hex representation
        })


        request.on("end", () => {
            body = Buffer.concat(body).toString()// Convert to string reprsentation
            const {name} = JSON.parse(body);
            response.end(name);
        })
    }
    
    if(methodRequest == "PUT") 
    {
        response.end("<h1> Bonjour Put method</h1>")
    }

    if(methodRequest == "DELETE") 
    {
        response.end("<h1> Delete Salaam </h1>");
    }
*/

};



const server = http.createServer(requestListener)
const portTarget = 5001;
const host = "localhost";
server.listen(port = portTarget,
              hostname = host,
               () => 
               {
                    console.log(`Server berjalan pada http://${host}:${port}`)

               }
               
               ) 



