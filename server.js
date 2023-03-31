require('process');


/*const server = new Server({

    host : process.env.NODE_ENV !== "production" ? "localhost" : "nothing.com"

}); 
*/

const cpuInformation  = process.memoryUsage();
console.log(cpuInformation); 


const nodepath = process.argv[0];
const filePath = process.argv[1];
const args1 = process.argv[2];
const args2 = process.argv[3];
console.log(nodepath);
console.log(filePath);
console.log(args1);
console.log(args2);



const initialMemoryUsage = process.memoryUsage()['heapUsed'];

const name = process.argv[2];
const environtment = process.argv[3];


for(let i =0 ; i < 10000 ;i ++) 
{
    //
}

const currentMemoryUsage = process.memoryUsage()['heapUsed'];



console.log(initialMemoryUsage)
console.log(currentMemoryUsage)










