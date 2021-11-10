import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ClientSpeaks from '../ClientSpeaks/ClientSpeaks';
import Product from '../Product/Product';
import SaleBannerHolder from '../SaleBannerHolder/SaleBannerHolder';

const Home = () => {
    return (
        <>
            <Navigation />
            <SaleBannerHolder />
            <Product />
            <ClientSpeaks />
            <Footer />

        </>
    );
};

export default Home;
