import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './styles/Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="likes">
                <FavoriteBorderIcon className="likeIcon"/>
                <span className="dashboard_likes_count"></span>
                <span>456</span>
                <span>Likes everyday</span>
            </div>
            <div className="onlineEvents">
                <img style={{height:'26px',width:'24px'}} src="images/event.png" alt=""/>
                <span>745</span>
                <span>Online events</span>
            </div>
        </div>
    )
}

export default Dashboard
