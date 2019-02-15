var readline = require('readline-sync');
var isAlive = true;
var hasWon = false;

function mainCharacter (name) {
    this.name = name;
    this.attack = Math.floor(Math.random()*39)+13;
    this.hp = 1000;
    this.items = [];
    this.isAlive = true;
}

function Enemy (name, attack, hp) {
    this.name = name;
    this.attack = attack;
    this.hp = hp;
}
//attack strengths
var randomLow = Math.floor(Math.random()*10)+10;
var randomMedium = Math.floor(Math.random()*15)+20;
var randomHigh = Math.floor(Math.random()*30)+60;
var randomSuperHigh = Math.floor(Math.random()*60)+100;

//enemies
var Fred = new Enemy('Fred', randomMedium, 35)
var Josiah = new Enemy('Josiah', randomLow, 25)
var mcRide = new Enemy('Mc Ride', randomHigh, 66)
var cthulhu = new Enemy(`
██████╗████████╗██╗  ██╗██╗   ██╗██╗     ██╗  ██╗██╗   ██╗
██╔════╝╚══██╔══╝██║  ██║██║   ██║██║     ██║  ██║██║   ██║
██║        ██║   ███████║██║   ██║██║     ███████║██║   ██║
██║        ██║   ██╔══██║██║   ██║██║     ██╔══██║██║   ██║
╚██████╗   ██║   ██║  ██║╚██████╔╝███████╗██║  ██║╚██████╔╝
╚═════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ 
                                                          
`, randomSuperHigh, 100)
var enemies = [Fred, Josiah, mcRide, cthulhu]


//amulets

function Amulets (name) {
    this.name = name;
}
var sacredamulet = new Amulets('Sacred Amulet of Pavovia')
var sacredamulet2 = new Amulets('Sacred Amulet of Moonland')
var sacredamulet3 = new Amulets('Sacred Amulet of Medonia')
var sacredamulet4 = new Amulets('Somewhat Sacred Amulet of Marsonia')
var sacredamulet5 = new Amulets('Unholy Amulet of Sataneal')

var sacredamulets = [sacredamulet.name, sacredamulet2.name, sacredamulet3.name, sacredamulet4.name, sacredamulet5.name]

function amuletSelect() {
    var random = Math.floor(Math.random() * 5)
        return sacredamulets[random]
}



console.log(`
_______ _     _ _______             _______ ______  __   __  ______ _____ __   _ _______ _     _
   |    |_____| |______      |      |_____| |_____]   \_/   |_____/   |   | \  |    |    |_____|
   |    |     | |______      |_____ |     | |_____]    |    |    \_ __|__ |  \_|    |    |     |
                                                                                                
`);

var userName = readline.question("\n" + "Every true adventurer needs a name. What is your name young seeker? : ")
var hero = new mainCharacter(userName)
myFunction()
function myFunction() {
console.log("\n" + "Welcome " + hero.name + ".... " + "But beware... for who knows the perils that await you within the labyrinth..." + "\n"), 3000;
}

