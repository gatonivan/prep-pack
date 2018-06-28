const Sequelize = require('sequelize');
const db = require('../db');

const EmergencyContact = db.define('emergency', {
    firstName: {
        type: SEQUELIZE.String,
    }
})

module.exports = EmergencyContact