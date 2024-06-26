const bcrypt = require('bcryptjs');
const dotenv = require("dotenv")

const generateToken = require('../jsonwebtoken');
const { User } = require("../models")
const { addToBlacklist } = require('../blackList');

dotenv.config()

const getUserAuthLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // PASSWORD VALDATION
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // GENERATE TOKEN
        const token = generateToken(user.id);

        res.status(200).json({ message: 'Login successfully', token });
    } catch (error) {
        console.log('ERROR IN GET USER AUTH ::: ', error);
        res.status(500).json({ error: error.message });
    }
}


const getUserLogout = (req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Token' });
    }

    addToBlacklist(token);

    res.status(200).json({ message: 'User logged out successfully' });
};


module.exports = { getUserAuthLogin, getUserLogout }