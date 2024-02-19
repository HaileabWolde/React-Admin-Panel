import express from 'express'
import { getProduct, getAllUser, getTransactions, getGeography } from '../controllers/client.js';
const router = express.Router()

router.get('/getProduct', getProduct)
router.get('/getUser', getAllUser)
router.get('/getTransaction', getTransactions)
router.get('/getGeography', getGeography)

export default router;

