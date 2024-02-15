import React from 'react'
import { useState } from 'react';

const Profile = () => {
  
    const [isEditMode, setIsEditMode] = useState(false);
     
    const handleEditModeClick = (e)=>{
         e.preventDefault();
         setIsEditMode(true);
    }

  return (
    <div className="myaccount-right" id="profilecontainer">
    <div className="profilereadmode">
     <div className='profileheader'>
       <h6>Personal Information</h6>
     </div>
     <div className="profileinfo row1">
          <div className="emailidlabel">Email ID</div>
          <div id="emailiddata"></div>
          <div>Password<b>*********</b></div>
     </div>   
    <div className="profileinfo row2">
          <div id="namedata">Name</div>
          <div id="phonenumberdata">Phone Number</div>
    </div>  
    <div className="editprofile" onClick={handleEditModeClick}><a href="">
      Edit Info</a>
    </div> 
    </div>   
    {isEditMode ? (
        <div className="profileeditmode">
          <div className='profileheader'>
          <h6>Personal Information</h6>
          </div>
          <div className="profileinfo row1">
          <div className="emailidlabel">Email ID</div>
          <div id="emailiddata"></div>
            <div>Password<b>*********</b></div>
            <div><a href="">Change password</a></div>
          </div>  
     <div className="profileinfo row2">
          <label>Name</label>
          <input id="namedata" type="text" placeholder="Name"/>
          <label>Phone number</label>
          <input id="phonenumberdata" type="text" placeholder="phonenumber"/>
    </div>
        <button id="profilesave" className="profilesavebtn">Save</button>
        </div>
    ):null}
    </div>
  )
}

export default Profile;