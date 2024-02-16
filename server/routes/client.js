import express from 'express'
import { getProduct, getAllUser, getTransactions } from '../controllers/client.js';
const router = express.Router()

router.get('/getProduct', getProduct)
router.get('/getUser', getAllUser)
router.get('/getTransaction', getTransactions)

export default router;

