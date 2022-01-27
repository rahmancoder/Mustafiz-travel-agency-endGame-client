import React from 'react';
import AllBlogPage from '../AllBlogPage/AllBlogPage';
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
            {/* <Login></Login> */}
            <TravelExperience></TravelExperience>
            {/* <AllBlogPage></AllBlogPage> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;