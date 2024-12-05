import React, { useState } from "react";
import "./addUser.css";
import { ClipLoader } from "react-spinners";

const AddUser = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="addUser">
      <form action="">
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      {loading && (
        <ClipLoader
          color="#ffffff"
          loading={loading}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      <div className="user">
        <img src="./avatar.png" alt="" />
        <span>John Doe</span>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
