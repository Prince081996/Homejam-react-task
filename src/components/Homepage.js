import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Upcomingshow from './UpcomingShow'
import Review from './Review'
import CircleSlider from './CircleSlider'
import './styles/Homepage.css'

function Homepage() {
    return (
        <div className="homepage">
            <Header />
            <Banner />
            <div className="custom">
            <CircleSlider />
            </div>
            <div className="artist">
            <Upcomingshow />
            </div>
            <Review />
           <footer className="footer"></footer>
        </div>
    )
}

export default Homepage
