import pool from "../config/db.js"

export const getPosts = async () => {
    try {
      const result = await pool.query('SELECT * FROM posts');
      return result.rows;
    } catch (error) {
      console.error('Error obteniendo los posts', error.message);
      throw error;
    }
  };

export const createPost = async (titulo, img, descripcion, likes) => {
    const query = "INSERT INTO posts ( titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) returning *"
    const values = [titulo, img, descripcion, likes];
    try {
        const result = await pool.query(query, values)
        return result.rows[0];
    } catch (error) {
        console.log(error.message);
    }
};

