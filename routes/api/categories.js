const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Category, Flow, Video } = require('../../db/models');

router.get('/', asyncHandler(async (req, res, next) => {
    const categories = await Category.findAll({
        attributes: ['id', 'name', 'cover']
    });

    res.json({categories});
}));

router.get('/:id(\\d+)/flows', asyncHandler(async (req, res, next) => {
    const category = await Category.findOne({
        where: {
            id: parseInt(req.params.id)
        },
        include: [
            { model: Flow, include: [{ model: Video }]}
        ],
        order: [[{ model: Flow }, 'createdAt', 'DESC']]
    });

    res.json({ category });
}));

module.exports = router;