import React from 'react'
import '../home/Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by Property Type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes Guests Love</h1>
                <FeaturedProperties />
            </div>
        </div>
    )
}

export default Home