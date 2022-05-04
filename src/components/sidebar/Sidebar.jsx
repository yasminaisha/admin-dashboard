import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, BarChartOutlined, MailOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined, WorkOutline, Report} from "@mui/icons-material";
import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="siderbarMenu">
                 <h3 className="sidebarTitle">Dashboard</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem active">
                         <LineStyle className="sidebarIcon"/>
                         Home
                     </li>
                     <li className="sidebarListItem">
                         <Timeline className="sidebarIcon"/>
                         Analytics
                     </li>
                     <li className="sidebarListItem">
                         <TrendingUp className="sidebarIcon"/>
                         Sales
                     </li>
                 </ul>
            </div>
            <div className="siderbarMenu">
                 <h3 className="sidebarTitle">Quick Menu</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem">
                         <PersonOutline className="sidebarIcon"/>
                         Users
                     </li>
                     <li className="sidebarListItem">
                         <Storefront className="sidebarIcon"/>
                         Products
                     </li>
                     <li className="sidebarListItem">
                         <AttachMoney className="sidebarIcon"/>
                         Transactions
                     </li>
                     <li className="sidebarListItem">
                         <BarChartOutlined className="sidebarIcon"/>
                         Report
                     </li>
                 </ul>
            </div>
            <div className="siderbarMenu">
                 <h3 className="sidebarTitle">Notifications</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem">
                         <MailOutlined className="sidebarIcon"/>
                         Mail
                     </li>
                     <li className="sidebarListItem">
                         <DynamicFeedOutlined className="sidebarIcon"/>
                         Feedback
                     </li>
                     <li className="sidebarListItem">
                         <ChatBubbleOutlineOutlined className="sidebarIcon"/>
                         Messages
                     </li>
                 </ul>
            </div>
            <div className="siderbarMenu">
                 <h3 className="sidebarTitle">Staff</h3>
                 <ul className="sidebarList">
                     <li className="sidebarListItem">
                         <WorkOutline className="sidebarIcon"/>
                         Manage
                     </li>
                     <li className="sidebarListItem">
                         <Timeline className="sidebarIcon"/>
                         Analytics
                     </li>
                     <li className="sidebarListItem">
                         <Report className="sidebarIcon"/>
                         Report
                     </li>
                 </ul>
            </div>
        </div>
    </div> 
  );
}
