import express from "express";
import userRoutes from "../src/routes/userRoutes.js"
import {config} from "dotenv"
import {connectDB, disconnectDB} from "../src/config/db.js"

const app = express();

config()
connectDB()
// importando as rotas 

app.use("/users", userRoutes)

const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})