const fs  = require("fs");
const path = require("path");
const fileReadCallback = (error, data) => {
    if(error) 
    {
        console.log("Gagal membaca berkas " + error);
        return ;
    }

    console.log(data);
}


fs.readFile(path.resolve(__dirname,"do.txt"), 
 {encoding : "utf-8"},
 callback = fileReadCallback);


 