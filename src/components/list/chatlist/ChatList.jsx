import React, { useState } from "react";
import "./chatlist.css";
import AddUser from "../../addUser/AddUser";
import { openChat } from "../../store/store";
import { useDispatch } from "react-redux";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openChat()); // Open the chat area
  };

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="Add Img"
          className="add"
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      <div onClick={handleClick} className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div onClick={handleClick} className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div onClick={handleClick} className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>
      </div>

      {/* Conditionally render AddUser */}
      {addMode && (
        <div className="overlay">
          <AddUser />
        </div>
      )}
    </div>
  );
};

export default ChatList;
