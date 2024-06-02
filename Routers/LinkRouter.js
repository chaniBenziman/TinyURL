import express from "express";
import LinksController from '../controllers/LinksController.js';

const LinkRouter = express.Router();

LinkRouter.get('/', LinksController.getAllLinks);
LinkRouter.post('/', LinksController.addLink);
LinkRouter.put('/:id', LinksController.updateLink);
LinkRouter.delete('/:id', LinksController.deleteLink);
LinkRouter.get('/redirect/:id',LinksController.redirect);
LinkRouter.get('/:id/clicks', LinksController.getClicksBySource);

export default LinkRouter;