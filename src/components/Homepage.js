import React from 'react'
import Banner from './Banner'
import Dashboard from './Dashboard'
import Header from './Header'
import Reviews from './Reviews'
import Upcomingshow from './UpcomingShow'
import './styles/Homepage.css'
import Review from './Review'

function Homepage() {
    return (
        <div className="homepage">
            <Header />
            <Banner />
            <div className="middle">
            <Dashboard />
            </div>
            <div className="artist">
            <Upcomingshow />
            </div>
            <Review />
           <footer style={{height:"150px"}}></footer>
        </div>
    )
}

export default Homepage
