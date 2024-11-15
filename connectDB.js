const {Sequelize} = require( 'sequelize' );
const sequelize = new Sequelize( 'todo_db', 'postgres', 'thor12thunder', {
    host: "localhost",
    dialect: "postgres",
    logging: false
} );

const connect = async () => {
    return sequelize.authenticate();
}

module.exports = {sequelize, connect};