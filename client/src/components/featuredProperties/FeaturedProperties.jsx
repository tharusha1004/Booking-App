import React from 'react'
import '../featuredProperties/FeaturedProperties.css'
import featuredproperty001 from '../../assets/featured properties - 001.jpg'
import featuredproperty002 from '../../assets/featured properties - 002.jpg'
import featuredproperty003 from '../../assets/featured properties - 003.jpg'

const FeaturedProperties = () => {
    return (
        <div className='featuredProperty'>
            <div className="featuredPropertyItem">
                <img src={featuredproperty001} alt="" className="featurePropertyImage" />
                <span className="featuredPropertyName">Heritance Kandalama Hotel</span><br />
                <span className="featuredPropertyCity">Kandalama</span><br />
                <span className="featuredPropertyPrice">Starting from LKR 50,000</span><br />
                <div className="featurePropertyRate">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featuredPropertyItem">
                <img src={featuredproperty002} alt="" className="featurePropertyImage" />
                <span className="featuredPropertyName">Shangri-La Hotel</span><br />
                <span className="featuredPropertyCity">Colombo</span><br />
                <span className="featuredPropertyPrice">Starting from LKR 40,000</span><br />
                <div className="featurePropertyRate">
                    <button>8.3</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="featuredPropertyItem">
                <img src={featuredproperty003} alt="" className="featurePropertyImage" />
                <span className="featuredPropertyName">Jetwing Hotel</span><br />
                <span className="featuredPropertyCity">Hambantota</span><br />
                <span className="featuredPropertyPrice">Starting from LKR 48,000</span><br />
                <div className="featurePropertyRate">
                    <button>7.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>

    )
}

export default FeaturedProperties