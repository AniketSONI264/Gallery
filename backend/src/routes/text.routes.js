const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const {
  updateText,
  getTexts,
} = require('../controllers/text.controller');

router.put('/', auth, updateText);
router.get('/', getTexts);

module.exports = router;
