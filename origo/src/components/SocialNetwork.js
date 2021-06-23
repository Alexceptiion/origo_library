import React from "react";

export default function SocialNetwork() {

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com"
          target="blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>

        <a
          href="https://www.twitter.com"
          target="blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>

        <a
          href="https://www.instagram.com"
          target="blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>

        <a
          href="https://www.youtube.com"
          target="blank"
          rel="noopener noreferrer"
          className="hover"
        >
          <li>
            <i className="fab fa-youtube"></i>
          </li>
        </a>
      </ul>
    </div>
  );
}
