import React from 'react'
import Circles from './Circles'
import circleData from "./Dummydata/Circledata"
import './styles/Dashboard.css'

function Dashboard() {
    return (
        <div className="circles">
            {circleData.map((c) => c.type === "like" ?
            <Circles type={c.type} number={c.number_of_likes} content={c.dailyLikes} /> : 
            <Circles type={c.type} number={c.number_of_events} content={c.onlineEvents} />
            )}
        </div>
    )
}

export default Dashboard
