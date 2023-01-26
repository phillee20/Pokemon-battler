class Pokemon {
    constructor(name, type, hitPoints, attackDamage, move){
        this.name = name;
        this.type = type;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move;
    };
}

module.exports = Pokemon;