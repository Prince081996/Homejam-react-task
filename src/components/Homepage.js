import React from 'react'
import Banner from './Banner'
import Dashboard from './Dashboard'
import Header from './Header'
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
           <footer className="footer"></footer>
        </div>
    )
}

export default Homepage
