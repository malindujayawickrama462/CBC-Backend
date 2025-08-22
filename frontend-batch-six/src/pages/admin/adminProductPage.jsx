import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminProductsPage(){
    const [products,setProducts] = useState([])

    useEffect(()=>{
        axios.get(import.meta.VITE_BACKEND_URL+"/api/products").then((res)=>{
        console.log(res.data)
    });
    },[]);

    return(
        <div className="w-full h-full max-h-full overflow-y-scroll">
            <table className="w-full text-center">
                <thead>
                    <tr>
                        <th>Product TD</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Labled Price</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       products.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.productId}</td>
                                <td>{item.name}</td>
                                <td>{item.productId}</td>
                                <td>{item.labledPrice}</td>
                                <td>{item.Price}</td>
                                <td>{item.stock}</td>
                            </tr>
                        )
                       })
                    }
                </tbody>
            </table>
        </div>
    )
}