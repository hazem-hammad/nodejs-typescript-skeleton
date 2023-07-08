"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ExampleController_1 = __importDefault(require("../controllers/ExampleController"));
const router = express_1.default.Router();
const exampleController = new ExampleController_1.default();
router.get('/', (req, res) => exampleController.getAll(req, res));
router.get('/:id', (req, res) => exampleController.getById(req, res));
router.post('/', (req, res) => exampleController.create(req, res));
router.put('/:id', (req, res) => exampleController.update(req, res));
router.delete('/:id', (req, res) => exampleController.delete(req, res));
exports.default = router;
