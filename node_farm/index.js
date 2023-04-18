const { Console } = require("console");
const fs = require("fs"); // Require file system
const http =require("http");
const url =require("url");
/// Full Sychronous Way of writing
/*
const textInput = fs.readFileSync("./txt/input.txt", {
    "encoding" : "utf-8",
});

const textOut = `This is what we know about the avocado ${textInput}.\nCreated on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut, { encoding: "utf-8" });

const output = fs.readFileSync("./txt.output.txt", {encoding : "utf-8"} );
console.log(output);

/// Full asynchronous way of IO

fs.readFile("./txt/start.txt", {encoding : "utf-8"}, (err, data ) => {
    fs.readFile(`./txt/${data}.txt`, {encoding : "utf-8"}, (err, data2) => {
        fs.readFile("./txt/append.txt", {encoding : "utf-8"}, (err, data3) => {
            fs.writeFile("./txt/outputAppend.txt", data2  + data3, {encoding : "utf-8"},(err) => {
                console.log("Data Written : ");
                fs.readFile("./txt/outputAppend.txt" ,(err, finData) => {
                    console.log(finData);
                });
            } ) 
        })
    })
})
*/

// Creating f Sever
console.log(__dirname);
const productData = fs.readFileSync(`${__dirname}/dev-data/data.json`,{encoding : "utf-8"});
const productDataObject = JSON.parse(productData)
const server = http.createServer( (req, res) => {
    const pathName = req.url;

    if(pathName === "/") 
    {
        res.end("This is Main Index");
    }
    else if(pathName === "/overview") 
    {
        res.end("This is Overview wtf");
    }
    else if(pathName === "/product") 
    {
        res.end("This is Product")
    }
    else if(pathName === "/api") 
    {
        res.writeHead(200, {
            "Content-Type" : "app/json"
        })
        res.end(JSON.stringify(productDataObject));
    }
    else 
    {
        res.writeHead(404, {
            "Content-Type" : "text/html"
        }); 
        res.end("<h1>Hello shit</h1>");
    }

}) 

server.listen(8000, "127.0.0.1", ()=>
{
    console.log("Listening to request ! on port 8000");
} );
