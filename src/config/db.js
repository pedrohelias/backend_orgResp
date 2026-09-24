import {db} from "../prisma/db.ts"

const client = db.default || db

const connectDB = async () => {
    try{

        await db `SELECT 1`
        console.log("Conexão com o banco funcionando!")

    }catch(error){
        console.error(`Conexão com problemas: ${error.message}`)
        process.exit(1)
    }
} 


const disconnectDB = async () => {
    try{
        await db.end()
        console.log("Banco desconectado!")
        
    }catch(error){
        console.error(`Conexão com problemas em desconexão: ${error.message}`)
        process.exit(1)
    }
}


export {connectDB, disconnectDB}