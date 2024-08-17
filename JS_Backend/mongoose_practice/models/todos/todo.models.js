import mongoose from "mongoose";

// schema
const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // this createdBy is basically a relation b/w todo created by which user
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // this is also a reference from todo to Sub_todo
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // Array of sub todos
    // CreationDate
  },
  { timestamps: true }
);

// model export
export const Todo = mongoose.model("Todo", todoSchema);

// name of this model in mongo DB will be - todos
