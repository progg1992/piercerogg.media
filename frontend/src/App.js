import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Projects } from './container';
import { Navbar } from './component/';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;