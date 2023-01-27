class Pokemon {
    constructor(name, hitPoints, attackDamage, move, type){
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move;
    };

    isEffectiveAgainst(opponent) {                       
        if(this.type === "water") {
            return opponent.type === "fire"
        } else if (this.type === "grass") {
            return opponent.type === "water"
        } else if (this.type === "fire") {
            return opponent.type === "grass"
        } else {
            return false
        }
    };                              

    isWeakTo(opponent) {
        if(this.type === "water") {
            return opponent.type === "grass"
        } else if (this.type === "grass") {
            return opponent.type === "fire"
        } else if (this.type === "fire") {
            return opponent.type === "water"
        } else {
            return false
        }
    };

    takeDamage(opponent) {
        this.hitPoints = this.hitPoints - opponent.attackDamage;
    };

    useMove() {
        console.log(`${this.name} used ${this.move}`)
        return this.attackDamage;
    }

    hasFainted() {
      return this.hitPoints <= 0
    }
};

class FireType extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage, "ember", "fire");
    };
};

class WaterType extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage, "bubble", "water");
    };
};

class GrassType extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage, "vine whip", "grass");
    };
};

class NormalType extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage, "tackle", "normal");
    };
};

class Pokeball {
    constructor(isFull = false) {
        this.isFull = isFull;
    };

    throw(opponent) {
        if (opponent === undefined && this.isFull === false) {
            console.log("you throw your pokeball at nothing. you catch nothing.")
        } else if (opponent === undefined && this.isFull === true) {
            console.log(`Go ${this.pokemon}!!!`);
            return this.pokemon;
        } else if (opponent !== undefined && this.isFull === false) {
            console.log(`you caught ${opponent.name}`);
            this.isFull = true;
            this.pokemon = opponent;
        } else if (opponent !== undefined && this.isFull === true) {
            console.log(`that pokeball is full! you can't catch another pokemon with it`);
        };
    };

    isEmpty(){
        return !this.isFull
    }
    
    contains(){
        if(this.isEmpty()) {
            return "empty"
    } else {
        return `pokeball contains ${this.pokemon.name}`
    }}
};

class Trainer {
     constructor(){
        this.belt = [] 
            for(let i = 0; i < 6; i++){
                this.belt.push(new Pokeball)
            }
     }

catch(opponent){
    for(let i = 0; i < 6; i++){
        if(this.belt[i].isEmpty()){
            this.belt[i].throw(opponent)
            this.belt[i].contains()
    return
        }
    }
}


};

module.exports = {Pokemon,
    FireType,
    WaterType,
    GrassType,
    NormalType,
    Pokeball,
    Trainer};