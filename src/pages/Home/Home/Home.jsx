import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Revewis from '../Revewis/Revewis';
import Card from '../Card/Card';
import ServiceCard from '../ServiceCard/ServiceCard';
import ParcelCard from '../ParcelCard/ParcelCard';
import Stisfiction from '../Stisfication/Stisfiction';
import Faq from '../Faq/Faq';

const reveiwsPromise=fetch('./reviews.json').then(res=>res.json())

const Home = () => {
    return (
        <div>
  
        <Banner></Banner>
        <Card></Card>
        <ServiceCard></ServiceCard>
        <Brands></Brands>
        <ParcelCard></ParcelCard>
        <Stisfiction></Stisfiction>
        <Revewis reveiwsPromise={reveiwsPromise}></Revewis>
       <Faq></Faq>
        </div>
    );
};

export default Home;