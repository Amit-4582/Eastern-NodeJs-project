const { Supplier } = require("../models");

const createSupplier = async (req, res) => {
    try {
        const { name, contact_info } = req.body;
        const supplier = await Supplier.create({ name, contact_info });
        res.status(201).json({ message: 'Supplier created successfully', data: supplier });
    } catch (error) {
        console.log('ERROR IN CREATE SUPPLIER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const getAllSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.findAll();
        res.status(200).json({ message: 'Suppliers fetched successfully', data: suppliers });
    } catch (error) {
        console.log('ERROR IN GET ALL SUPPLIERS ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const getSupplierById = async (req, res) => {
    const { id } = req.params;
    try {
        const supplier = await Supplier.findByPk(id);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }
        res.status(200).json({ message: 'Supplier fetched successfully', data: supplier });
    } catch (error) {
        console.log('ERROR IN GET SUPPLIER BY ID ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const updateSupplier = async (req, res) => {
    const { id } = req.params;
    const { name, contact_info } = req.body;
    try {
        const supplier = await Supplier.findByPk(id);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        supplier.name = name;
        supplier.contact_info = contact_info;

        await supplier.save();

        res.status(200).json({ message: 'Supplier updated successfully', data: supplier });
    } catch (error) {
        console.log('ERROR IN UPDATE SUPPLIER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteSupplier = async (req, res) => {
    const { id } = req.params;
    try {
        const supplier = await Supplier.findByPk(id);
        if (!supplier) {
            return res.status(404).json({ message: 'Supplier not found' });
        }

        await supplier.destroy();

        res.status(200).json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        console.log('ERROR IN DELETE SUPPLIER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createSupplier, getAllSuppliers, getSupplierById, updateSupplier, deleteSupplier };
