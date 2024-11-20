const TodoController = require("../../controllers/todo_controller");
const TodoModel = require("../../models/todo_model");
const newTask = require("../mockups/todo_mockup.json");
const httpMocks = require("node-mocks-http");

TodoModel.create = jest.fn();

// new taks = json

let req,res,next;
beforeEach(() => {
    res = httpMocks.createResponse();
    req = httpMocks.createRequest();
    next = null;
});

describe("Test Created method exists in controller", () => {
    
    // check if create exists inside controller
    it("Should have a create method", () => {
        expect(typeof TodoController.todoCreate).toBe("function");
    }); // debe recibir una funcion por parte de TodoController

    // check if create its callable, "se puede ejecutar"
    it("Should be able to call create method", () => {
        req.body = newTask;
        TodoController.todoCreate(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTask);
    }); // debe recibir una funcion por parte de TodoController

    // cgheck for 201 response (201 means created)

    it("Should return 201 status code", () => {
        req.body = newTask;
        TodoController.todoCreate(req, res, next);
        expect(res.statusCode).toBe(201);
    }); // debe recibir una funcion por parte de TodoController

})