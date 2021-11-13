import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ClientSpeaks from '../ClientSpeaks/ClientSpeaks';
import Product from '../Product/Product';
import SaleBannerHolder from '../SaleBannerHolder/SaleBannerHolder';
import ShopFeatures from '../ShopFeatures/ShopFeatures';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    return (
        <>
            <Navigation />
            <ShopFeatures />
            <SaleBannerHolder />
            <Product products={products} />
            <ClientSpeaks />
            <Footer />

        </>
    );
};

export default Home;
