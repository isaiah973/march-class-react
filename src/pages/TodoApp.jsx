import { useState } from "react";
import { SiTodoist } from "react-icons/si";

export default function TodoApp() {
  const[task, setTask] = useState("");
  const[todo, setTodo] = useState([]);

  const addTodo = () => {
    setTodo([...SiTodoist, {id: Date.now(), text: task, completed: false}]);
    setTask("");
  };

  function logOutTask() {
    console.log(task);
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <div className="flex mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
            placeholder="Enter a task"
          />
          <button onClick={logOutTask} className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700">
            Add
          </button>
        </div>

        <ul>
          <li className="flex justify-between items-center p-2 border-b">
            <span className="cursor-pointer ">Do Laundry</span>
            <button className="text-red-500 hover:text-red-700">&times;</button>
          </li>
        </ul>
      </div>
    </div>
  );
}