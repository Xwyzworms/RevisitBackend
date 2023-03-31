class Barista {

    constructor() 
    {
        this.money = Math.floor(Math.random() * 100);
    }

    growl() 
    {
        console.log("grawwwww");
    }

}


module.exports = Barista;