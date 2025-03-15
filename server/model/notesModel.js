import mongoose from 'mongoose';


const notesSchema = mongoose.Schema({
    title:{type:String,required:true},
    text:{type:String,required:true},
    userMail:{type:String},
});

export const Notes = mongoose.model('Notes',notesSchema);