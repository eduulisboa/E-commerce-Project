import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
    email: string,
    password: string
}

const UserSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    password:{
        type: String
    }
})

export default mongoose.model<UserDocument>("User", UserSchema)