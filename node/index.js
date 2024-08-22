import express from 'express'
import cors from 'cors'
import userRouter from "./routes/user.route.js"

import db from './db.js';
const app = express();
app.use(cors())

app.use(express.json());

app.use('/api', userRouter);


app.listen(5500,()=>{
    console.log("server running")
})


