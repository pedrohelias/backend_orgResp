import express from "express"
import {db} from "../prisma/db.ts"
import bcrypt from "bcryptjs"
import { error } from "node:console"

const registerUser = async(req, res) => {
    try{
        const { name, email, cpf, nivel_usuario, senha, setor} = req.body

        const userExists = await db.orm.public.Funcionario.where({
            email: email
        }).first();

        if (userExists){
            console.log("usuário já existe!!")
            return res.status(400).json({error: "User already exists with this email"})
        }

        //criptografia de senha

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(senha, salt) //criptografada

        //criaçaõ do usuario



        const user = await db.orm.public.Funcionario.create({
            name,
            email,
            cpf,
            //data_nascimento: formattedDate,
            nivel_usuario,
            senha: hashedPassword,
            setor
        })

        res.status(200).json({
            status: "sucess", 
            data: {
                name: user.name, 
                email: user.email,
                cpf: user.cpf,
            //ata_nascimento: user.data_nascimento,
                nivel_usuario: user.nivel_usuario,
                senha: user.senha,
                setor:user.setor
            }
        })
    
    }catch(er){
        console.log("Erro no cadastro de usuário")
        return res.status(404).json({
            error: er
        })
    }   
}




export {registerUser}


// use prisma-8


