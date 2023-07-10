// server here
import Express from "express"
import cors from "cors"

import productRouter from './routes/products'

const app = Express()
// const path = require('path')

app.use(Express.json())
app.use(cors())
// app.use('/static', Express.static(path.join(__dirname, 'public')))
app.use("/products",productRouter)


export default app
