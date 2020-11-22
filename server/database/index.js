const { Sequelize, Model, DataTypes } = require('sequelize');
const databaseURL = process.env.DATABASE_URL || 'postgres://localhost:5432/bug_tracker'

// 1: Connect to database
const db  = new Sequelize(databaseURL);

const testConnection = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConnection()

// 2: Define Models
const User = db.define('User', {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

const Issue = db.define('Issue', {
    subject: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    resolved: { 
        type: DataTypes.BOOLEAN
    }
})

const Project = db.define('Project', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})

User.belongsToMany(Issue, {through: 'UserIssue'})
Issue.belongsToMany(User, {through: 'UserIssue'})

User.belongsToMany(Project, {through: 'UserProject'})
Project.belongsToMany(User, {through: 'UserProject'})
Project.hasMany(Issue)
Project.belongsTo(User, { as: 'Manager'})

// 3: Synchronize Database

// db.sync({force: true})
// db.drop()
module.exports = {
    db,
    User,
    Issue
}; 