import express from 'express' 
import cors from "cors"
import bodyParser from "body-parser";
import crypto from 'crypto'

import LinksRouter from './Routers/LinkRouter.js';
import UsersRouter from './Routers/UserRouter.js';
import connectDB from './database.js';
connectDB();
const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use('/users', UsersRouter);
app.use('/links',LinksRouter);
const port = 3000;

// const logMiddleware = (req, res, next) => {
//   req.UUID = crypto.randomUUID();
//   console.log(`request ${req.UUID} started.`);
//   next();
// };

// app.get("/", logMiddleware, (req, res) => {
//     res.send("Hello World!");
//   });

    
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })
  

  
