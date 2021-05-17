import React from 'react'
import './styles/Circles.css'

function Circles({ count }) {
    return (
      <div className="dashboard">
        <div className="slickSlide">
         <div className="outlineCircle">
           <div className="circleWrapper">
             <div className="likes">
               <img src="images/event.png" className="eventIcon" alt=""/>
               <span className="event">{count}</span>
               <span className="dailyLikes">Online Events</span>
             </div>
             </div>
         </div> 
         </div>
        </div>
    )
}
export default Circles
