import { useState } from "react";

 const Counter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


  const logoutResult = () => {
    console.log(email + " " + password + username);
  }


  //useState for handling input
  // const [name, setName] = useState("");

  // const [like, setLike] = useState(0);
  // const [disLike, setDislike] = useState(0);
//  const handleLike = () =>{
//   setLike(like + 1);
//  };

//  const handleDislike = () => {
//   setDislike(disLike + 1);
//  };

//  const logName = () => {
//   console.log(name);
//  };

  return (
    <div className="p-[100px]">
      <div className="space-x-4">
        {/* <button onClick={handleLike}>Like</button> */}
        {/* <span className="font-semibold">{like}</span> */}
      </div>

      {/* <div className="space-x-4">
        <button onClick={handleDislike}>Dislike</button>
        <span className="font-semibold">{disLike}</span>
      </div> */}


      <div className="w-[400px] h-[40px] border-2 border-gray-200">
           <input 
           className="w-full h-full pl-2 outline-none" 
           placeholder="Enter your email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           >
           </input>

      

           {/* <button onClick={logName}>log out name</button>
           <p>{name}</p> */}

      </div>

       <div className="w-[400px] h-[40px] border-2 border-gray-200">
           <input 
           className="w-full h-full pl-2 outline-none" 
           placeholder="Enter your email"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           >
           </input>

      

        

      </div>

      <div className="w-[400px] h-[40px] border-2 border-gray-200">
           <input 
           className="w-full h-full pl-2 outline-none" 
           placeholder="Enter your password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           >
           </input>

      

           {/* <button onClick={logName}>log out name</button>
           <p>{name}</p> */}

      </div>

     

      <button onClick={logoutResult}>click</button>
    </div>
    
  );
 };

export default Counter;




// import React, { useState } from "react"

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   function increase() {
//     setCount(count + 1);
//   };

//   function decrease() {
//     setCount(count - 1);
//   };
//    function reset() {
//     setCount(count - count);
//   };


//   // const updateUser = () => {
//   //   setUser("Mike");
//   // };
//   return (
//     <div className="p-[100px]">
//       <div className="flex gap-3 items-center">
//         <button onClick={increase} className="border-2 border-black">Add</button>

//         <h1 className="text-3xl font-bold">{count}</h1>

//         <button onClick={decrease} className="border-2 border-black">remove</button>
        
//         <button onClick={reset}>reset</button>
//       </div>
//     </div>
//   )
//   // const count = 1

  
//   // const [username, setUsername] = useState("John Doe");
//   // const [count, setCount] = useState(10);

//   // const updateCount = () => {
//   //   setCount(50);
//   // };
  

//   // return (
//   //   <div className="p-[100px]">
//   //     <p className="font-bold text-2xl">{count}</p>
//   //     <button onClick={updateCount}>Update Count</button>
//   //   </div>
//   // )
// }


