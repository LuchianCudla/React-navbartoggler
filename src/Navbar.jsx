import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    showLinks
      ? (linksContainerRef.current.style.height = `${linksHeight}px`)
      : (linksContainerRef.current.style.height = "0px");
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>
            NavBar <span className="color">Project</span>
          </h2>
          <button className="toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
