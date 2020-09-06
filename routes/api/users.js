const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");

const { User, Flow, Note, Video, Category } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { generateToken } = require("../util/auth");
const {
  jwtConfig: { expiresIn },
} = require("../../config");


const validateSignup = [
  check("email", "Please provide a valid email")
    .exists()
    .isEmail(),
  check("password", "Your password must be 6 or more characters")
    .exists()
    .isLength({ min: 6, max: 70 }),
  check('confirmPassword', 'Your confirmed password must have the same value as the password field')
    .custom((value, { req }) => value === req.body.password)
];

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res, _next) {
  const users = await User.findAll();
  res.json({ users });
}));

router.post(
  "/",
  validateSignup,
  handleValidationErrors,
  asyncHandler(async function (req, res) {
    const user = await User.signup(req.body);

    const token = await generateToken(user);
    res.cookie("token", token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
    return res.json({
      user,
    });
  })
);

router.get('/:id/flows', asyncHandler(async (req, res, next) => {
  const flows = await Flow.findAll({
    where: {
      userId: parseInt(req.params.id)
    },
    include: [
      { model: Video, attributes: ['thumbnail'] },
    { model: Category, attributes: ['name'] }]
  });

  res.json({ flows });
}));

router.get('/:id/notes', asyncHandler(async (req, res, next) => {
  const notes = await Note.findAll({
    include: [
      {
        model: Flow,
        where: {
          userId: parseInt(req.params.id)
        }
      }
    ]
  });

  res.json({ notes });
}));

module.exports = router;
