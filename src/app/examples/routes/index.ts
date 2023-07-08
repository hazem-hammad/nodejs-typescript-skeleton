import ExampleController from "src/controllers/ExampleController";
import { Request, Response, Router } from "express";

const exampleRouter = Router();

const exampleController = new ExampleController();

exampleRouter.get("/", (req: Request, res: Response) =>
  exampleController.getAll(req, res),
);

export default exampleRouter;
