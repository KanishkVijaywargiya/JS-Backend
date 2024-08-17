import mongoose from "mongoose";

// this mini schema is prepared to get the order items basically - count of products order by user - maintained hoga
const orderItemSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// mini schema for address
const deliveryAddressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  flatNo: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  townCity: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // qty of items ordered by user
    orderItems: {
      type: [orderItemSchema],
      required: true,
    },
    shipAddress: {
      type: [deliveryAddressSchema],
      required: true,
    },
    // a type of required field, not giving users a way to type
    orderStatus: {
      type: String,
      enum: ["PENDING", "CANCELED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
