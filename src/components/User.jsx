import React, { useState } from "react"
import profileImage from "../assets/react.svg";
import { FaStar, FaUser } from "react-icons/fa";

const user = [
  {
      name: "Ade",
      age: 42,
      class: "Fullstack",
      image: "vite.svg",
  },

  {
      name: "Joe",
      age: 22,
      class: "UI/UX",
      image: "vite.svg",
  },

  {
      name: "Esther",
      age: 20,
      calss: "Cyber Security",
      image: "vite.svg",
  },

  {
      name: "Jack",
      age: 30,
      calss: "Data Analysis",
      image: profileImage,//it has been imported from assets
  }
 ];

 const User = () => {
 const number = [2, 4, 6];
 const doubledNumber = number.map((num) => num * 2);
//  console.log(doubledNumber);

 const fruits = ["apple, mango, orange"];


const [guestName, setGuestName] = useState("Guest");
const [inputValue, setInputValue] = useState("");


const handleGuestInput = (event) => {
  setInputValue(event.target.value);
};
const setName = () => {
  setGuestName(inputValue);
  setInputValue("");
}

  return (
    <div className="p-[100px]">
      <p className="font-semibold text-teal-400">Welcome {guestName}!</p>
      <input  
      onChange={handleGuestInput}
      placeholder="Enter your name"
      value={inputValue}
      className="pl-1 outline-none border-2 border-gray-200 rounded-md">
      </input>
      
      <button onClick={setName} className="border-2 border-teal-300 rounded-md text-sm">Login</button>






      {user.map((u, index) => (
        <article 
            key={index} 
            className="border-2 border-gray-100 w-fit p-3 rounded-lg shadow-md">
            
            <img src={u.image} alt="profile-image"/>
            <p className="font-semibold">name:{u.name}</p>
            <p className="font-semibold">age:{u.age}</p>
            <p className="font-semibold">class:{u.class}</p>
            <FaUser className="text-red-500"/>
            <FaStar className="text-yellow-600"/>
        </article>
      ))}
      {/* <ul>
      {fruits.map((f, index) => (
          <li>{f}</li>
      ))}
      </ul>
       */}
      {/* {fruits.map((f, index) => (
        <ul key={index}>
          <li>{f}</li>
        </ul>
      ))} */}
    </div>
  )
}

export default User
