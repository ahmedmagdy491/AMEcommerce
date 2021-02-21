import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import connectDB from './config/database.js';
import colors from 'colors'
const app = express();

app.use(express.json())

// Routes
import productRoute from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config()



connectDB()


app.get('/', (req, res) => {
	res.send('API is Runnning')
});

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`.yellow.bold);
});