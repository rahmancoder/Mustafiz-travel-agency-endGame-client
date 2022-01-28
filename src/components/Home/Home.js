import React from 'react';
import AllBlogList from '../AllBlogList/AllBlogList';
import AllBlogPage from '../AllBlogPage/AllBlogPage';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import TravelExperience from '../TravelExperience/TravelExperience';
import TravelList from '../TravelList/TravelList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            {/* <Login></Login> */}
            <TravelExperience></TravelExperience>
            {/* <AllBlogPage></AllBlogPage> */}
            <TravelList></TravelList>
            <AllBlogList></AllBlogList>
            <Footer></Footer>
        </div>
    );
};

export default Home;