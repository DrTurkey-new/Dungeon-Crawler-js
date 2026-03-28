// Making an adventure game based on Math.methods and if/else if...
alert("You must click F12 or go to the console to play the game!");

const playerName = prompt("Enter your PlayerName here!:");
alert("Welcome to the dungeon " + playerName + "!"); // User details.

let health = Math.floor(Math.random() * (100 - 70 + 1)) + 70; // Here: content inside Math.floor will give a value between 0 and 31. The +70 will give the starting limit of the random number.
// Imp Note : Use (Math.floor(Math.random() * (Max - Min + 1)) + Min) for creating a range
alert("You are proceeding with "+ health + " health!");

let luckScore = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10.
let bossLuck = Math.floor(Math.random() * 10) + 1; // New separate roll!

let weapon;

switch(true){
    case (luckScore <= 3 && luckScore > 1):
        weapon = "Wooden Spoon";
        console.log(`You are advancing into the dungeon with a ${weapon}!`);
        break;
        case (luckScore <= 6 && luckScore > 3):
            weapon = "Stone Sword";
            console.log(`You are advancing into the dungeon with a ${weapon}!`);
            break;
            case (luckScore <=10 && luckScore >6):
                weapon = "Golden Axe";
                console.log(`You are advancing into the dungeon with a ${weapon}!`);
                break;
                case (luckScore === 1): // Max use "===" when comparing.
                    weapon = "Bamboo Stick";
                    console.log(`You are advancing into the dungeon with a ${weapon}!`);
} // Creating 4 weapons depending on the luckScore.

let boss;

if (bossLuck <= 3 && bossLuck > 1){
    boss = "Rubber Duck";
    console.log(`You are confronted by a ${boss}!`);
}
    else if (bossLuck > 3 && bossLuck <= 6){
        boss = "Wild Boar";
        console.log(`You are confronted by a ${boss}!`);
    } else if (bossLuck > 6 && bossLuck <= 10){
        boss = "Dragon";
        console.log(`You are confronted by a ${boss}!`);
    } else if (bossLuck === 1){
        boss = "Baby Panda";
        console.log(`You are confronted by a ${boss}!`);
    } // Creating a boss depending on luckScore.

    let damage;

    if (boss === "Rubber Duck"){
        damage = 20; // Always. Cannot deflect the Duck Queen.
     console.log(`You lost ${damage} HP!`);
    } else if (boss === "Wild Boar"){
        if (weapon === "Stone Sword"){
            damage = 50; // You deflected a bit of damage.
            console.log(`You lost ${damage} HP!`);
        } else if (weapon === "Golden Axe"){
            damage = 20; // You deflected even better.
            console.log(`You lost ${damage} HP!`);
        } else {
            damage = 80;
            console.log(`You lost ${damage} HP!`);
        }
    }
    else if (boss === "Dragon"){
        if (weapon === "Golden Axe"){
            damage = 60; // You deflected some damage.
            console.log(`You lost ${damage} HP!`);
        } else {
            damage = 100;
            console.log(`You lost ${damage} HP!`);
        }
    } else if (boss === "Baby Panda"){
        if (weapon === "Bamboo Stick"){
            damage = 0;
            console.log(`You lost ${damage} HP!, the ${boss} is pleased and lets you go.`);
        } else {
            damage = 100;
            console.log(`You lost all your health! No weapon could damage this DemiKing!`)
            }} // Damage recieved based on boss and weapon.


let totalhealth = health - damage; // Total Health after the game.

if (totalhealth > 0 && totalhealth <= 25){
    console.log(`${playerName} has won with ${totalhealth} HP remaining! OOF that was a close one!!`);
} else if (totalhealth <= 0){
    console.log(`${playerName} has lost by ${totalhealth} HP!`);
} else {
    console.log(`${playerName} has won with ${totalhealth} HP remaining!`);
}


 console.log("THE END. You're always welcomed to play again until satisfied!!");