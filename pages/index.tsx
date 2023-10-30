"use client ";
import React, { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Client from "../components/Client";
import Footer from "../components/Footer";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import Head from 'next/head';
import ErrorBoundary from "./ErrorBoundary";
//import ErrorBoundary from "next/dist/client/components/error-boundary";


const IndexPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  return (
    <>
      <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       

      
      </Head>
      <ErrorBoundary>

      <NavBar />
      <Banner />
     
      <Footer />
      </ErrorBoundary>
    </>
  );
};

export default IndexPage;
