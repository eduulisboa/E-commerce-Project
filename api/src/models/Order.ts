import mongoose, { Document } from 'mongoose'

import { ProductDocument, ProductSchema } from './Product'


export type OrderDocument = Document & {
    createdAt: Date,
    products: ProductDocument[],
    userId: string
}

const OrderSchema = new mongoose.Schema({
    createdAT:{
        type: Date,
        default: Date.now
    },
    products: [ProductSchema],
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
})

export default mongoose.model<OrderDocument>("Order", OrderSchema)