import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// config
const app = express();
const port = process.env.PORT || 4000;

//connect to mongodb
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

//api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('API working');
})

app.listen(port, () => {
    console.log('Server is running on port '+port);
})
