import React from "react";
import "./detail.css";


const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
          distinctio sunt modi sit, atque doloremque est aliquam nobis incidunt
          vitae voluptate voluptates, similique alias. Incidunt, in. Natus ipsam
          numquam rem?
        </p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Photo"
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download Icon" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Photo"
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download Icon" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
