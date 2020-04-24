const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const tasksController = require('../controllers/TasksController');

router.get('/', homepageController.index);

router.get('/getTasks', tasksController.get);

router.post('/tasks', tasksController.store);

router.post('/updateTaskStatus/:id', tasksController.done);

router.post('/deleteTask/:id', tasksController.delete);

module.exports = router;
