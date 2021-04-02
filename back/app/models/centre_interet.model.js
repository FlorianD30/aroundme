module.exports = (sequelize, Sequelize) => {
    const CentreInteret = sequelize.define("centre_interet", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return CentreInteret;
  };