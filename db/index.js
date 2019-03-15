const mongoose = require('mongoose');

const CONNECTION_URI = `mongodb://${process.env.DB_URI || 'localhost'}/sdc2`;

const connectMongo = () => {
  mongoose
    .connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      poolSize: 10
    })
    .then(() => console.log('MongoDB connection established.'))
    .catch(err => {
      console.log(err);
      console.log('MongoDB connection failed, retrying in 5 seconds.');
      setTimeout(connectMongo, 5000);
    });
};

connectMongo();

const slideSchema = mongoose.Schema({
  imgPath: Number,
  description: String
});

const listingSchema = mongoose.Schema({
  listingId: { type: Number, index: true, unique: true },
  images: [slideSchema]
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;