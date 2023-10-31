"use client ";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchData } from "../utils/sample-data";
import Team from "./Team";

interface AboutData {
  title: string;
  content: string;
  logo: string;
  client: string;
  background_logo: string;
}

function About() {
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
      style={{
        background: `url(${firstPageInfo?.background_logo})`,
        backgroundSize: "cover",
      }}
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={firstPageInfo?.logo}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
        alt="About Us"
      ></motion.img>

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">{firstPageInfo?.title}</h4>
        <p
          className="text-lg text-Black"
          dangerouslySetInnerHTML={{ __html: firstPageInfo?.content }} />
      </div>
    </motion.div>
    <Team />
    </>
  );
}

export default About;
