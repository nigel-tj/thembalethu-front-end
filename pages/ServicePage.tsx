// ServicePage.tsx

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { fetchData } from '../utils/sample-data';

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
    <div className="flex">
         {serviceData?.map((service) => (
      <><div className="w-1/2 p-4">
                 <img src={service.image} alt="Service Image" className="rounded-lg" />
             </div><div className="w-1/2 p-4">
                    <h1 className="text-3xl font-bold">{service.name}</h1>
                     <p className="text-gray-600">{service.description}</p>
                 </div></>
       ))}
    </div>
  );
};

export default ServicePage;