while(isAlive && !hasWon){
    
main()

function main() {var action = readline.keyIn("What would you like to do? [w] Walk, [p] Print Inventory, [q] Quit Game ", {limit: 'wpq'})
    if(action === 'w'){
        walk()
    } if(action === 'p') {
        console.log("\n" + hero.name + ", " + " Your Inventory: " + hero.items + " " + ", hp: " + hero.hp + "\n")
    } if(action === 'q') {
        isAlive = false;
    }
}

function walk() {
    var random = Math.floor(Math.random()*4)
    if(random === 0) {
        encounter()
    } if(random === 1) {
        console.log(`Walking`)
        console.log(`.`)
        console.log(`.`)
        console.log(`.`)
        if (readline.keyInYN('Turn the corner?')) {
            console.log("\n")
        } else {
            main()
        }
        
        main()
    } if(random ===2) {
        freetime()
    } if(random === 3) {
        console.log(`You slowly walk past the mouth of a cave and notice a strange light glowing from within`)
        if (readline.keyInYN('Continue?')) {
            console.log("\n")
        } else {
            isAlive = false
        }
        main()
    }
}

function encounter() {
    console.log(`
    ███████╗███╗   ██╗███████╗███╗   ███╗██╗   ██╗     █████╗ ██████╗ ██████╗ ███████╗ █████╗ ██████╗ ███████╗
    ██╔════╝████╗  ██║██╔════╝████╗ ████║╚██╗ ██╔╝    ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝
    █████╗  ██╔██╗ ██║█████╗  ██╔████╔██║ ╚████╔╝     ███████║██████╔╝██████╔╝█████╗  ███████║██████╔╝███████╗
    ██╔══╝  ██║╚██╗██║██╔══╝  ██║╚██╔╝██║  ╚██╔╝      ██╔══██║██╔═══╝ ██╔═══╝ ██╔══╝  ██╔══██║██╔══██╗╚════██║
    ███████╗██║ ╚████║███████╗██║ ╚═╝ ██║   ██║       ██║  ██║██║     ██║     ███████╗██║  ██║██║  ██║███████║
    ╚══════╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝
                                                                                                              
    `)
    var action = readline.keyIn("Would you like to [r] Run or [f] Fight?", {limit: 'rf'})
    if(action === 'r') {
        run()
    } if(action === 'f') {
        var enemy = enemySelect()
        fight(enemy)
    
    }

}

function fight(enemy) {
    var random = Math.floor(Math.random()* 5)
    if(random === 0) {
        miss()
    } else {
        console.log(`
        ███████╗██╗ ██████╗ ██╗  ██╗████████╗██╗
        ██╔════╝██║██╔════╝ ██║  ██║╚══██╔══╝██║
        █████╗  ██║██║  ███╗███████║   ██║   ██║
        ██╔══╝  ██║██║   ██║██╔══██║   ██║   ╚═╝
        ██║     ██║╚██████╔╝██║  ██║   ██║   ██╗
        ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝
                                                
        `)
        hero.hp -= enemy.attack
        enemy.hp -= hero.attack
        console.log("\n" + `${hero.name} your hp has detoriated to ${hero.hp} due to violent attacks from ${enemy.name}` + "\n")
        console.log("\n" + `Your attacks against ${enemy.name} have cost them dearly and now their health has detoriated to ${enemy.hp}` + "\n")
        if(enemy.hp <= 0) {
            console.log("THe corpse of the enemy lies defeated on the ground" + "\n")
            console.log("\n" + "You receive special item and your hp increases 5 hp" + "\n")
            hero.hp += 5;
            var amulet = amuletSelect()
            hero.items.push(amulet)
            var index = enemies.indexOf(enemy)
            enemies.splice(index, 1)
            if(enemies.length === 0) {
                endGame()
            } else if(hero.hp <= 0) {
                console.log(`You are unfortunately dead` + "\n")
                isAlive = false;
            }
            if (readline.keyInYN('Continue?')) {
                console.log("\n")
                main()
            
            }

        } 
    }

}

function freetime() {
    var random = Math.floor(Math.random()*3)
    if (random === 0) {
        console.log(`You stumble around in the dark and hear heavy breathing in the distance`)
        main()
    } if (random === 1) {
        console.log(`You can sit for a short break`)
        console.log(`you discover a chest. inside is a medical kit that grants you +10hp`)
        hero.hp += 10;
        if (readline.keyInYN('Continue?')) {
            console.log("\n")
        } else {
            isAlive = false
        }
        main()
    } if (random === 2) {
        console.log(`You trip and fall on a rock. It cuts you and costs you -20hp`);
        hero.hp += -20;
        if (readline.keyInYN('Continue?')) {
            console.log("\n")
        } else {
            isAlive = false
        }
        main()
    } 
}

function enemySelect() {
    var random = Math.floor(Math.random() * enemies.length)
        return enemies[random]
}

function run() {
    var random = Math.floor(Math.random()*2)
    if(random === 0) {
        console.log("you did not escape")
        encounter()
    } else {
        console.log(`
        ███████╗███████╗ ██████╗ █████╗ ██████╗ ███████╗██████╗ ██╗
        ██╔════╝██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██║
        █████╗  ███████╗██║     ███████║██████╔╝█████╗  ██║  ██║██║
        ██╔══╝  ╚════██║██║     ██╔══██║██╔═══╝ ██╔══╝  ██║  ██║╚═╝
        ███████╗███████║╚██████╗██║  ██║██║     ███████╗██████╔╝██╗
        ╚══════╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═════╝ ╚═╝
                                                                   
        `)
        main()
    }
}

function miss() {
    console.log('you have missed the enemy. better luck next time')
    hero.hp -= Enemy.attack
    console.log(`${hero.name} your hp has detoriated to ${hero.hp} due to violent attacks from ${Enemy.name}`)

}

function endGame() {
    console.log("\n" + "You have defeated the enemies in the labyrinth! Now you must run to the center of maze to meet the portal!")
    endRun()
}

function endRun() {
    var action = readline.keyIn("What would you like to do? [r] Run, [p] Print Inventory, [q] Quit Game ", {limit: 'rpq'})
    if(action === 'r') {
        var random = Math.floor(Math.random)*3
        if (random === 0){
            console.log("\n" + "You got shot my a poisoned arrow booby trap! Lose 20Hp!")
            hero.hp += -20
            endRun()
        } if(random === 1) {
            console.log("\n" + "You see a glimmer light up ahead but get biten by a snake. Lose 5Hp!")
            hero.hp += -5
            endRun()
        } else {
            console.log(`
            ▄▄▄·      ▄▄▄  ▄▄▄▄▄ ▄▄▄· ▄▄▌      ·▄▄▄      ▄• ▄▌ ▐ ▄ ·▄▄▄▄  
           ▐█ ▄█▪     ▀▄ █·•██  ▐█ ▀█ ██•      ▐▄▄·▪     █▪██▌•█▌▐███▪ ██ 
            ██▀· ▄█▀▄ ▐▀▀▄  ▐█.▪▄█▀▀█ ██▪      ██▪  ▄█▀▄ █▌▐█▌▐█▐▐▌▐█· ▐█▌
           ▐█▪·•▐█▌.▐▌▐█•█▌ ▐█▌·▐█ ▪▐▌▐█▌▐▌    ██▌.▐█▌.▐▌▐█▄█▌██▐█▌██. ██ 
           .▀    ▀█▄▀▪.▀  ▀ ▀▀▀  ▀  ▀ .▀▀▀     ▀▀▀  ▀█▄▀▪ ▀▀▀ ▀▀ █▪▀▀▀▀▀• 
           `)
           end()
        }
    }
}
function end() {
    if (readline.keyInYN('Enter Portal')) {
        console.log("\n" + "You Enter and get sucked up in a vortex." + "\n" + "You awake on your bedroom floor safe and sound.")
        console.log(`
        /$$$$$$$$ /$$                       /$$$$$$$$                 /$$
       |__  $$__/| $$                      | $$_____/                | $$
          | $$   | $$$$$$$   /$$$$$$       | $$       /$$$$$$$   /$$$$$$$
          | $$   | $$__  $$ /$$__  $$      | $$$$$   | $$__  $$ /$$__  $$
          | $$   | $$  \ $$| $$$$$$$$      | $$__/   | $$  \ $$| $$  | $$
          | $$   | $$  | $$| $$_____/      | $$      | $$  | $$| $$  | $$
          | $$   | $$  | $$|  $$$$$$$      | $$$$$$$$| $$  | $$|  $$$$$$$
          |__/   |__/  |__/ \_______/      |________/|__/  |__/ \_______/
                                                                         
                                                                         
                                                                         
       `)
        
    }
}
}