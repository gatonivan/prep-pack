const Sequelize = require('sequelize')
const db = require('./db')

const Parent = db.define('parent', {
    name: {
        type: Sequelize.STRING,
        allowNull: alse
      },
  age: {
      type: Sequelize.INTEGER,
          allowNull: false
      },
    sex: {
        type: Sequelize.STRING,
    } 
})

module.exports = Parent