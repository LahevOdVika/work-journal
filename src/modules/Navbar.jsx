import { useState } from "react";

export const Navbar = () => {
  const [state, setState] = useState("closed");

  function handleOpening() {
    if (state === "closed") {
      setState("open");
    } else {
      setState("closed");
    }
  }

  return (
    <>
      <div className="navbar">
        <div className={"navbar-controls"}>
          <a href="" type="button" className="navbar-button">
            <i className="fa-solid fa-house"></i>
          </a>
          <a type="button" className="navbar-button" onClick={handleOpening}>
            <i className="fa-solid fa-bars"></i>
          </a>
        </div>
        <div className={`navbar-content ${state}`}>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                <i className={"fa-solid fa-briefcase"}></i>
                <span>My Work</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                <i className={"fa-solid fa-diagram-project"}></i>
                <span>My Projects</span>
              </a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link">
                <i className="fa-solid fa-address-book"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
