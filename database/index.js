const Sequelize = require('sequelize');

const User = require('./models/user');
const Event = require('./models/event');

const { DataTypes } = Sequelize;

const sequelizeInstance = new Sequelize(
  'df91eem4283e1r', // ! nama dabatabase
  'gxjuomajjpoqii', // ! username
  'ff88f6763a31ff27db49b20a384e5e0ef47aa2a4acc47820c91912539dd6f1b3', { // ! password
  host: 'ec2-18-215-111-67.compute-1.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  }
});

sequelizeInstance.authenticate()
.then((res) => console.log('Connection has been established successfully. ', res))
.catch((error) => console.error('Unable to connect to the database:', error))


const userModel = User(sequelizeInstance, DataTypes)
const eventModel = Event(sequelizeInstance, DataTypes)

module.exports = {
  userModel,
  eventModel
};


