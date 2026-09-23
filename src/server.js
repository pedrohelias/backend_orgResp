import express from "express";
import userRoutes from "../src/routes/userRoutes.js"

const app = express();

// importando as rotas 

app.use("/users", userRoutes)

const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})