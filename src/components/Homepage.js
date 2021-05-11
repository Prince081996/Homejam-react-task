import React from 'react'
import Dashboard from './Dashboard'
import Header from './Header'
import './styles/Homepage.css'

function Homepage() {
    return (
        <div className="homepage">
            <Header />
            <h1 className="homepage__title">Cari Cari</h1>
            <span className="homepage__description">Live from their sofa to yours.Get closer to your favourite artists,and never miss out.</span>
            <Dashboard />
        </div>
    )
}

export default Homepage
