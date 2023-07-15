import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();


// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;

 const Connection = () => {
    //  const MONGOOSE_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.h12hgpi.mongodb.net/?retryWrites=true&w=majority`;
     mongoose.connect(process.env.MONGOOSE_URI, { useNewUrlParser: true });
    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })
    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected ');
    })
    mongoose.connection.on('error', () => {
        console.log('Error while connecting with database');
    })
}

export default Connection;