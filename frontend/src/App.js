import React from 'react';

import { About, Footer, Header, Skills, Testimonials, Projects } from './container';

const App = () => {
    return (
        <div className='app'>
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