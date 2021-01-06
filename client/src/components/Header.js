import React, {useState} from 'react';
import Avatar from "react-avatar";

const Header = () => {
  const [username] = useState("Test User");
  return (
    <header className="header">
      <h2 className="title">Github Job Search</h2>
      <ul className="menu">
        <li className="menu-links">Jobs</li>
        <li className="menu-links">Companies</li>
        <li className="menu-links">Post a Job</li>
        <li className="menu-links">Resume Search</li>
        <li className="menu-links">Pricing</li>
      </ul>
      <Avatar className="user" name={username} size="50" round={true} color="#334680"/>
    </header>
  );
};

export default Header;
