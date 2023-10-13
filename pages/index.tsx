import Link from 'next/link'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react';
import { fetchData } from '../utils/sample-data';
import NavBar from '../components/NavBar';

const IndexPage = () => {

  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const data = await fetchData('carousel/');
        setCarouselData(data);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    };

    fetchCarouselData();
  }, []);
  return<NavBar />
  
}

export default IndexPage
