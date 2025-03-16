import mongoose from 'mongoose';
import 'dotenv/config'

async function dbConnect() {
    try {
        await mongoose.connect(`mongodb+srv://todoappuser:${process.env.PASSWORD}@cluster0.mxg05.mongodb.net/NotesDB?retryWrites=true&w=majority&appName=Cluster0`,
            {
            bufferTimeoutMS: 30000
            }
        );
        console.log('database connected');
        
    } catch (error) {
        console.log(error.message);
        
    }
};

export default dbConnect;