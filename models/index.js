//create the connection between our models here
const User = require('./User');
const MindMap = require('./MindMap');

User.hasMany(MindMap, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

MindMap.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, MindMap };