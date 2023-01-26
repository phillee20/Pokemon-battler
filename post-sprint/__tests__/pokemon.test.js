const Pokemon = require("../../pokemon")
const fireType = require("../../pokemon")

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

    describe("methods", () => {
        
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
                const charmander = new fireType("charmander", 23, 20, "tackle", "fire")
                //act
                console.log(charmander)
                //assert
                expect(charmander).toEqual({name: "charmander", hitPoints: 23, attackDamage: 20, move: "tackle", type: "fire"})
        })

    });
});
