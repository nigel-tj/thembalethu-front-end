// IndexPage.js
import React, { useState } from 'react';
import { IoChatbubbleOutline } from 'react-icons/io5';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Client from '../components/Client';
import Footer from '../components/Footer';
import ChatPopup from '../components/ChatPopup';
import About from '../components/About';

const IndexPage = () => {
    const [isChatOpen, setChatOpen] = useState(false);

    const openChat = () => setChatOpen(true);
    const closeChat = () => setChatOpen(false);

    return (
        <>
            <NavBar />
            <Banner />
            <div className="relative mx-auto">
                <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-[#0000FF] via-[#060606] to-[#f90404] rounded-md filter blur-3xl opacity-50 -z-20" />
                <Client />
            </div>
            <section id="about" className="snap-center">
        <About  />
      </section>
            <Footer />

            {/* Chat Icon/Button 
            <button className="fixed bottom-10 right-10 bg-green-500 text-white border-none p-4 rounded-full text-xl cursor-pointer" onClick={openChat}>
                <IoChatbubbleOutline />
            </button>

            {/* Chat Popup 
            <ChatPopup isOpen={isChatOpen} onClose={closeChat} />
            */}
        </>
    );
};

export default IndexPage;
