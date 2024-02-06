// Header.js
import React, { useState } from "react";
import { Sidebar, Button } from "../primeReact";
import LogInForm from "../components/Account/LoginForm";
import { Link } from "react-router-dom";

function Header({ closeSidebar }) {
  const [visible, setVisible] = useState(false);

  const handleSidebarClose = () => {
    setVisible(false);
    closeSidebar();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#4c5b72",
        color: "white",
        padding: "5px 50px",
      }}
    >
      <div className="card flex justify-content-left">
        <Sidebar
          visible={visible}
          onHide={handleSidebarClose}
          style={{ background: "#4c5b72", color: "white" }}
        >
          <ul className="nav-ul">
            <li>
              <Link to="/" onClick={handleSidebarClose}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleSidebarClose}>
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleSidebarClose}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleSidebarClose}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleSidebarClose}>
                Logout
              </Link>
            </li>
          </ul>
        </Sidebar>
        <Button
          icon="pi pi-bars"
          severity="secondary"
          text
          style={{ fontSize: "0.75rem", color: "white" }}
          raise
          onClick={() => setVisible(true)}
        />
      </div>
      <LogInForm />
    </div>
  );
}

export default Header;
