import ModelSchema from 'sistemium-mongo/lib/schema';

export default new ModelSchema({
  collection: 'Location',
  schema: {
    id: String,
    userId: String,
    latitude: String,
    longitude: String,
    routeId: String,
    timestamp: Date,
    ord: Number,
  },
}).model();
