// ServicePage.tsx

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/sample-data';
import NavBar from '../components/NavBar';

interface Service {
    id: number;
    name: string;
    description: string;
    image: string;
  }

const ServicePage: React.FC = () => {
    const [serviceData, setServiceData] = useState<Service[] | null>(null);
  const router = useRouter();

  const handleGetQuote = (serviceId: number) => {
    router.push(`/quote?serviceId=${serviceId}`);
  };

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const data = await fetchData("api/services/services/");
        setServiceData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchServiceData();
  }, []);
  return (
    <><NavBar />
     <div className="mb-8 text-center">
          <span className="block mb-2 text-lg font-semibold text-primary">
            Our Core Services
          </span>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl text-dark">
            What We Offer
          </h2>
          <p className="text-base text-body-color">
            At Thembalethu Solutions, we offer a comprehensive suite of
            electrical services for residential, commercial, and industrial
            clients. Our team of skilled professionals provides high-quality
            workmanship, adheres to industry standards, and delivers reliable
            and sustainable solutions.
          </p>
        </div>
    
    <div className="flex">
      
      {serviceData?.map((service) => (
        <><div className="w-1/2 p-4">
          <img src={service.image} alt="Service Image" className="rounded-lg" />
        </div><div className="w-1/2 p-4">
            <h1 className="text-3xl font-bold">{service.name}</h1>

            <p className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: service.description }}
            ></p>
          </div></>
      ))}
    </div></>
  );
};

export default ServicePage;
