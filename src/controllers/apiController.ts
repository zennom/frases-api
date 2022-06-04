import { Request, Response } from "express"

//importando nossa model
import { Phrase } from "../models/Phrase"

export const ping = (req:Request, res:Response) =>{
    res.json({pong:true})
}

//criando o random
export const random = (req:Request, res:Response) =>{
    let nRand: number = Math.floor (Math.random() * 10)
    res.json({number: nRand})
}

//criando nome
export const nome = (req:Request,res:Response) =>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome ${nome}`})
}


