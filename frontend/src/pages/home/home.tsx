/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * =====================================================
 *  NAME    : home.tsx
 *  DATE      : 20/09/2025
 *  DATE_MODIFY       : 13/10/2025
 *  DESCRIPTION: PAGE HOME
 * =====================================================
 */

// DEPENDENCIES
import NavBar from "@/components/main/NavBar";
import Content from "./modules/Content";
import backgroundImage from "/img/bg-web.jpg";
import "@/assets/css/fonts.css";
import "@/assets/css/animationsHome.css";
import Footer from "@/components/main/Footer";

// HOME PAGE
const Home = () => {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />
      {/* MAIN CONTENT */}
      <div className="relative flex flex-col text-white max-w-screen dark:bg-black/50">
        {/* BACKGROUND */}
        <span className="fixed top-0 left-0 w-full h-full -z-10">
          <img
            alt="Background"
            className="w-full h-full object-cover"
            src={backgroundImage}
          />
          <span className="absolute top-0 left-0 w-full h-full bg-black/40"></span>
        </span>
        {/* WELCOME CONTENT */}
        <Content />
      </div>
      {/* FOOTER */}
      <Footer />
    </>
  );
};
export default Home;
