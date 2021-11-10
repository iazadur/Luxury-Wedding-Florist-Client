import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ClientSpeaks from '../ClientSpeaks/ClientSpeaks';

const Home = () => {
    return (
        <>
            <Navigation />
            <ClientSpeaks />

            <Footer />

        </>
    );
};

export default Home;
