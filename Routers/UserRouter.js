import express from 'express';
import UsersController from '../controllers/UsersController.js';

const UsersRouter = express.Router();

UsersRouter.get('/', UsersController.getAllUsers);
UsersRouter.post('/', UsersController.addUser);
UsersRouter.put('/:id', UsersController.updateUser);
UsersRouter.delete('/:id', UsersController.deleteUser);

export default UsersRouter;