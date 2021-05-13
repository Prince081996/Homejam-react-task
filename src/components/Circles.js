import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './styles/Circles.css'

function Circles({type, number, content}) {
    return (
      <div className="dashboard">
         {type === "like" ? 
       <div className="slickSlide">
          <div className="outlineCircle">
            <div className="circleWrapper">
              <div className="likes">
                <div className="likeIcon">
                  <FavoriteBorderIcon style={{height:'1.5em',width:'1.5em'}}/>
                </div>
                <span className="dashboard_likes_count"></span>
                <span className="no_of_likes">{number}</span>
                <span className="dailyLikes">{content}</span>
              </div>
              </div>
          </div> 
          </div> :
         <div className="slickSlide">
         <div className="outlineCircle">
           <div className="circleWrapper">
             <div className="likes">
               <img src="images/event.png" className="eventIcon" alt=""/>
               <span className="no_of_likes">{number}</span>
               <span className="dailyLikes">{content}</span>
             </div>
             </div>
         </div> 
         </div>}
        </div>
    );
}

export default Circles
