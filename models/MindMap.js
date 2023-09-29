//we can use this model specifically for the actual mind map itself??
const { /* UUIDV4, */ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MindMap extends Model {}

MindMap.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acceptance_criteria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wireframe_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'mindMap',
    },
);

module.exports = MindMap;