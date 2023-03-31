const EventEmitter = require("events");

const objEventEmitter = new EventEmitter();

const makeSomeCoffee = ({name}) => {
    console.log(`Kopi telah siap ${name}`);
}

function makeAbillDude({price}) 
{
    console.log(`Hey anda biayanya ${price}`)
}


objEventEmitter.on('coffee-order', makeSomeCoffee);
objEventEmitter.on("coffee-order", makeAbillDude);


objEventEmitter.emit("coffee-order", {name : "Ampas", price : 200});


