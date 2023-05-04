import React from 'react';
import "./footer.css";
function Footer(props) {
  return (
    <footer>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;