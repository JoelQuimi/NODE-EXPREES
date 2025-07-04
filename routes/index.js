import express from 'express';
import { paginaInico, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasControllers.js';
import {guardarTestimonial} from '../controllers/testimonialControllers.js'

const router = express.Router();


router.get('/', paginaInico);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes );
router.get('/viajes/:slug', paginaDetalleViaje );

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial)


export default router;