import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet className='min-h-[calc(100vh-425px)]' />
            <Footer />
            <Toaster />
        </div>
    );
};

export default Root;