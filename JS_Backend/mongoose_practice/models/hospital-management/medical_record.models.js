import mongoose from "mongoose";

// main medical record schema
const medicalRecordSchema = mongoose.Schema(
  {
    patentId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
    allergies: { type: [String], required: true, default: ["None"] },
    medications: [medicationsSchema],
    diagnosis: [diagnosisSchema],
    procedures: [procedureSchema],
    labResults: { type: map, of: String },
    notes: { type: String },
    createdDate: { type: Date, default: Date.now },
    lastUpdatedDate: { type: Date, default: Date.now },
  },
  { timeStamps: true }
);

// mini schema for medications
const medicationsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dosage: { type: Number, required: true },
  frequency: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

// mini schema for diagnoses
const diagnosisSchema = new mongoose.Schema({
  condition: { type: String, required: true },
  dateDiagnosed: { type: Date, required: true },
  doctorID: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  notes: { type: String },
});

// mini schema for procedures
const procedureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  notes: { type: String },
});

export const MedRecord = mongoose.model("MedRecord", medicalRecordSchema);
