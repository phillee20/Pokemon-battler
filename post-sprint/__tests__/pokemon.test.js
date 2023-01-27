const {Pokemon,
    FireType,
    WaterType,
    GrassType,
    NormalType,
    Pokeball} = require("../../pokemon")


describe("Pokemon", () => {

    describe("Properties", () => {
        test("Given pokemon name argument, returns a object containing a name property", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle")

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle"})
        })
        
        test("Given a hit points argument, returns an object containing the hit points", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", 20)

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", hitPoints: 20})
        })
        test("Given a attack damage argument, returns an object containing the attack damage", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", 20, 7)

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", hitPoints: 20, attackDamage: 7})
        })
        test("Given a move argument, returns an object containing move", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", 20, 7, "tackle")

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", hitPoints: 20, attackDamage: 7, move: "tackle"})
        });
        test("Given a type argument, then return a object containing a type", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", 20, 7, "tackle", "water")

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", hitPoints: 20, attackDamage: 7, move: "tackle", type: "water"})
        });
    });

    describe("Methods", () => {
        
        test("returns a boolean if the pokemon type is effective against the given pokemon argument", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", 20, 7, "tackle", "water");
            const charmander = new Pokemon("charmander", 23, 6, "tackle", "fire");
            //act

            //assert
            expect(squirtle.isEffectiveAgainst(charmander)).toBe(true);
            expect(charmander.isEffectiveAgainst(squirtle)).toBe(false);
        });

        test("returns a boolean if the pokemon type is weak to the given pokemon argument", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", 20, 7, "tackle", "water");
            const charmander = new Pokemon("charmander", 23, 6, "tackle", "fire");
            //act

            //assert
            expect(squirtle.isWeakTo(charmander)).toBe(false);
            expect(charmander.isWeakTo(squirtle)).toBe(true);
        });

        test("take a number and reduce the pokemons hit points by that number", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", 20, 7, "tackle", "water");
            const charmander = new Pokemon("charmander", 23, 6, "tackle", "fire");
            //act
            squirtle.takeDamage(charmander);
            //assert
            expect(squirtle.hitPoints).toBe(14);
        });
        test("takes a pokemon argument and returns the amount of damage its attack does and the string indicating the move that was used", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", 20, 7, "tackle", "water");
            
            //act
            
            //assert
            expect(squirtle.useMove()).toBe(squirtle.attackDamage);
        });
        test("when a pokemons health is reduced to below 0, then return a boolean to show that they have fainted", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", 20, 7, "tackle", "water");
            const charmander = new Pokemon("charmander", 23, 20, "tackle", "fire")

            //assert
            expect(squirtle.hasFainted()).toBe(false);

            //act
            charmander.useMove();
            squirtle.takeDamage(charmander);

            //assert
            expect(squirtle.hasFainted()).toBe(true);
        });
        test("class fireType constructs a pokemon object that has to be a fire type", () => {
            //arrange
            const charmander = new FireType("charmander", 23, 6);
            //const infernape = new fireType("infernape", 213, 52);
            //act
            
            //assert
            expect(charmander).toEqual({name: "charmander", hitPoints: 23, attackDamage: 6, move: "ember", type: "fire"})
            // expect(infernape).toEqual({name: "infernape",hitPoints: 213,attackDamage: 52, move: "ember", type: "fire"})
        });

        test("class waterType constructs a pokemon object that has to be a water type", () => {
            //arrange
            const squirtle = new WaterType("squirtle", 20, 7)
            //act
        
            //assert
            expect(squirtle).toEqual({name: "squirtle", hitPoints: 20, attackDamage: 7, move: "bubble", type: "water"})
        }); 

        test("class grassType constructs a pokemon object that has to be a grass type", () => {
            //arrange
            const bulbasaur = new GrassType("bulbasaur", 25, 5);
            //act
        
            //assert
            expect(bulbasaur).toEqual({name: "bulbasaur", hitPoints: 25, attackDamage: 5, move: "vine whip", type: "grass"})
        }); 

        test("class normalType constructs a pokemon object that has to be a normal type", () => {
            //arrange
            const ratatta = new NormalType("ratatta", 25, 4);
            //act
        
            //assert
            expect(ratatta).toEqual({name: "ratatta", hitPoints: 25, attackDamage: 4, move: "tackle", type: "normal"});
        }); 

        test("Given a pokemon with type grass, water, fire or normal is effective against will return the appropriate boolean", () => {
            //arrange
            const charmander = new FireType("charmander", 23, 6);
            const squirtle = new WaterType("squirtle", 20, 7)
            const bulbasaur = new GrassType("bulbasaur", 25, 5);
            const ratatta = new NormalType("ratatta", 25, 4);
            //act

            //assert
            expect(charmander.isEffectiveAgainst(squirtle)).toBe(false)
            expect(bulbasaur.isEffectiveAgainst(squirtle)).toBe(true)
            expect(ratatta.isEffectiveAgainst(bulbasaur)).toBe(false)
            expect(squirtle.isEffectiveAgainst(charmander)).toBe(true)
            expect(ratatta.isEffectiveAgainst(charmander)).toBe(false)
            expect(charmander.isEffectiveAgainst(bulbasaur)).toBe(true)
        });
        
        test("Given a pokemon with type grass, water, fire or normal is weak to will return the appropriate boolean", () => {
            //arrange
            const charmander = new FireType("charmander", 23, 6);
            const squirtle = new WaterType("squirtle", 20, 7);
            const bulbasaur = new GrassType("bulbasaur", 25, 5);
            const ratatta = new NormalType("ratatta", 25, 4);
            //act

            //assert
            expect(charmander.isWeakTo(squirtle)).toBe(true)
            expect(bulbasaur.isWeakTo(squirtle)).toBe(false)
            expect(ratatta.isWeakTo(bulbasaur)).toBe(false)
            expect(squirtle.isWeakTo(charmander)).toBe(false)
            expect(ratatta.isWeakTo(charmander)).toBe(false)
            expect(charmander.isWeakTo(bulbasaur)).toBe(false)
            expect(bulbasaur.isWeakTo(charmander)).toBe(true)
            expect(squirtle.isWeakTo(bulbasaur)).toBe(true)
        });

        test("check if a pokeball is empty, returning a boolean", () => {
            // arrange
            const pokeball = new Pokeball();
            // act

            // assert
            expect(pokeball.isFull).toBe(false);
        });

        test("has a throw method that will store the argument of throw in the object pokeball", () => {
            //arrange
            const pokeball = new Pokeball();
            const charmander = new FireType("charmander", 23, 6);
            const squirtle = new WaterType("squirtle", 20, 7)
            //act
            pokeball.throw(charmander);
            //assert
            expect(pokeball.isFull).toBe(true);
            expect(pokeball.pokemon).toEqual({name: "charmander", hitPoints: 23, attackDamage: 6, move: "ember", type: "fire"});
            //act
            pokeball.throw(squirtle);
            //assert
            expect(pokeball.isFull).toBe(true);
            expect(pokeball.pokemon).toEqual({name: "charmander", hitPoints: 23, attackDamage: 6, move: "ember", type: "fire"});

        });

        test.only("if the throw method is carried out on a full pokeball, the pokemon inside is released", () => {
            //arrange
            const pokeball = new Pokeball();
            const charmander = new FireType("charmander", 23, 6);
            //act
            pokeball.throw();
            //assert
            expect(pokeball.isFull).toBe(false);
            expect(pokeball.hasOwnProperty("pokemon")).toBe(false);
            //act
            pokeball.throw(charmander);
            //assert
            expect(pokeball.throw()).toBe(pokeball.pokemon);
        });
    });
});