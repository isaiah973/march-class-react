import React, { useState } from "react"

const Conditional = () => {
  // let login = false;
// let hasSubscribed = true;
const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1)
  }

   const handleDecrease = () => {
    setCount(count - 1)
  }


  return (
    <div className="h-[100vh] mt-5 ml-16">
      <button onClick={handleIncrease} className="text-4xl font-semibold">+</button>
      {count > 0 && <div><p>{count}</p><button onClick={handleDecrease} className="text-4xl font-semibold">-</button></div>}
    </div>
  )
}

export default Conditional
