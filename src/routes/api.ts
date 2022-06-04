import { Router } from "express"
import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/ping', apiController.ping)
router.get('/random', apiController.random)
router.get('/nome/:nome',apiController.nome)

//criando a rota frases
router.post('/frases',apiController.createPhrase)


export default router
