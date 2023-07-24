const router = require('express').Router();

const {
  getUserData,
  changeProfileData,
} = require('../controllers/users');

const {
  changeProfileDataValidation,
} = require('../middlewares/validation');

router.get('/me', getUserData);
router.patch('/me', changeProfileDataValidation, changeProfileData);

module.exports = router;
