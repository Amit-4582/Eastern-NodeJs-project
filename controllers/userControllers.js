const { User } = require("../models")
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, contact_number, postcode, password, hobbies, gender, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const responseNewUserData = await User.create({
            firstname,
            lastname,
            email,
            contact_number,
            postcode,
            password: hashedPassword,
            hobbies: hobbies.join(','),
            gender,
            role
        });

        res.status(201).json({ message: 'User registered successfully', data: responseNewUserData });
    } catch (error) {
        console.log('ERROR IN REGISTER USER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const getAllUserList = async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const offset = (page - 1) * limit;

    try {
        const { count, rows } = await User.findAndCountAll({
            offset: parseInt(offset),
            limit: parseInt(limit),
        });

        const totalPages = Math.ceil(count / limit);

        return res.status(200).json({
            message: "User List Fetched Successfully.",
            data: rows,
            pagination: {
                totalItems: count,
                totalPages: totalPages,
                currentPage: parseInt(page),
                itemsPerPage: parseInt(limit)
            }
        });
    } catch (error) {
        console.log("ERROR IN GET ALL USER LIST ::: ", error);
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const responseData = await User.findByPk(id)
        if (!responseData) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: "User Detail fetched successfully.", data: responseData })
    } catch (error) {
        console.log("ERROR IN GET ALL USER LIST ::: ", error)
        res.status(500).json({ error: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, contact_number, postcode, password, hobbies, gender, role } = req.body;
    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.contact_number = contact_number;
        user.postcode = postcode;
        user.hobbies = hobbies.join(',');
        user.gender = gender;
        user.role = role;

        await user.save();

        res.status(200).json({ message: 'User updated successfully', data: user });
    } catch (error) {
        console.log('ERROR IN UPDATE USER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.destroy();

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.log('ERROR IN DELETE USER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser, getAllUserList, getUserById, updateUser, deleteUser }