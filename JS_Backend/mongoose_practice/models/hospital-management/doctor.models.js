import mongoose from "mongoose";

// to check doctors are spending how much time in which hospital
// mini schema
const worksInHospitalSchema = new mongoose.Schema({
  hospitalID: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    salary: { type: String, required: true },
    qualifications: { type: String, required: true },
    experienceInYear: { type: Number, default: 0 },
    worksInHospitals: [worksInHospitalSchema],
    // [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Hospital",
    //   },
    // ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
