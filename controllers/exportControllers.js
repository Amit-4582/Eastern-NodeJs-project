const { User } = require('../models');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const exportWithCSVFile = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'firstname', 'lastname', 'email', 'contact_number', 'postcode', 'hobbies', 'gender', 'role']
        });

        // CREATE A FIELD IN CSV FILE
        const csvWriter = createCsvWriter({
            path: 'user_data.csv',
            header: [
                { id: 'id', title: 'ID' },
                { id: 'firstname', title: 'First Name' },
                { id: 'lastname', title: 'Last Name' },
                { id: 'email', title: 'Email' },
                { id: 'contact_number', title: 'Contact Number' },
                { id: 'postcode', title: 'Postcode' },
                { id: 'hobbies', title: 'Hobbies' },
                { id: 'gender', title: 'Gender' },
                { id: 'role', title: 'Role' },
            ]
        });

        // SETUP DATA IN THAT FIELD
        const records = users.map(user => ({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            contact_number: user.contact_number,
            postcode: user.postcode,
            hobbies: user.hobbies.join(', '),
            gender: user.gender,
            role: user.role
        }));

        await csvWriter.writeRecords(records);

        res.status(200).download('user_data.csv', 'user_data.csv', (err) => {
            if (err) {
                console.log('ERROR IN DOWNLOADING FILE ::: ', err);
                res.status(500).json({ error: err.message });
            }
        });
    } catch (error) {
        console.log('ERROR IN EXPORT CSV ::: ', error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { exportWithCSVFile }