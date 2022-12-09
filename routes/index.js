import express from 'express';
import { Router } from 'express';
const router = Router();
import { getShopList } from '../models/index.js';

router.get('/', async function (req, res) {
    const list = await getShopList();
    res.json({success: true , payload: list})
})

export default router;