import mongoose, { Document } from 'mongoose'

export type UserDocument = Document & {
    email: string,
    password: string
}

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

export default mongoose.model<UserDocument>("User", UserSchema)