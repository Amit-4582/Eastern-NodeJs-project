const { Customer } = require("../models");

const createCustomer = async (req, res) => {
    try {
        const { name, contact_info } = req.body;
        const customer = await Customer.create({ name, contact_info });
        res.status(201).json({ message: 'Customer created successfully', data: customer });
    } catch (error) {
        console.log('ERROR IN CREATE CUSTOMER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json({ message: 'Customers fetched successfully', data: customers });
    } catch (error) {
        console.log('ERROR IN GET ALL CUSTOMERS ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const getCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer fetched successfully', data: customer });
    } catch (error) {
        console.log('ERROR IN GET CUSTOMER BY ID ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, contact_info } = req.body;
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        customer.name = name;
        customer.contact_info = contact_info;
        await customer.save();
        res.status(200).json({ message: 'Customer updated successfully', data: customer });
    } catch (error) {
        console.log('ERROR IN UPDATE CUSTOMER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await Customer.findByPk(id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        await customer.destroy();
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.log('ERROR IN DELETE CUSTOMER ::: ', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer };
