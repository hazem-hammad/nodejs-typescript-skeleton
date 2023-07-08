import { Router } from "express";
import exampleRouter from "app/examples/routes";

const routerProvider = Router();

routerProvider.use("/examples", exampleRouter);

export default routerProvider;
