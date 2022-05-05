import "./widgetSm.css";
import {Visibility} from "@mui/icons-material";
import React from 'react';

export default function WidgetSm() {
  return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                 <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" alt="" className="widgetSmImg" 
                 />
                 <div className="widgetSmUser">
                   <span className="widgetSmUsername">James Richard</span>
                   <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton">        
                 <Visibility className="widgetSmIcon" />
                 Display
                 </button>
                </li>
                <li className="widgetSmListItem">
                 <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" alt="" className="widgetSmImg" 
                 />
                 <div className="widgetSmUser">
                   <span className="widgetSmUsername">James Richard</span>
                   <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton"> 
                 <Visibility className="widgetSmIcon" />
                 Display
                 </button>
                </li>
                <li className="widgetSmListItem">
                 <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" alt="" className="widgetSmImg" 
                 />
                 <div className="widgetSmUser">
                   <span className="widgetSmUsername">James Richard</span>
                   <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton"> 
                 <Visibility className="widgetSmIcon" />
                 Display
                 </button>
                </li>
                <li className="widgetSmListItem">
                 <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" alt="" className="widgetSmImg" 
                 />
                 <div className="widgetSmUser">
                   <span className="widgetSmUsername">James Richard</span>
                   <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton"> 
                 <Visibility className="widgetSmIcon" />
                  Display
                 </button>
                </li>
                <li className="widgetSmListItem">
                 <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" alt="" className="widgetSmImg" 
                 />
                 <div className="widgetSmUser">
                   <span className="widgetSmUsername">James Richard</span>
                   <span className="widgetSmUserTitle">Software Engineer</span>
                 </div>
                 <button className="widgetSmButton"> 
                 <Visibility className="widgetSmIcon" />
                  Display
                 </button>
                </li>
            </ul>
    </div>
  )
}
