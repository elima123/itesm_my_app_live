const todoModel = require("../models/todo_model");


// crea un body y ya está

exports.todoCreate = (req, res, next) => {
    todoModel.create(req.body);
    res.status(201).send();
}

