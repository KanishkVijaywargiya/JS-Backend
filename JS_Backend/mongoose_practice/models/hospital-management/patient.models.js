import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    bloodGroup: {
      type: String,
      enum: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"],
      default: "B+",
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Others"],
      required: true,
    },
    diagnosedWith: { type: String, required: true },
    address: { type: String, required: true },
    admittedIn: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
