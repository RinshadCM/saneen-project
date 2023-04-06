import Navbar from "./Navbar";
import React from "react";

function Notification() {
  return (
    <div>
      <div className="container">
        <h1 className="heading">Notifications</h1>
      </div>
      <footer className="footer">
        <div className="container">
          <Navbar/>
        </div>
      </footer>
    </div>
  );
}

export default Notification;