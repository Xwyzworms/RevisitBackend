const coffee = require("./coffee");
const Barista = require("./Barista")
const UselessPerson = require("./UselessPerson");

const whichOneHadMoreMoney = (barista, useless) => {

    if(barista.money > useless.money) 
    {
        barista.growl();
    }
    else if(useless.money > barista.money)
    {
        useless.howl();
    }
    else 
    {
        console.log(barista.money);
        console.log(useless.money);
        console.log("Dude they have same amount of money");
    }
        return;
}


const barista = new Barista();
const useless = new UselessPerson();
console.log(useless);
whichOneHadMoreMoney(barista, useless);


console.log(coffee);