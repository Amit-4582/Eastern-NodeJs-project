const { User, Role, UserRole } = require("../models");

const createNewRole = async (req, res) => {
    try {
        const { name } = req.body;
        const newRole = await Role.create({ name });
        res.status(201).json({ message: 'Role created successfully', data: newRole });
    } catch (error) {
        console.log('ERROR IN CREATE NEW ROLE ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const getAllRoleList = async (req, res) => {
    try {
        const roles = await Role.findAll();
        res.status(200).json({ message: 'Role list fetched successfully', data: roles });
    } catch (error) {
        console.log("ERROR IN GET ALL ROLE LIST ::: ", error)
        res.status(500).json({ error: error.message });
    }
}

const getRoleById = async (req, res) => {
    const { id } = req.params
    try {
        const role = await Role.findByPk(id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        res.status(200).json({ message: 'Role fetched successfully', data: role });
    } catch (error) {
        console.log("ERROR IN GET ROLE BY ID ::: ", error)
        res.status(500).json({ error: error.message });
    }
}

const updateRole = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const role = await Role.findByPk(id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        role.name = name;
        await role.save();
        res.status(200).json({ message: 'Role updated successfully', data: role });
    } catch (error) {
        console.log('ERROR IN UPDATE ROLE ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteRole = async (req, res) => {
    const { id } = req.params;
    try {
        const role = await Role.findByPk(id);
        if (!role) {
            return res.status(404).json({ message: 'Role not found' });
        }
        await role.destroy();
        res.status(200).json({ message: 'Role deleted successfully' });
    } catch (error) {
        console.log('ERROR IN DELETE ROLE ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const attachUserRole = async (req, res) => {
    const { userId, roleId } = req.body;
    try {
        const user = await User.findByPk(userId);
        const role = await Role.findByPk(roleId);
        if (!user || !role) {
            return res.status(404).json({ message: 'User or Role not found' });
        }
        await UserRole.create({ userId, roleId });
        res.status(201).json({ message: 'Role attached to user successfully' });
    } catch (error) {
        console.log('ERROR IN ATTACH USER ROLE ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const detachUserRole = async (req, res) => {
    const { userId, roleId } = req.body;
    try {
        const userRole = await UserRole.findOne({ where: { userId, roleId } });
        if (!userRole) {
            return res.status(404).json({ message: 'UserRole not found' });
        }
        await userRole.destroy();
        res.status(200).json({ message: 'Role detached from user successfully' });
    } catch (error) {
        console.log('ERROR IN DETACH USER ROLE ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createNewRole, getAllRoleList, getRoleById, updateRole, deleteRole, attachUserRole, detachUserRole };
