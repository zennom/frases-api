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
    let {author, txt} = req.body
    let newPhrase = await Phrase.create({author, txt})
    res.json({id: newPhrase.id, author , txt})
}

export const listPhrases = async(req:Request, res: Response) =>{
    let list = await Phrase.findAll()
    res.json({list})

}
export const getPhrase = async(req:Request, res:Response) =>{
    let { id } = req.params
    let phrase = await Phrase.findByPk(id)
    if(phrase){
        res.json({phrase})
    }else{
        res.json({error: 'Frase não existe'})
    }
}

export const updatePhrase = async(req:Request, res:Response) =>{
    let { id } = req.params
    let {author, txt} = req.body
    let phrase = await Phrase.findByPk(id)
    if(phrase){
        phrase.author = author
        phrase.txt = txt
        await phrase.save()
        res.json({phrase})
    }else{
        res.json({error: 'Frase não existe'})
    }
}

export const deletePhrase = async (req:Request, res:Response) =>{
    let { id } = req.params
    await Phrase.destroy( { where: { id } } )

    res.json({})
}


