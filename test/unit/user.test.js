// Primero trae el objeto o la clase que vamos a probar
const userModel = require("../../models/user");

// Lo ideal es tener (N test x 1 archivo x 1 describe)

// Test: así empieza el test
describe("User Model Test", () => {
    it("should be able to return whether the user is an adult", () => { // arrow
        const user = new userModel({ username: "John Doe", age: 20 });
        expect(user.isAdult()).toBeTruthy();
    });
});

// Prueba falsa
describe("User Model Test", () => {
    it("should be able to return whether the user is an adult", () => { // arrow
        const user = new userModel({ username: "John Doe", age: 16 });
        expect(user.isAdult()).toBeFalsy();
    });
});

