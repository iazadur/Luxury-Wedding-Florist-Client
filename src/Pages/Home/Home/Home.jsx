import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TopBanner from '../Banner/TopBanner';
import ClientSpeaks from '../ClientSpeaks/ClientSpeaks';
import Product from '../Product/Product';
import SaleBannerHolder from '../SaleBannerHolder/SaleBannerHolder';
import ShopFeatures from '../ShopFeatures/ShopFeatures';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://boiling-temple-62751.herokuapp.com/products')
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    return (
        <>
            <Navigation />
            <TopBanner />
            <ShopFeatures />
            <Product products={products} />
            <SaleBannerHolder />
            <ClientSpeaks />
            <Footer />

        </>
    );
};

export default Home;
