module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id_role: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  });

  return Role;
};
