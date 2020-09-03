const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const { Video } = require('../../db/models');

router.get('/', async (req, res) => {
    const videos = await Video.findAll({});
    res.json({videos});
});

module.exports = router;