import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;