import React from 'react'
import "../Player.css";
import Sidebar from '../Components/Sidebar';
import Body from '../Components/Body';
import Footer from '../Components/Footer';

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className="player_body">
        <Sidebar />
        <Body />
      </div>



      <Footer />

    </div>
  )
}

export default Player