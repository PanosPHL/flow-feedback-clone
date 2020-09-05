const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../util/validation');

const { Note, sequelize } = require('../../db/models');

const router = express.Router();

const validateNote = [
    check('content')
        .exists()
        .isLength({ min: 1 })
        .withMessage('Please provide some valid content for your note'),
    check('timestamp')
        .exists()
        .isDecimal()
        .withMessage('There was an error getting the timestamp associated with your note. Wait a moment and try submitting again'),
    check('flowId')
        .exists()
        .withMessage('Please ensure your note is associated with a specific flow')
]

const validateNoteUpdate = [
    check('content')
        .exists()
        .isLength({ min: 1 })
        .withMessage('Please provide some valid content for your note')
]

router.post('/', validateNote, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const { content, timestamp, flowId } = req.body;

    const note = await Note.create({
        content,
        timestamp: Number(timestamp),
        flowId
    });

    res.json({ note });
}));

router.get('/', validateNoteUpdate, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const { content, noteId } = req.body;

    const note = await sequelize.transaction(async (t) => {
        let noteRecord = await Note.findOne({
            where: {
                id: noteId
            }
        }, { transaction: t });

        noteRecord.content = content;

        await noteRecord.save({ transaction: t });

        return noteRecord;
    });

    res.json({ note });
}));

module.exports = router;