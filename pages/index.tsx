import React, { useEffect, useState } from "react";

import About from "../components/About";
import Banner from "../components/Banner";
import Client from "../components/Client";
import Footer from "../components/Footer";
import Head from 'next/head';
import { IoChatbubbleOutline } from "react-icons/io5";
import NavBar from "../components/NavBar";
import Script from 'next/script';
import ServicesSection from "../components/ServicesSection";
import { fetchData } from "../utils/sample-data";

//import background_logo from '../assets/Untitled.png'; // Adjust the path






interface AboutData {
  title: string;
  content: string;
  logo: string;
  client: string;
  background_logo: string;
}

const IndexPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  const [aboutData, setAboutData] = useState<AboutData[] | undefined>();

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await fetchData("api/information/about-us/");
        console.log("api data", data);
        setAboutData(data);
      } catch (error) {
        // Handle error
        console.error("Error:", error);
      }
    };

    fetchCarouselData();
  }, []);

  const firstPageInfo =
    Array.isArray(aboutData) && aboutData?.length > 0 ? aboutData[0] : null;


  return (
    <>
      <Head>
        <title>Thembalethu Solutions - Electrical Solutions</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Thembalethu Solutions offers top-quality electrical solutions for homes and businesses. Contact us for all your electrical needs." />
        <meta name="keywords" content="electrical solutions, electrical services, electricians, wiring, electrical projects" />
        <meta name="author" content="Thembalethu Solutions" />

        {/* Open Graph and Twitter Card tags for social sharing */}
        <meta property="og:title" content="Thembalethu Solutions - Electrical Solutions" />
        <meta property="og:description" content="Your trusted partner for electrical solutions. Contact us for all your electrical needs." />
        <meta property="og:image" content="https://ludmilpaulo.pythonanywhere.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ThembalethuSolutions" />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />




      </Head>


      <div className="flex flex-col min-h-screen">
        <div className="hero-section">
          <NavBar />
        </div>

        <div className="flex-grow">


          <div className="container px-5 pt-24 pb-6 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h2 className="text-sm text-[rgba(22,66,143,1)] tracking-widest font-medium mb-1">Who We Are</h2>
              <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-red-600">About Thembalethu Solutions</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Thembalethu Solutions, founded in 2017, is a dynamic and forward-thinking electrical services company based in South Africa. With a strong commitment to excellence and a passion for innovation, Thembalethu Solutions has rapidly emerged as a prominent player in the electrical industry, offering a wide range of services to meet the diverse needs of its clients.</p>
            </div>

          </div>
          <button className="flex mx-auto mb-24 text-white bg-[rgba(22,66,143,1)] border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Our Profile</button>
        </div>

        <div className="container px-5 pt-24 pb-6 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h2 className="text-sm text-[rgba(22,66,143,1)] tracking-widest font-medium mb-1">Our Services</h2>
            <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-red-600">About Thembalethu Solutions</h1>
          </div>
        </div>
        
        <div className="w-full h-auto sm:h-custom">
          <Banner />
        </div>
        <div className="px-2 sm:px-4">
          <Client />
        </div>

      </div>


      <Footer />

    </>
  );
};

export default IndexPage;
