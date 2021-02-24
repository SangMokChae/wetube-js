import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // ## Video.js 에서 리스트 형식으로 사용하게 되면 이 방식은 필요 없어 진다.
  // video: { 
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Video" // Video.js에 model에 똑같은 이름으로 존재해야 한다.
  // }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;