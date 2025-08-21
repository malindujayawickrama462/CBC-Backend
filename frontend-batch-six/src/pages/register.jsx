import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const navigate = useNavigate();

  async function handleRegister() {
    console.log(firstName, lastName, email, password);

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/register",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );

      console.log("Registration Successful");
      console.log(response.data);
      navigate("/login")

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='w-full h-screen bg-[url("/login.jpg")] bg-center bg-cover flex justify-center items-center'>
      <div className="w-[50%] h-full"></div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[500px] h-[600px] backdrop-blur-md rounded-[20px] shadow-xl flex flex-col justify-center items-center">
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            placeholder="First Name"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px] px-4"
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            placeholder="Last Name"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px] px-4"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px] px-4"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-[300px] h-[50px] border border-[#c3efe9] rounded-[20px] mb-[20px] px-4"
          />
          <button
            onClick={handleRegister}
            className="w-[300px] cursor-pointer h-[50px] bg-[#c3efe9] rounded-[20px] text-[20px] font-bold text-white mb-[20px]"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
