import foodModel from "../models/foodModel.js";
import fs from 'fs'


//import fs from 'fs';
//import fs from 'fs';
import path from 'path';

// Resolve the project root directory correctly
const __dirname = path.resolve();  // Resolves to the project root directory

// Define the uploads directory relative to the root
const uploadsDir = path.join(__dirname, 'uploads');

// Ensure uploads folder exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}






 // add food item
 const addFood = async (req, res) => {
    if (!req.file) {
        return res.json({ success: false, message: "File not provided" });
      }
      console.log(req.file);  // Log the file to verify it

      let image_filename = `${req.file.filename}`;
       

        const food = new foodModel({
                         name:req.body.name,
                         description:req.body.description,
                         price:req.body.price,
                         category:req.body.category,
                         image:image_filename
                     })
                     try {
                        await food.save();
                        res.json({ success: true, message:"Food Added" })
                     } catch (error) {
                        console.log(error)
                        res.json({ success: false, message:"Error" })
                     }
        
 }


 // all food list
 const listFood = async (req, res) => {
         try {
             const foods = await foodModel.find({})
             res.json({ success: true, data: foods })
         } catch (error) {
            console.log(error);
             res.json({ success: false, message: "Error" })
        }
    
     }


// remove food item
const removeFood = async (req, res) => {
    try {

                 const food = await foodModel.findById(req.body.id);
                 fs.unlink(`uploads/${food.image}`, () => {})
        
                 await foodModel.findByIdAndDelete(req.body.id)
                 res.json({success: true, message: "Food Removed"})
        
             } catch (error) {
                 console.log(error);
                 res.json({success: false, message: "Error"})
             }
}


export {  addFood, listFood,  removeFood }
