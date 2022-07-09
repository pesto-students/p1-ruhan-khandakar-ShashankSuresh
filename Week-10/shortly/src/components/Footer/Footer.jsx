import { Link } from "react-router-dom";

import Image from "components/Common/Image";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <Image src="/logo192.png" alt="shortly" />
        <p>
          Shortly Pvt Ltd.
          <br />
          Providing since 1990
        </p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="/about-us" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/jobs" className="link link-hover">
          Jobs
        </Link>
        <Link to="/press" className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="/terms" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/privacy-policy" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/cookie-policy" className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
