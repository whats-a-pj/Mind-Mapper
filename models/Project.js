//we can use this model specifically for the actual mind map itself??
const { /* UUIDV4, */ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
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
        //user story question
        acceptance_criteria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //packages question
        pkg_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //notes question
        note: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //code snippet question
        snippet: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //wireframe question- p much user can just input their link here but idk if link is a datatype lol
        wireframe_link: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //resources question
        resource_name: {
            type: DataTypes.STRING,
            allowNull: true
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
    modelName: 'project',
    },
);

module.exports = Project;