import {Notes} from '../model/notesModel.js'
export const addNote =async(req,res)=>{
    try {
        const note = new Notes({title:req.body.title,text:req.body.title,userMail:req.user.email});
       await note.save();
       console.log('note added');
       res.status(201).json({message:'new note added'});
       
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);       
    }
}
export const getNotes = async(req,res)=>{
    try {
        const data = await Notes.find({userMail:req.user.email});
        console.log('data sent');
        res.status(200).json({data:data});
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message); 
    }
}
export const getOneNote = async(req,res)=>{
    try {
        console.log(req.params);
        const data = await Notes.findById(req.params.id);
        res.status(200).json({data:data});
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message); 
    }
}
export const updateNote = async(req,res)=>{
    try {
        const data = await Notes.findOneAndUpdate({_id:req.params.id},{title:req.body.title,text:req.body.text});
        console.log(data);
        res.status(200).json({message:'updated successfully'});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}

export const deleteNote =async(req,res)=>{
    try {
        const deletedData = await Notes.findOneAndDelete({_id:req.params.id});
        console.log(deletedData);
     if(deletedData) {
        console.log('deleted successfully',deletedData);
        
        return res.status(200).json({message:'deleted Sucessfully'});
     }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
        
    }
}