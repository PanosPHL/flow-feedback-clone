const express = require('express');
const fetch = require('node-fetch');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../util/validation');

const { sequelize } = require('../../db/models');
const { Flow, Video } = require('../../db/models');

const validateFlow = [
];

const validateURL = [
    check('url', 'Please provide a valid YouTube URL')
        .exists()
        .custom((value) => {
            const yt = /^(http\:|https\:)\/\/www\.youtube\.com\/watch\?/;

            return yt.test(value);
        })
]

const router = express.Router();

router.put('/', validateURL, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const apiReq = {
        id: req.body.url.split('?v=')[1],
        key: process.env.YOUTUBE_API_KEY,
        part: 'snippet',
        fields: 'items(id,snippet/title)'
    }

    let fetchParams = [];

    for (let key in apiReq) {
        fetchParams.push(`${key}=${encodeURIComponent(apiReq[key])}`)
    }


    const apiRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?${fetchParams.join('&')}`);
    apiRes.data = await apiRes.json();

    const { id, snippet: { title } } = apiRes.data.items[0]

    res.json({
        id,
        title,
        url: req.body.url
    });
}));

router.post('/', asyncHandler(async (req, res, next) => {
    const { name, description, userId, video, categoryId } = req.body;

    const flow = await sequelize.transaction(async (t) => {
        try {
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
                title: video.title
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
        } catch (err) {
            console.log(err);
        }
    });

    res.json({ flow })
}));

module.exports = router;