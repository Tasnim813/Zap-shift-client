import React from 'react';
import Banner from '../Banner/Banner';
import Work from '../Work/Work';
import Service from '../Service/Service';
import Brands from '../Brands/Brands';
import BrandWork from '../BrandWork/BrandWork';
import Reveiws from '../Reveiws/Reveiws';
import Custome from '../Customer/Custome';
import Icon from '../Icon/Icon';
import Faq from '../Faq/Faq';

const reviwsPromise=fetch('/reviews.json').then(res=>res.json())

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Work></Work>
           <Service></Service>
           <Brands></Brands>
           <BrandWork></BrandWork>
           <Custome></Custome>
           <Icon></Icon>
           <Reveiws reviwsPromise={reviwsPromise}></Reveiws>
           <Faq></Faq>
        </div>
    );
};

export default Home;