/**
 * InsighTribe
 * @Author Udara Premadasa
 */
const express = require('express');

const authorize = require('../interceptors/auth');

const test = require('./services/test');


/** App router */
const router = express.Router();

const testRouter = express.Router();
testRouter.get('/', test.get);
testRouter.get('/auth', authorize([1]), test.getAuth);

router.use('/', testRouter);

/** All other */
router.all('/**', function (req, res) {
  res.status(404).json({ 'error': 'page not found' });
});//page not found


module.exports = router;