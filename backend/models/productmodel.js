const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
    maxLength: [100, "Pruduct max conatain 100 char"],
  },
  price: {
    type: Number,
    required: true,
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please Enter prouct deatils"],
  },
  ratings: {
    type: String,
    default: 0,
  },
  images: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please select the catogory"],
    emum: {
      values: [
        "Electronics",
        "Mobile Phones",
        "Laptop",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please Select Catogory",
    },
  },

  seller: {
    type: String,
    required: [true, "Please Enter Product Details"],
  },

  stock: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxLength: [30, "Max Selection is 30"],
  },

  numberofReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true],
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
    defult: Date.now(),
  },
});

const schema = mongoose.model("Product", productSchema);

module.exports = schema;
