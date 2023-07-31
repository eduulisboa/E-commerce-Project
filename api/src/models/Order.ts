import mongoose, { Document } from 'mongoose'

import { ProductDocument } from './Product'


export type ProductOrder = ProductDocument & {
    quantity: number,
  }

export type OrderDocument = Document & {
    createdAt: Date,
    products: ProductOrder[],
    userId: string,
}

const ProductOrderSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    image: { type: String },
    quantity: { type: Number },
  })

const OrderSchema = new mongoose.Schema({
    createdAT:{
        type: Date,
        required: true,
        default: Date.now
    },
    products: {type:[ProductOrderSchema]} ,
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    total: { type: Number }
})

export default mongoose.model<OrderDocument>("Order", OrderSchema)