const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream(
    path.resolve(__dirname, "article.txt"),
    {
        encoding : "utf-8",
        highWaterMark  : 10   //
    }
)

readableStream.on("readable", () => {
    try {
    
        process.stdout.write(`${readableStream.read()}\n`)
    }
    catch(error) 
    {

    }
})

readableStream.on("end", () => {
    console.log("Done");
})