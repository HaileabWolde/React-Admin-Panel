import express from 'express'
import { getProduct, getAllUser, getTransaction } from '../controllers/client.js';
const router = express.Router()

router.get('/getProduct', getProduct)
router.get('/getUser', getAllUser)
router.get('/getTransaction', getTransaction)

export default router;

