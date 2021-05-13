import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import artistData from './Dummydata/CelebrityDummydata'
import './styles/UpcomingShow.css'

function Upcomingshow() {
    return (
        <div className="upcomingShows">
          <div className="heading">
            <span>Upcoming Shows</span>
          </div>
          <div className="mobileView"> 
          {artistData.map(artist => 
          <div key={artist.artistName} className="artists">
             <div className="upcomingShow">
              <img src={artist.image} alt="profileImage" />
              {artist.artistType === "Bollywood" ?   <span key={artist.artistName} className="bollywood">{artist.artistType}</span> :  <span className="folk">{artist.artistType}</span> }
                <span className="name">{artist.artistName}</span>
                <span className="moreInfo">More Info</span>
                <ArrowForwardIcon className="arrow" /> 
                </div>  
          </div>
          )} 
          </div>       
        </div>
    )
}

export default Upcomingshow
