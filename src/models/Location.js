import ModelSchema from 'sistemium-mongo/lib/schema';

export default new ModelSchema({
  collection: 'Location',
  schema: {
    id: String,
    userId: String,
    latitude: Number,
    longitude: Number,
    routeId: String,
    timestamp: String,
  },
  mergeBy: ['userId', 'id'],
}).model();
