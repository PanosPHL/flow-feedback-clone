const express = require('express');
const asyncHandler = require('express-async-handler');

const { Note } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler(async (req, res, next) => {

}))

module.exports = router;