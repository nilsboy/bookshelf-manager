var Feature = function(Bookshelf) {
  return Bookshelf.Model.extend({
    tableName: 'features',
    idAttribute: 'customFeatureId',

    car: function() {
      return this.belongsToMany('car');
    }
  });
};

module.exports = Feature;
