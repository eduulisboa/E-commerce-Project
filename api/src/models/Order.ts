import mongoose, { Document } from 'mongoose'

import { ProductDocument } from './Product'


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
    products:{
        type: [ProductSchema],
    },
    userId:{
        type: Number,
    },
})

export default mongoose.model<OrderDocument>("Order", OrderSchema)