import React from 'react'
import '../header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlaceOfWorship, faTaxi } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerContainer'>
                <div className='headerList'>
                    <div className='headerListItems active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='headerListItems'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className='headerListItems'>
                        <FontAwesomeIcon icon={faPlaceOfWorship} />
                        <span>Attractions</span>
                    </div>
                    <div className='headerListItems'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                <h1 className='headerTitle'>Explore Boundless Adventures with MyGaman <br /> Your Ultimate Tourism Companion</h1>
                <p className="headerDescription">Plan your perfect trip effortlessly.
                    Explore new destinations and create lasting memories.
                    <br />Start your journey with MyGaman today.</p>
                <button className='headerBtn'>Sign in / Register</button>
                <div className='headerSearch'>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span className='headerSearchText'>date to date</span>
                    </div>
                    <div className='headerSearchItem'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span className='headerSearchText'>2 adults 2 children 1 room</span>
                    </div>
                    <div className='headerSearchItem'>
                        <button className='headerBtn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header