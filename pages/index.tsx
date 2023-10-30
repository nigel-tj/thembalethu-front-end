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
        {/* Facebook Messenger Chat Plugin */}
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "600949946906137");
              chatbox.setAttribute("attribution", "biz_inbox");
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml: true,
                  version: 'v18.0',
                });
              };
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              })(document, 'script', 'facebook-jssdk');
            `,
          }}
        />
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
