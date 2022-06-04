import { Router } from "express"
import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/ping', apiController.ping)

//importando random 
router.get('/random', apiController.random)

//importando nome
router.get('/nome/:nome',apiController.nome)


export default router
