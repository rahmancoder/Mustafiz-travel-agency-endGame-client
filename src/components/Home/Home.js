import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import TravelExperience from '../TravelExperience/TravelExperience';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Login></Login>
            <TravelExperience></TravelExperience>
            <Footer></Footer>
        </div>
    );
};

export default Home;