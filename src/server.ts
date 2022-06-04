import express, {Request, Response} from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { request } from 'http'

//importando api.ts
import apiRoutes from './routes/api'
dotenv.config()

const server = express()
server.use(express.static(path.join(__dirname,'../public')))
server.use(express.urlencoded({extended:true}))

server.listen(process.env.PORT)

//usando api.ts
server.use(apiRoutes)

server.use((req: Request, res: Response) =>{
    res.status(404)
    res.json({error: 'endpoint não encontrado'})
})

