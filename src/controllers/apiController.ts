import { Request, Response } from "express"
import { Phrase } from "../models/Phrase"

export const ping = (req:Request, res:Response) =>{
    res.json({pong:true})
}
export const random = (req:Request, res:Response) =>{
    let nRand: number = Math.floor (Math.random() * 10)
    res.json({number: nRand})
}
export const nome = (req:Request,res:Response) =>{
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome ${nome}`})
}

export const createPhrase =  async(req: Request, res: Response) =>{
    //fazendo a requisição no body de author e txt
    let {author, txt} = req.body

    //em seguida vamos usar os dados author e txt para 
    //conseguirmos inserir no nosso model para o banco de dados
    let newPhrase = await Phrase.create({author, txt})
    
    //retornando a frase no json
    res.json({id: newPhrase.id, author , txt})
}



