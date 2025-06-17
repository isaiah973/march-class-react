import Logo from "../assets/facebook.svg"

function Navbar () {
  return (
    <nav className="flex justify-between px-10 py-4 shadow-lg">
       <div className="flex gap-6 items-center font-bold">
        <img className="w-40" src={Logo} alt="logo" />
        <ul className="flex gap-10">
          <li>Products</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Book a demo</li>
        </ul>
      </div>
      <div className="flex gap-6 font-bold">
        <button className="border-2 border-gray-600 px-3 py-1 h-12 rounded-lg">Log in</button>
        <button className="border-2 border-blue-500 px-3 py-1 h-12 rounded-xl bg-[#00A2FF] text-white hover:bg-white hover:text-[#00A2FF] cursor-pointer">Signup free</button>
      </div>
    </nav>
  );
};
export default Navbar;