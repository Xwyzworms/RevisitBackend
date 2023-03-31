const fs = require("fs");
const path = require("path");

const writableStream = fs.createWriteStream("userLogs.txt", options = {
    encoding : "utf-8",
} )


writableStream.write("This was the first line\n");
writableStream.write("This was the second line\n");
writableStream.end();