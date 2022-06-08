import React, { useEffect } from "react";

const SocialNetworks = () => {
  useEffect(() => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        icon.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      icon.addEventListener("mouseleave", (e) => (icon.style.transform = ""));
    });
  }, []);

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/idress-benchellali-42a61523a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
        </a>
        <a
          href="https://www.github.com/idress-b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-github"></i>
          </li>
        </a>
        <a
          href="https://codepen.io/idress-benchellali"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fa-brands fa-codepen"></i>
          </li>
        </a>
        <a
          href="mailto:idress.benchellali@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fa-solid fa-envelope"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetworks;
