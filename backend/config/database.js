import mongoose  from 'mongoose';

const connectDB = async () =>{
    try {
        const conn = await mongoose.connect( 'mongodb+srv://Ahmed:ahmed123@cluster0.txq89.mongodb.net/Am-shop?retryWrites=true&w=majority'
        , {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
        });
        console.log(`MongoDB Connected to ${conn.connection.host}`.cyan.bold.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}


export default connectDB