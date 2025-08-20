import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderId : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "Pending"
    },
    total : {
        type : Number,
        required : true
    },
    products : [
        productInfo : {
            productId : {
                type : String,
                required : true
            },
            name : {
                type : String,
                required : true
            },
            altNmaes : {
                tyrpe : String,

            },
            images : [{
                type : String
            }],
            labledPrice : {
                type : Number,
                required : true
            },
            price : {
                type : Number,
                required : true
            }
        },
        quantity : {
            type : Number,
            required : true
        }
    ],
    date : {
        type : Date,
        default : date.now
    }
})

const Order = mongoose.model("orders",orderSchema)

export default Order;