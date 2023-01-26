class Pokemon {
    constructor(name, type, hitPoints, attackDamage, move){
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
};



module.exports = Pokemon;