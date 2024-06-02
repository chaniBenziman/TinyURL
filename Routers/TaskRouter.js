import express from "express";
import TasksController from "../controllers/TasksController.js";

const TasksRouter = express.Router();

TasksRouter.get("/", TasksController.getList);
TasksRouter.get("/:id", TasksController.getById);
TasksRouter.post("/", TasksController.add);
TasksRouter.put("/:id", TasksController.update);
TasksRouter.delete("/:id", TasksController.delete);

export default TasksRouter;
