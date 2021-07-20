import express from 'express';
import db from './db';

const router = express();

const initDB = async () => {
  
  const database = await db();

}

initDB();

export default router;