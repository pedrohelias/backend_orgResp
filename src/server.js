import express from "express";
import '@js-temporal/polyfill';
import userRoutes from "../src/routes/userRoutes.js"
import authRoutes from "../src/routes/authRoutes.js"
import {config} from "dotenv"
import {connectDB, disconnectDB} from "../src/config/db.js"

const app = express();

config()
connectDB()
app.use(express.json()); //express agora pode ler o json enviado do post
// importando as rotas 

app.use("/users", userRoutes)
app.use("/auth",authRoutes)

const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})