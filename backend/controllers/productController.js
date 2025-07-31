import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export function getProducts(req,res){
    Product.find().then((data)=>{
        res.json(data)
    })
}
export function saveProduct(req,res){

    if(!isAdmin(req)){
        res.status(403).json({
            message : "you are not authorized"
        })
        return
    }

    const product = new Product(
        
        req.body
    );

    product.save().then(()=>{
        res.json(
            {
                message : "product added successfully"
            }
        );
    })
    .catch(()=>{
        res.json(
            {
                message : "Failed to add product"
            }
        );
    })
}

export async function deleteProduct(req,res){
    if(!isAdmin(req)){
         res.status(403).json({
            message : "You are not authorized to delete products"
         })
         return
    }
    try{
        await Product.deleteOne({productId : req.params.productId})

        res.json({
            message : "Product deleted successfully"
        })
    }catch(err){
        res.status(500).json({
            message : "Failed to delete product",
            error : err
        })
    }

}

export async function updateProduct(req,res){
    if(!isAdmin(req)){
         res.status(403).json({
            message : "You are not authorized to delete products"
         })
         return
    }
    const productId = req.params.productId
    const updaingData = req.body

    try{
        await Product.updateOne(
            {productId : productId},
            updaingData
        )
        res.json({
            message : "product updated succesfully"
        })
   }catch(err){
    res.status(500).json({
        message : "Internal server error",
        errror : err
    })
   }
}