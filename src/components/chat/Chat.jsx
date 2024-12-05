import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { closeChat } from "../store/store.js";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const chatArea = useSelector((state) => state.chat.chatArea);

  const endRef = useRef(null);

  useEffect(() => {
    if (chatArea) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatArea, text]);

  const handleEmoji = (emoji) => {
    setText((prev) => prev + emoji.emoji); // Append emoji to text
    setOpen(false);
  };

  const handleBack = () => {
    dispatch(closeChat()); // Close the chat area
  };

  return (
    <>
      {chatArea ? (
        <div className="chat">
          <div className="top">
            <div className="user">
              <FaChevronLeft className="back" onClick={handleBack} />
              <img src="./avatar.png" alt="" />
              <div className="texts">
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="icons">
              <img src="./phone.png" alt="" />
              <img src="./video.png" alt="" />
              <img src="./info.png" alt="" />
            </div>
          </div>
          <div className="center">
            <div className="message">
              <img src="./avatar.png" alt="" />
              <div className="texts">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="message own">
              <div className="texts">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="message">
              <img src="./avatar.png" alt="" />
              <div className="texts">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="message own">
              <div className="texts">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <span>1 min ago</span>
              </div>
            </div>
            <div className="message">
              <img src="./avatar.png" alt="" />
              <div className="texts">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <span>1 min ago</span>
              </div>
            </div>
            <div ref={endRef} className="message own">
              <div className="texts">
                <img
                  src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <span>1 min ago</span>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="icons">
              <img src="./img.png" alt="" />
              <img src="./camera.png" alt="" />
              <img src="./mic.png" alt="" />
            </div>
            <input
              type="text"
              placeholder="Type a message..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <div className="emoji">
              <img src="./emoji.png" alt="" onClick={() => setOpen(!open)} />
              <div className="picker">
                <EmojiPicker open={open} onEmojiClick={handleEmoji} />
              </div>
            </div>
            <button className="sendButton">Send</button>
          </div>
        </div>
      ) : (
        <div className="nochat">
          <span>Select Chat</span>
        </div>
      )}
    </>
  );
};

export default Chat;
