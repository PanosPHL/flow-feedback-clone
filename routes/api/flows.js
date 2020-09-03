const express = require('express');
const fetch = require('node-fetch');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../util/validation');
const { toSeconds, parse } = require('iso8601-duration');

const { sequelize } = require('../../db/models');
const { Flow, Video } = require('../../db/models');

const validateFlow = [
    check('name', 'Please provide a title for your flow')
    .exists(),
    check('categoryId', 'Please select a valid category for your flow')
    .exists()
    .custom((value) => value > 0)
];

const validateURL = [
    check('url', 'Please provide a valid YouTube URL')
        .exists()
        .custom((value) => {
            const yt = /^(http\:|https\:)\/\/www\.youtube\.com\/watch\?/;

            return yt.test(value);
        })
];

const validateFlowUpdate = [
    check('name', 'Please provide a valid Flow name')
        .exists()
        .isLength({ min: 1, max: 256})
];

const router = express.Router();

router.post('/', validateFlow, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const { name, description, userId, video, categoryId } = req.body;

    const flow = await sequelize.transaction(async (t) => {
        let newVideo = await Video.findOne({
            where: {
                id: video.id
            }
        }, { transaction: t });

        if (!newVideo) {
            newVideo = await Video.create({
                id: video.id,
                siteId: 1,
                url: video.url,
                title: video.title,
                duration: toSeconds(parse(video.duration))
            }, { transaction: t });
        }

        const flow = await Flow.create({
            name,
            description,
            userId,
            videoId: video.id,
            categoryId
        }, { transaction: t });

        return flow;
    });

        res.json({ flow });
}));

router.put('/:id(\\d+)', validateFlowUpdate, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const { name } = req.body;

    const flow = await sequelize.transaction(async (t) => {
        let flowRecord = await Flow.findOne({
            where: {
                id: parseInt(req.params.id)
            }
        }, { transaction: t });

        flowRecord.name = name;

        await flowRecord.save({ transaction: t });

        return flowRecord;
    })

    res.json({ flow });
}))

router.put('/', validateURL, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const apiReq = {
        id: req.body.url.split('?v=')[1],
        key: process.env.YOUTUBE_API_KEY,
        part: 'snippet,contentDetails',
        fields: 'items(id,snippet/title,contentDetails/duration)'
    };

    let fetchParams = [];

    for (let key in apiReq) {
        fetchParams.push(`${key}=${encodeURIComponent(apiReq[key])}`)
    }


    const apiRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?${fetchParams.join('&')}`);
    apiRes.data = await apiRes.json();

    const { id, snippet: { title }, contentDetails : { duration } } = apiRes.data.items[0]

    res.json({
        id,
        title,
        url: req.body.url,
        duration
    });
}));

module.exports = router;