const db = require('./db')
const Child = require('./models/Student')
const Parent = require('./models/Parent')
const Teacher = require('./models/Teacher')
const Test = require('/.Test')

Teacher.hasMany(Child)
Child.belongsTo(Parent)
Child.belongsTo(EmergencyContact, { as: 'emergency contact' })

Teacher.hasMany(Parent, { through: 'children' });
Test.belongsTo(Student, { as: 'student' });
Student.hasMany(Test)

module.exports = {
  db,
  Teacher,
  Child,
  Parent
}
