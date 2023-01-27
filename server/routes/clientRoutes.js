const express = require('express');
const router = express.Router();

const client_controller = require('../controllers/ClientController');

router.get('/test', client_controller.test);

router.post('/create', client_controller.create);

router.get('/read/:id', client_controller.read);

router.get('/:id/update', client_controller.update);

router.get('/:id/delete', client_controller.delete);

module.exports = router;
