const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Category } = require('../../db/models');

router.get('/', asyncHandler(async (req, res, next) => {
    const categories = await Category.findAll({
        attributes: ['id', 'name', 'cover']
    });

    res.json({categories});
}));

module.exports = router;