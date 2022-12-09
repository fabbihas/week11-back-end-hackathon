import { query } from '../db/index.js';

export async function getShopList() {
    const results = await query('SELECT * FROM shopping');
    const shopArr = results.rows;
    return shopArr;
}