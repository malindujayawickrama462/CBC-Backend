import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    async function handleLogin(){
        console.log(email);
        console.log(password);
        try{
             const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/login",{
                email : email,
                password : password
             })
             //alert ("Login successfull")
             console.log("Login Successfull")
             console.log(response.data)
             //from console
             localStorage.setItem("token",response.data.token)
            //send user to admin panel if he exit
             if(response.data.role == "admin"){
                navigate("/admin/")
             }else{
                navigate("/")
             }
        }catch(e){
            console.log(e)
       }
       }

    return(
        <div className='w-full h-screen bg-[url("/login.jpg")] bg-center bg-cover flex justify-center items-center'>
          <div className="w-[50%] h-full">

          </div>
          <div className="w-[50%] h-full flex justify-center items-center">
            <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
                <input onChange = {(e)=>{

                    setEmail(e.target.value)
                    
                }}
                value={email}
                className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px]"/>
                <input onChange={(e)=>{

                    setPassword(e.target.value)
                    
                }} 
                value={password}
                type = "password" className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px]"/>
                <button onClick = {handleLogin} className= "w-[300px] cursor-pointer h-[50px] bg-[#c3efe9] rounded-[20px] text-[20px] font-bold text-[white] mb-[20px]">Login</button>
            </div>
          </div>
        </div>
    )
}