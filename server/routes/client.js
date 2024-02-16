import express from 'express'
import { getProduct, getAllUser } from '../controllers/client.js';
const router = express.Router()

router.get('/getProduct', getProduct)
router.get('/getUser', getAllUser)

export default router;

