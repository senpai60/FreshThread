import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: { type: String, required: true, trim: true },
  content: { type: String, required: true },
  contentImages: { type: [String], default: [] },
});

const Blog = mongoose.model("Blog", blogsSchema);
export default Blog;

// Bro 2 min ruk jaa bss nana washroom me gye bc...nana nani ke yaha esa h ki bc so jaao 12 bjje tkk
