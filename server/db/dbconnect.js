import mongoose from 'mongoose';


async function dbConnect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/NotesAppDB');
        console.log('database connected');
        
    } catch (error) {
        console.log(error.message);
        
    }
};

export default dbConnect;