import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  email: { type: String, required: true, index: true, unique: true },
  createdAt: { type: Date, required: true, default: Date.now },
  updatedAt: { type: Date, required: true, default: Date.now },
})

export default mongoose.models.email ?? mongoose.model('email', schema)
mongoose.connect((process as any).env.DB).then(() => {
  console.log('MongoDB connected!')
})
