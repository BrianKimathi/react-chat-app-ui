import React, { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [window, setWindow] = useState("login");

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleWindow = (e) => {
    setWindow(e.target.id);
    print;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("Login success!");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    toast.error("Register Failed");
  };

  return (
    <div className="login">
      <div className="windowTab">
        <h2
          id="login"
          style={
            window === "login"
              ? { borderBottom: "4px solid #5183fe" }
              : { borderBottom: "none" }
          }
          onClick={handleWindow}
        >
          Login
        </h2>
        <h2
          id="register"
          style={
            window === "register"
              ? { borderBottom: "4px solid #5183fe" }
              : { borderBottom: "none" }
          }
          onClick={handleWindow}
        >
          Register
        </h2>
      </div>
      <div className="windowArea">
        {window === "login" ? (
          <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin} action="">
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <button>Sign In</button>
            </form>
          </div>
        ) : (
          <div className="item">
            <h2>Create an account,</h2>
            <form onSubmit={handleRegister} action="">
              <label htmlFor="file">
                <img src={avatar.url || "./avatar.png"} alt="" />
                <p>Upload an image</p>
              </label>
              <input
                type="file"
                id="file"
                name="file"
                style={{ display: "none" }}
                onChange={handleAvatar}
              />
              <input type="text" placeholder="Username" name="username" />
              <input type="email" placeholder="Email" name="email" />
              <input type="password" placeholder="Password" name="password" />
              <button>Sign Up</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
