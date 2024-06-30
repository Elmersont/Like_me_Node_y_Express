import express from 'express';
import { createPost, getPosts } from '../models/queries.js';
const router = express.Router();



router.get('/', (req, res) => {
    res.send('Servidor activo desde servidor');
});

router.get('/posts', async (req, res) => {
    try {
      const posts = await getPosts();
      res.json(posts);
    } catch (error) {
      console.error('Error obteniendo los posts', error);
      res.status(500).send('Error cargando los posts');
    }
  });

  router.post('/posts', async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        await createPost(titulo, img, descripcion, likes);
        res.send('Post creado exitosamente');
    } catch (error) {
        console.error('Error creando el post', error);
        res.status(500).send('Error al crear el post');
    }
});

export default router;