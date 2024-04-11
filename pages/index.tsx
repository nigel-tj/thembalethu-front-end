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
        <div className="flex-grow"
         
        >
          <NavBar />
      
          <div className="w-full h-auto sm:h-custom">
            <Banner />
          </div>
          <div className="px-2 sm:px-4">
            <Client />
          </div>
{/**
 * 
  <div className="relative">
       
            <ServicesSection />


          </div>
 * 
 */}
         

          
        </div>
      </div>
    
      <Footer />

    
    </>
  );
};

export default IndexPage;
