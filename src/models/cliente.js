const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cachorro = require('./cachorro');

const Cliente = conexao.define('clientes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        unique: true, // Essa opção garante unicidade
    },

}, {
    createdAt: false,
    updatedAt: false
})

Cachorro.belongsTo(Cliente, { foreignKey: 'clienteId' });
Cliente.hasMany(Cachorro, { foreignKey: 'clienteId' });

// module.exports = Cliente

// module.exports = (sequelize, DataTypes) => {
//     const Cliente = sequelize.define('Cliente', {
//       // Defina os campos do modelo Cliente
//     });
  
//     Cliente.associate = (models) => {
//       Cliente.hasMany(models.Cachorro, {
//         foreignKey: 'clienteId', // Chave estrangeira em Cachorro que liga a
// Cliente
//         as: 'cachorros', // Alias para a relação
//       });
//     };
  
//     return Cliente;
//   };