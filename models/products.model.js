const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],
      // default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    // By including { timestamps: true } in the schema options, you're instructing Mongoose to manage these createdAt and updatedAt fields automatically for each document created using this schema. This is helpful for tracking when documents are created and updated in the database, which can be useful for auditing, versioning, or other purposes.
    timestamps: true,
  }
);


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;