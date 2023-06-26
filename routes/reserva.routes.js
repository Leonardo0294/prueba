// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas


// Formulario para crear una reserva


// Formulario para actualizar una reserva










// ==========================================
//         Rutas para CRUD de reservas
router.post('/reservas', reserva.reservaControllers.createReserva);
router.get('/reservas', reserva.controllers.getReservas);
router.get('/reservas/:id', reserva.controllers.getReservaById);
router.put('/reservas/:id', reserva.controllers.updateReserva);
router.delete('/reservas/:id', reserva.controllers.deleteReserva);

// ==========================================

// Obtener todas las reservas
router.get('/api/',);
 
// Crear una reserva
router.post('/api/',);
 
// Actualizar una reserva
router.put('/api/:id',);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id',);

 
 module.exports = router;