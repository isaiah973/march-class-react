import { lazy, Suspense, useContext, useEffect } from "react";
import BookDemo from "../components/BookDemo";
import Conditional from "../components/Conditional";
// import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
// import Popular from "../components/Popular";
import Sale from "../components/Sale";
import Spinner from "../components/Spinner";
import UserContext from "../Context";


// const Dashboard = lazy(() => import("./Dashboard"))
const HeroSection = lazy(
  () => 
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/HeroSection"));
      }, 10000);
    })
);

const Popular = lazy(
  () => 
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../components/HeroSection"));
      }, 10000);
    })
);
    


 
const Home =()=>{
const userInfo = useContext(UserContext);
  return (
  <div>
   
    
    <Navbar />
     <h1>{userInfo}</h1>

    <Suspense fallback={<Spinner />}>
      <HeroSection />
    </Suspense >

    <BookDemo />
    
    <Suspense fallback={<Spinner />}>
      <Popular />
    </Suspense >

    <Sale />
    <Conditional />
    
  </div>
  );
};
export default Home