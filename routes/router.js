import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Servidor activo desde servidor');
});

router.get('/test', (req, res) => {
    res.send('Servidor activo desde test');
});

router.post('/test', (req, res) => {
    res.send('Servidor activo');
});

export default router;