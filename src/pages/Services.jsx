import React from "react";

function Services() {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <h6 className="mb-2 text-center">What we Offer</h6>
          <h2 className="mb-3 text-center">Our Services</h2>
          <div className="row mt-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3">
                <div className="serv-card">
                  <img src="./images/services/s1.png" alt="" width="50px" />
                  <p className="mt-2 text-center">
                    Microsoft 365 Licensing <br /> & Setup
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3">
                <div className="serv-card">
                  <img src="./images/services/s2.png" alt="" width="50px" />
                  <p className="mt-2 text-center">Migration & Data Transfer</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3">
                <div className="serv-card">
                  <img src="./images/services/s3.png" alt="" width="50px" />
                  <p className="mt-2 text-center">User Training & Support</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3">
                <div className="serv-card">
                  <img src="./images/services/s4.png" alt="" width="50px" />
                  <p className="mt-2 text-center">
                    Ongoing Technical <br />
                    Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
