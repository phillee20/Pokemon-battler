const Pokemon = require("../../pokemon")

describe("Pokemon", () => {
    describe("Properties", () => {
        test("Given pokemon name argument, returns a object containing a name property", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle")

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle"})
        })
        test("Given a type argument, returns an object containing the type", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", "water")

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", type: "water"})
        })
        test("Given a hit points argument, returns an object containing the hit points", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", "water", 20)

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", type: "water", hitPoints: 20})
        })
        test("Given a attack damage argument, returns an object containing the attack damage", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", "water", 20, 7)

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", type: "water", hitPoints: 20, attackDamage: 7})
        })
        test("Given a moveargument, returns an object containing move", () => {
            //arrange
            const testPokemon = new Pokemon("squirtle", "water", 20, 7, "tackle")

            //act
            
            //assert
            expect(testPokemon).toEqual({name: "squirtle", type: "water", hitPoints: 20, attackDamage: 7, move: "tackle"})
        });
    });

    describe("methods", () => {
        
        test("returns a boolean if the pokemon type is effective against the given pokemon argument", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", "water", 20, 7, "tackle");
            const charmander = new Pokemon("charmander", "fire", 23, 6, "tackle");
            //act

            //assert
            expect(squirtle.isEffectiveAgainst(charmander)).toBe(true);
            expect(charmander.isEffectiveAgainst(squirtle)).toBe(false);
        });

        test("returns a boolean if the pokemon type is weak to the given pokemon argument", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", "water", 20, 7, "tackle");
            const charmander = new Pokemon("charmander", "fire", 23, 6, "tackle");
            //act

            //assert
            expect(squirtle.isWeakTo(charmander)).toBe(false);
            expect(charmander.isWeakTo(squirtle)).toBe(true);
        });

        test("take a number and reduce the pokemons hit points by that number", () => {
            //arrange
            const squirtle = new Pokemon("squirtle", "water", 20, 7, "tackle");
            const charmander = new Pokemon("charmander", "fire", 23, 6, "tackle");
            //act
            squirtle.takeDamage(charmander);
            //assert
            expect(squirtle.hitPoints).toBe(14);
        });
    });
});
