import React from 'react'
import PortfolioContent from '../../components/Portfolio/Portfolio'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Portfolio.css';

export default function Portfolio() {
    return (
        <div>
            <Navbar />
            <PortfolioContent/>
            <Footer />
        </div>
    )
}
