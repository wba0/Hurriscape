const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offerSchema = new Schema({
  origin: {
    type: String,
    required: true
  },
  originLatLng: [
    { type: Number }
  ],
  destinationLatLng: [
    { type: Number }
  ],
  car: {
    type: String,
    required: true
  },
  spaces: {
    type: Number,
    required: true
  },
  pets: {
    type: Boolean,
    required: true
  },
  departureDate: {
    type: Date,
    required: true
  },
  departureTime: {
    type: String,
    required: true
  },
  barter: {
    type: String,
    required: true
  },
  //the mongo ID of the user that this offer belongs to
  owner: {
    type: Schema.Types.ObjectId,
    required: true
  }
},
 {
  timeStamps: true
}
);

const OfferModel = mongoose.model("Offer", offerSchema);

module.exports = OfferModel;