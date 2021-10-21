import pg from 'pg';
const { Pool } = pg;

const pool = new Pool();

export async function query(text: string, params?: any) {
	return pool.query(text, params);
}
