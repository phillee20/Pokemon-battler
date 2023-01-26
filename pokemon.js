class Pokemon {
    constructor(name, hitPoints, attackDamage, move, type){
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move;
    };

    isEffectiveAgainst(opponent) {
        if (this.type === "water" && opponent.type === "fire") {
            return true;
        } else if (this.type === "fire" && opponent.type === "water") {
            return false;
        };
    };

    isWeakTo(opponent) {
        if (this.type === "water" && opponent.type === "fire") {
            return false;
        } else if (this.type === "fire" && opponent.type === "water") {
            return true;
        };
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
    constructor(name, hitPoints, attackDamage, move, type) {
        super(name, hitPoints, attackDamage, "tackle", "fire")
        //this.type = "fire"
    }
}



module.exports = Pokemon, fireType;