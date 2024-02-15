import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  img: {
    type: String
  },
  roles: {
    type: [String],
    default: ['USER_ROLE'],
    enum: ['ADMIN_ROLE', 'USER_ROLE']
  }
})

export const UserModel = model('User', UserSchema)
