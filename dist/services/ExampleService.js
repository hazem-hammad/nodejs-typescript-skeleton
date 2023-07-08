"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExampleService {
    constructor() {
        this.examples = [];
    }
    getAll() {
        return this.examples;
    }
    getById(id) {
        return this.examples.find((example) => example.id === id);
    }
    create(exampleDTO) {
        const example = Object.assign(Object.assign({}, exampleDTO), { id: String(this.examples.length + 1) });
        this.examples.push(example);
        return example;
    }
    update(id, exampleDTO) {
        const index = this.examples.findIndex((example) => example.id === id);
        if (index !== -1) {
            const updatedExample = Object.assign(Object.assign({}, exampleDTO), { id });
            this.examples[index] = updatedExample;
            return updatedExample;
        }
        return undefined;
    }
    delete(id) {
        const index = this.examples.findIndex((example) => example.id === id);
        if (index !== -1) {
            const deletedExample = this.examples.splice(index, 1)[0];
            return deletedExample;
        }
        return undefined;
    }
}
exports.default = ExampleService;
