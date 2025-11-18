import { db } from '../database/database';

const getInventory = async () => {
  try {
    const allRows = await db.getAllAsync('SELECT * FROM itens');
    return allRows;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get inventory from database');
  }
};

export default {
  getInventory,
};
