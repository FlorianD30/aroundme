module.exports = (sequelize, Sequelize) => {
    const Activites = sequelize.define("activites", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Activites;
  };