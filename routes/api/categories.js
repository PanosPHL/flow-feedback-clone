const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Category, Flow, Video, User } = require('../../db/models');

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
            { model: Flow, include: [{ model: Video }, { model: User, attributes: ['email'] }]}
        ],
        order: [[{ model: Flow }, 'createdAt', 'DESC']]
    });

    res.json({ category });
}));

module.exports = router;