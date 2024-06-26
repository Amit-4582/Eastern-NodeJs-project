const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { Role, UserRole } = require('../models');
const { isBlacklisted } = require('../blackList');

dotenv.config();

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Token' });
    }

    if (isBlacklisted(token)) {
        return res.status(403).json({ message: 'Token is blacklisted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log('ERROR IN VERIFY TOKEN ::: ', error);
        return res.status(403).json({ message: 'Invalid token' });
    }
};

const checkRole = (requiredRoles) => {

    return async (req, res, next) => {
        const userId = req.userId;
        const userRoles = await UserRole.findAll({ where: { userId } });

        const roles = await Role.findAll({ where: { id: userRoles.map(ur => ur.roleId) } });
        const userRoleNames = roles.map(role => role.name);

        const hasRequiredRole = requiredRoles.some(role => userRoleNames.includes(role));

        if (!hasRequiredRole) {
            return res.status(403).json({ message: 'Forbidden: You do not have the necessary permissions' });
        }

        next();
    };
};

module.exports = { verifyToken, checkRole };
