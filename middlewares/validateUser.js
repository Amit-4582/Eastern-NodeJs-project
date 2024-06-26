const { body, validationResult } = require('express-validator');

const validateUser = [
    body('firstname').isAlphanumeric().withMessage("Firstname must be alphanumeric"),
    body('lastname').isAlphanumeric().withMessage('Lastname must be alphanumeric'),
    body('email').isEmail().withMessage('Invalid email'),
    body('contact_number').isMobilePhone().withMessage('Invalid contact number'),
    body('postcode').isNumeric().withMessage('Postcode must be numeric'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    body('confirm_password').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Confirm Password does not match password');
        }
        return true;
    }),
    body('hobbies').isArray().withMessage('Hobbies must be an array'),
    body('gender').isIn(['male', 'female', 'other']).withMessage('Invalid gender'),
    body('role').isString().withMessage('Role must be a string'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = validateUser;
