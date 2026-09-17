const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    __resolveReference: (reference, context) => {
      const { id } = reference;
      const { dataSources } = context;
      return dataSources.locationsAPI.getLocation(id);
    },
  },
};

module.exports = resolvers;
