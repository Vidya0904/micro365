import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="container">
          <div className="footer-content">
            <a className="d-flex align-items-center" href="#home">
              <img src="./images/logo.png" alt="Logo" width="50" height="50" />
              <div className="logo-w ms-2">
                <h3 className="mb-0">CloudPro Solutions</h3>
                <h6 className="mb-0">Microsoft 365 distributor</h6>
              </div>
            </a>
            <div className="footer-r">
              <div className="footer-contact">
                <div>
                  <h4 className="mb-2">Quick Links</h4>
                  <ul className="quick-links">
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#solutions">Solutions</a>
                    </li>
                    <li>
                      <a href="#businessimpact">Business Impact</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#whyus">Why Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-contact">
                <div>
                  <h4 className="mb-2">Contact Us</h4>
                  <ul>
                    <li>+91 8976564323</li>
                    <li>demo@demo.com</li>
                    <li>Maharashtra</li>
                  </ul>
                  <ul className="footer-social d-flex  gap-2">
                    <li>
                      <i className="fa-brands fa-facebook"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-square-instagram"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                      <i className="fa-brands fa-youtube"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
