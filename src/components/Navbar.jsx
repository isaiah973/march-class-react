import { useEffect, useState } from "react";
import Logo from "../assets/facebook.svg"
import AOS from "aos";
import { RxHamburgerMenu } from "react-icons/rx";
import "aos/dist/aos.css";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar () {
const [login, setLogin] = useState(false);
const [mobilenav, setMobilenav] = useState(false);

useEffect(() => {
  AOS.init();
}, []);

const toggleNavbar = () => {
  setMobilenav(!mobilenav);
}

  const handleLogin = () => {
    setLogin(true);
  }
  

  return (
    <>
    <nav className="flex justify-between px-10 py-4 shadow-lg">
       <div className="flex gap-6 items-center font-bold">
        <img className="w-40" src={Logo} alt="logo" />
        <ul className="lg:flex gap-10 hidden ">
          <li>Products</li>
          <Link to="/about">
           <li>About</li>
          </Link>
          <li>Resources</li>
           <Link to="/todo">
          <li>To do</li>
          </Link>
          <Link to="/product">
          <li>Product</li>
          </Link>
          <Link to="/post">
          <li>SocialPost</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-6 font-bold items-center">
        {login ? (
          <span>Hello User</span>
          ) : (
          <button 
          onClick={handleLogin} 
          className="border-2 border-gray-600 px-3 py-1 h-12 rounded-xl lg:flex hidden"
          >
            Log in
          </button>
        )}
        <Link to="login">
          <button>User Login</button>
          </Link>
        <button className="lg:block hidden border-2 border-blue-500 px-3 py-1 h-12 rounded-xl bg-[#00A2FF] text-white hover:bg-white hover:text-[#00A2FF] cursor-pointer">Signup free</button>

        {mobilenav ? (
          <FaTimes 
          className="lg:hidden block text-3xl z-50" 
          onClick={toggleNavbar}
          />
          ) : (
          <RxHamburgerMenu 
          onClick={toggleNavbar} 
          className="lg:hidden block text-3xl mt-4 z-50"
          />
          )}
        </div>
    </nav>

    {mobilenav && (
      <aside 
        className="flex flex-col gap-4 px-4 py-12 bg-white shadow-lg w-[70%] h-[100vh] absolute right-0 top-0"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
       <ul className="space-y-6">
          <li>Products</li>
          <li>Pricing</li>
          <li>Resources</li>
          <Link to="todo">
          <li>To do</li>
          </Link>
          
        </ul>

        <button 
        onClick={handleLogin} 
        className="border-2 border-gray-600 px-3 py-1 h-12 rounded-lg "
        >
          Log in
        </button>
       
        
        <button className=" border-2 border-blue-500 px-3 py-1 h-12 rounded-xl bg-[#00A2FF] text-white hover:bg-white hover:text-[#00A2FF] cursor-pointer">Signup free</button>
        
    </aside>)
    }
    </>



  );
};
export default Navbar;