class Pokemon {
    constructor(name, hitPoints, attackDamage, move, type){
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move;
    };

    isEffectiveAgainst(opponent) {                       
        if (this.type === "water") {
            return opponent.type === "fire"
        } else if (this.type === "grass") {
            return opponent.type === "water"
        } else if (this.type === "fire") {
            return opponent.type === "grass"
        };
    };                              

    isWeakTo(opponent) {
        return this.type === "fire" && opponent.type === "water";
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

class fireType extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage, "ember", "fire");
    };
};

class waterType extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage, "bubble", "water");
    };
};

class grassType extends Pokemon {
    constructor(name, hitPoints, attackDamage) {
        super(name, hitPoints, attackDamage, "vine whip", "grass");
    };
};

module.exports = {Pokemon,
    fireType,
    waterType,
    grassType};