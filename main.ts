import inquirer from "inquirer";
class Player {
    name:string;
    fuel:number = 100

    constructor (name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25   //75
        this.fuel = fuel
    }
    fuelIncrease(){
        let fuel = this.fuel - 25  
        this.fuel = 100
    }

}
class Opponent {
    name:string;
    fuel:number = 100

    constructor (name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25   //75
        this.fuel = fuel
    }
    fuelIncrease(){
        //let fuel = this.fuel + 25  
        this.fuel = 100
    }

}
let player = await inquirer.prompt([
    {
        message:"please enter your name?",
        type:"input",
        name:"name"
    }
])
let opponent = await inquirer.prompt([
    {
        message:"please enter your opponent?",
        type:"list",
        name:"select",
        choices:["Skeleton","Alien","Zombie"]
    }
])

let p1 = new Player  (player.name)
let o1 = new Opponent (opponent.select)
do{
    if (opponent.select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                message:"what would you like to do?",
                type:"list",
                name:"opt",
                choices:["Attack","Drink Portion","Run For Your Life"]
            }
        ]);
        if (ask.opt === "Attack"){
            let num = Math.floor(Math.random()*2);
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0){
                    console.log("you loose. better luck next time!!!!!!")
                    process.exit()
                }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0){
                    console.log("you Win!!!!!!")
                    process.exit()
                }

            }
        }
        if (ask.opt == "Drink Portion" ){
            p1.fuelIncrease()
            console.log(`you drink health portion.your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..."){
            console.log("you loose. better luck next time!!!!!! ")
            process.exit()
        }    

    } 
    // Alian
    if (opponent.select == "Alien"){
        let ask = await inquirer.prompt([
            {
                message:"what would you like to do?",
                type:"list",
                name:"opt",
                choices:["Attack","Drink Portion","Run For Your Life"]
            }
        ]);
        if (ask.opt === "Attack"){
            let num = Math.floor(Math.random()*2);
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0){
                    console.log("you loose. better luck next time!!!!!!")
                    process.exit()
                }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0){
                    console.log("you Win!!!!!!")
                    process.exit()
                }

            }
        }
        if (ask.opt == "Drink Portion" ){
            p1.fuelIncrease()
            console.log(`you drink health portion.your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..."){
            console.log("you loose. better luck next time!!!!!! ")
            process.exit()
        }    

    } 
    //Zombie
    if (opponent.select == "Zombie"){
        let ask = await inquirer.prompt([
            {
                message:"what would you like to do?",
                type:"list",
                name:"opt",
                choices:["Attack","Drink Portion","Run For Your Life"]
            }
        ]);
        if (ask.opt === "Attack"){
            let num = Math.floor(Math.random()*2);
            if (num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0){
                    console.log("you loose. better luck next time!!!!!!")
                    process.exit()
                }
            }
            if (num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0){
                    console.log("you Win!!!!!!")
                    process.exit()
                }

            }
        }
        if (ask.opt == "Drink Portion" ){
            p1.fuelIncrease()
            console.log(`you drink health portion.your fuel is ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..."){
            console.log("you loose. better luck next time!!!!!! ")
            process.exit()
        }    

    } 
}while(true)
   