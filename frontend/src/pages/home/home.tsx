/**
 * =====================================================
 *  NAME    : home.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 25/09/2025
 *  DESCRIPTION: PAGE HOME
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import NavBar from "@/components/containers/NavBar";
import Content from "./modules/Content";
import backgroundImage from "/img/bg-web.jpg";
import "@/assets/css/fonts.css";
import "@/assets/css/animationsHome.css";
import Footer from "@/components/containers/Footer";


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
      <main className="relative flex flex-col text-white max-w-screen dark:bg-black/50">
        {/* BACKGROUND */}
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
        </div>
        {/* WELCOME CONTENT */}
        <Content t={t} />
      </main>
      {/* FOOTER */}
      <Footer t={t} />
    </>
  );
};
export default Home;
