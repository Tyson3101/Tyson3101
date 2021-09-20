import React from "react";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>
        Tyson3101 <span>Tyson Fernee</span>
      </h1>
      <ul>
        <li className="link">
          <a
            href="/projects"
            style={{
              color: window.location.pathname.includes("/projects")
                ? "rgb(189, 6, 189)"
                : "purple",
            }}
          >
            Projects
          </a>
        </li>
        <li className="link">
          <a
            href="/about"
            style={{
              color: window.location.pathname.includes("/about")
                ? "rgb(189, 6, 189)"
                : "purple",
            }}
          >
            About
          </a>
        </li>
        <li className="link">
          <a
            href="/social"
            style={{
              color: window.location.pathname.includes("/social")
                ? "rgb(189, 6, 189)"
                : "purple",
            }}
          >
            Socials
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
