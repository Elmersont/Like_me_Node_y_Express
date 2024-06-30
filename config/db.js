import pg from 'pg';

const { Pool } = pg;

const config = {
  user: 'elmersont',
  host: 'localhost',
  database: 'likeme',
  password: '',
  port: 5432,
  allowExitOnIdle: true,
}

const pool = new Pool(config);

export default pool;

try {
    await pool.query('SELECT * FROM posts');
    console.log('Conexión exitosa');
} catch (error) {
    console.error('Error de conexión', error.message);
}