import { useState } from "react";

export const Navbar = () => {
  const [state, setState] = useState("closed");

  /* skipcq */
  function handleOpening() {
    if (state === "closed") {
      setState("open");
    } else {
      setState("closed");
    }
  }

  return (
    <div className="navbar">
      <div className={"navbar-controls"}>
        <a href="/" className="navbar-button">
          <i className="fa-solid fa-house" />
        </a>
        <button type="button" className="navbar-button" onClick={handleOpening}>
          <i className="fa-solid fa-bars" />
        </button>
      </div>
      <div className={`navbar-content ${state}`}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <button className="navbar-link">
              <i className={"fa-solid fa-briefcase"} />
              <span>My Work</span>
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link">
              <i className={"fa-solid fa-diagram-project"} />
              <span>My Projects</span>
            </button>
          </li>
          <li className="navbar-item">
            <button className="navbar-link">
              <i className="fa-solid fa-address-book" />
              <span>Contact</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
