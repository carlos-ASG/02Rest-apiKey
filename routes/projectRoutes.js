const express = require('express');

const projectController 
    = require('../controllers/projectController');

const authenticateToken = 
    require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, projectController.getAllProjects);
router.post('/', authenticateToken, projectController.createProject);

module.exports = router;
