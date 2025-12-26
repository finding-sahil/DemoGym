import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Offer from '../components/Offer';
import Testimonial from '../components/Testimonial';
import About from '../components/About';
import Social from '../components/Social';
import Classes from '../components/Classes';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <About />
            <Services />
            <Social />
            <Classes />
            <Offer />
            <Testimonial />
        </main>
    );
};

export default Home;
