import { lazy, Suspense, useEffect } from "react";
import BookDemo from "../components/BookDemo";
import Conditional from "../components/Conditional";
// import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
// import Popular from "../components/Popular";
import Sale from "../components/Sale";
import Spinner from "../components/Spinner";


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

  return (
  <div>
    
    <Navbar />

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