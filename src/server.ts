import "reflect-metadata";
import express from "express";
import { router } from "./routers/createUser"

import "./db";

const app = express()

app.use(express.json())

//app.use('/users', require('./routers/createUser'));

app.listen(3000, () => console.log("Server is running."))
