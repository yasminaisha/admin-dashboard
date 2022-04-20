import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
           <div className="topLeft">
               <span className="logo">yasminadmin</span>
           </div>
           <div className="topRight">
               <div className="topbarIconContainer">
               <NotificationsNone/>
               <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
               <Language/>
               <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
               <Settings/>
               </div>
               <img src="https://previews.123rf.com/images/sbhorse/sbhorse1808/sbhorse180800312/108312602-wuhan-city-scenery.jpg" alt="" className="topAvatar" />
           </div>

        </div>
        </div>
  )
}

