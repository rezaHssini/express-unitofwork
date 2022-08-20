import { getDbConnection } from "db/config";
import * as express from "express";
import { Provider, ReflectiveInjector } from "injection-js";
import { UNIT_OF_WORK } from "injection-tokens";
import { UnitOfWork } from "repositories/unit-of-work/unit-of-work";
import { UserController } from "user.controller";

const app = express();

const db = getDbConnection();
const providers = [
  { provide: UNIT_OF_WORK, useValue: new UnitOfWork(db) },
  UserController,
] as Provider[];

const injector = ReflectiveInjector.resolveAndCreate(providers);
const controller = injector.get(UserController) as UserController;

app.get("/users", async (request, resposne) => {
  resposne.send(await controller.list(request?.query?.id));
});
app.post("/users", async (request, resposne) => {
  resposne.send(await controller.create(request?.body));
});
app.put("/users", async (request, resposne) => {
  resposne.send(await controller.update(request?.body));
});
app.delete("/users", async (request, resposne) => {
  resposne.send(await controller.update(request?.query?.id));
});

export default app;
