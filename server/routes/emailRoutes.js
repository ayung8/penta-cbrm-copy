const express = require('express');
const router = express.Router();

const email_controller = require('../controllers/EmailController');

router.get('/test', email_controller.test);

router.post('/create', email_controller.create);

router.get('/read/:id', email_controller.read);

router.get('/:id/update', email_controller.update);

router.get('/:id/delete', email_controller.delete);

module.exports = router;
