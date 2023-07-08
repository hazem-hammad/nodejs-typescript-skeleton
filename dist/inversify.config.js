"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const ExampleController_1 = require("./controllers/ExampleController");
const ExampleService_1 = require("./services/ExampleService");
const container = new inversify_1.Container();
container.bind(ExampleController_1.ExampleController).toSelf();
container.bind(ExampleService_1.ExampleService).toSelf();
exports.default = container;
