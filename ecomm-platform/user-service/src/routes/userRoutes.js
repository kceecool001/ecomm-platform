const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

router.get('/', (req, res) => {
  res.json({ message: 'User service is live' });
});

router.post('/register', register);
router.post('/login', login);

router.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}` });
});

module.exports = router;