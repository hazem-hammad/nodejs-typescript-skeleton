"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExampleService_1 = __importDefault(require("../services/ExampleService"));
const exampleService = new ExampleService_1.default();
class ExampleController {
    constructor() {
        this.exampleService = new ExampleService_1.default();
    }
    getAll(req, res) {
        const examples = this.exampleService.getAll();
        res.json(examples);
    }
    getById(req, res) {
        const id = req.params.id;
        const example = this.exampleService.getById(id);
        res.json(example);
    }
    create(req, res) {
        const exampleDTO = req.body;
        const createdExample = this.exampleService.create(exampleDTO);
        res.json(createdExample);
    }
    update(req, res) {
        const id = req.params.id;
        const exampleDTO = req.body;
        const updatedExample = this.exampleService.update(id, exampleDTO);
        res.json(updatedExample);
    }
    delete(req, res) {
        const id = req.params.id;
        const deletedExample = this.exampleService.delete(id);
        res.json(deletedExample);
    }
}
exports.default = ExampleController;
