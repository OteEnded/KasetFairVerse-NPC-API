const dbconnector = require('../services/dbconnector');
const connection = dbconnector.getConnection();

function migrate(is_force = true) {
    connection.sync({ force: is_force })
        .then(() => {
            console.log('Table created successfully');
        })
        .catch((err) => {
            console.error('Error creating table:', err);
        });
}

function seed() {
    return
}

module.exports = {
    migrate,
    seed
};
