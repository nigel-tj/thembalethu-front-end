import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/sample-data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Service {
  id: number;
  name: string;
  description: string;
  image: string; // Assuming you have an image URL in your API response
}

function ServicesSection() {
  const [serviceData, setServiceData] = useState<Service[] | null>(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const data = await fetchData("api/services/services/");
        console.log("api data", data);
        setServiceData(data);
      } catch (error) {
        // Handle error
        console.error("Error:", error);
      }
    };

    fetchServiceData();
  }, []);

  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Core Services
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                At Thembalethu Solutions, we are proud to offer a comprehensive
                suite of electrical services that cater to residential,
                commercial, and industrial clients. Our team of highly skilled
                and certified professionals is dedicated to providing the
                highest quality workmanship, adhering to industry standards, and
                delivering solutions that are not only reliable but also
                sustainable. Our core services include:
              </p>
            </div>
          </div>
        </div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33}
          useKeyboardArrows={true}
        >
          {serviceData?.map((service) => (
            <div key={service.id}>
              <div className="w-full px-4">
                <div
                  className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8"
                  style={{
                    background: `url(${service.image})`,
                    backgroundSize: "cover",
                  }}
                >
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    {service.name}
                  </h4>
                  <p className="text-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default ServicesSection;
