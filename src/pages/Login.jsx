import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {username, password}
  try{
    const response = await axios.post("https://fakestoreapi.com/auth/login",
      credentials
    );
    if(response.status == 200) {
     navigate("/");
    } 
    console.log(response)
  } catch (error) {
    console.log("Error", error);
  }
   
  };


  


  return (
    <div className="mt-[10px] flex flex-col gap-3 items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center justify-center" action="" >
        
        <input 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-[400px] h-[50px] border-[1px] border-gray-400 pl-2 outline-none" placeholder="Enter username"/>
        
        <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
        className="w-[400px] h-[50px] border-[1px] border-gray-400 pl-2 outline-none" placeholder="Enter password" />
        
        <button  className="w-[400px] px-5 py-3 bg-teal-200">Login</button>
      </form>
    </div>
  )
}

export default Login
// mor_2314
// 83r5^_