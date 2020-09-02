const express = require('express');
const fetch = require('node-fetch');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../util/validation');


const { Flow } = require('../../db/models');

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

router.post('/', asyncHandler(async (req, res, next) => {
    console.log(req);
}));

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

module.exports = router;