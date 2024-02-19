import express from 'express'
import {OverallStats} from "../controllers/sales.js"
const router = express.Router()

router.get('/getOverallStat', OverallStats)


export default router;
