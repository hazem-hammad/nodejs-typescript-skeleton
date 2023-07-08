import { Request, Response } from 'express';
import ExampleService from '../services/ExampleService';
import ExampleDTO from '../dtos/ExampleDTO';

const exampleService = new ExampleService();

export default class ExampleController {
  exampleService: ExampleService;

  constructor() {
    this.exampleService = new ExampleService();
  }

  public getAll(req: Request, res: Response): void {
    const examples = this.exampleService.getAll();
    res.json(examples);
  }

  public getById(req: Request, res: Response): void {
    const id = req.params.id;
    const example = this.exampleService.getById(id);
    res.json(example);
  }

  public create(req: Request, res: Response): void {
    const exampleDTO: ExampleDTO = req.body;
    const createdExample = this.exampleService.create(exampleDTO);
    res.json(createdExample);
  }

  public update(req: Request, res: Response): void {
    const id = req.params.id;
    const exampleDTO: ExampleDTO = req.body;
    const updatedExample = this.exampleService.update(id, exampleDTO);
    res.json(updatedExample);
  }

  public delete(req: Request, res: Response): void {
    const id = req.params.id;
    const deletedExample = this.exampleService.delete(id);
    res.json(deletedExample);
  }
}
