/**
 * =====================================================
 *  NAME    : home.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 08/10/2025
 *  DESCRIPTION: PAGE HOME
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import NavBar from "@/components/main/NavBar";
import Content from "./modules/Content";
import backgroundImage from "/img/bg-web.jpg";
import "@/assets/css/fonts.css";
import "@/assets/css/animationsHome.css";
import Footer from "@/components/main/Footer";


// LOGIC
type HomePageProps = {
  t: (key: string) => string;
};

// HOME PAGE
const Home: React.FC<HomePageProps> = ({ t }) => {
  return (
    <>
      {/* NAVBAR */}
      <NavBar t={t} />
      {/* MAIN CONTENT */}
      <div className="relative flex flex-col text-white max-w-screen dark:bg-black/50">
        {/* BACKGROUND */}
        <span className="fixed top-0 left-0 w-full h-full -z-10">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-0 left-0 w-full h-full bg-black/40"></span>
        </span>
        {/* WELCOME CONTENT */}
        <Content t={t} />
      </div>
      {/* FOOTER */}
      <Footer t={t} />
    </>
  );
};
export default Home;
