import { CalendarToday, LocationSearching, LocationSearchingOutlined, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import React from 'react'
import "./user.css"

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="usercontainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://www.cdc.gov/cancer/breast/men/images/man-ribbon-1200x630.jpg?_=59339" alt="" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Nick Becker</span>
                        <soan className="userShowUserTitle">Software Engineer</soan>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">nickbecker88</span>
                    </div>   
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">10.04.1996</span>
                    </div>  
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowInfo">
                        <PhoneAndroid className="userShowIcon"/>
                        <span className="userShowInfoTitle">+1 345 864 87</span>
                    </div>  <div className="userShowInfo">
                        <MailOutline className="userShowIcon"/>
                        <span className="userShowInfoTitle">nickbecker88@gmail.com</span>
                    </div>  <div className="userShowInfo">
                        <LocationSearchingOutlined className="userShowIcon"/>
                        <span className="userShowInfoTitle">Chicago</span>
                    </div>  
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username</label>
                            <input type="text" placeholder="nickbecker88" className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder="Nick Becker" className='userUpdateInput'/>
                        </div>
                    </div><div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="nickbecker88@gmail.com" className='userUpdateInput'/>
                        </div>
                    </div><div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder="+1 345 864 87" className='userUpdateInput'/>
                        </div>
                    </div><div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder="Chicago | USA" className='userUpdateInput'/>
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img classname="userUpdateImg" src="https://www.cdc.gov/cancer/breast/men/images/man-ribbon-1200x630.jpg?_=59339" alt="" /> 
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display: "none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
