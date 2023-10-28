import React, { useState } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Client from "../components/Client";
import Footer from "../components/Footer";
import ChatPopup from "../components/ChatPopup";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import Head from 'next/head'; // Import Head from next/head

const IndexPage = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  const openChat = () => setChatOpen(true);
  const closeChat = () => setChatOpen(false);

  return (
    <>
      <Head>
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

      <NavBar />
      <Banner />
      <div className="relative">
        <section id="about" className="snap-center">
          <ServicesSection />
        </section>
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#0000FF] via-[#060606] to-[#f90404] rounded-md filter blur-3xl opacity-50 -z-20" />
        <Client />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
