const dir = process.argv[0];
const filePath = process.argv[1];
const params1 = process.argv[2];
const params2 = process.argv[3];
const params3 = p

console.log(
    dir, filePath, params1, params2
)
const message = (name) => {
    console.log(`Hello ${name}`);
}

const cpuInformation = process.memoryUsage();
message(cpuInformation);

