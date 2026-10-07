import React from "react";

function Contact() {
  return (
    <>
      <section id="whyus" className="contact">
        <div className="container">
          <div className="con-content">
            <div className="con-left">
              <h3 className="text-white">Get a Free Quote Today</h3>
              <p className="text-white mt-1">
                Let's find the right Microsoft 365 plan for your business.
              </p>
              <ul className="mt-3">
                <li className="mb-2">Expert guidance</li>
                <li className="mb-2">Competitive Pricing</li>
                <li className="mb-2">Quick response</li>
              </ul>
            </div>
            <div className="con-form">
              <div className="con-form-content">
                <div>
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Enter your Name"
                  />
                </div>
                <div>
                  <label>Company Name</label>
                  <input
                    className="form-control"
                    type="text"
                    id="companyName"
                    placeholder="Enter your Company Name"
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    className="form-control"
                    type="number"
                    id="mobile"
                    placeholder="Enter your mobile no."
                  />
                </div>
                <div>
                  <label>Number of Employees</label>
                  <select className="form-select" id="class">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                <div>
                  <label>Number of Employees</label>
                  <select className="form-select" id="class">
                    <option selected>Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
