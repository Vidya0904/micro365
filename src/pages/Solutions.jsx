import React from "react";

function Solutions() {
  return (
    <>
      <section id="solutions" className="solutions">
        <div className="container">
          <div className="sol-content">
            <h6 className="mb-2">Microsoft 365 Solutions</h6>
            <h2 className="mb-3">Everything Your Business Needs</h2>
            <p>
              A complete suite of productivity tools to help your team work
              smarter, <br />
              communicate better and achieve more.
            </p>

            <div className="row mt-5">
              <div className="col-12 col-md-4 col-lg-2">
                <div className="p-2">
                  <div className="sol-card">
                    <img
                      src="./images/solutions/Outlook.png"
                      alt="outlook"
                      width="60px"
                    />
                    <h4>Outlook</h4>
                    <p>
                      Professional email <br />& calendar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <div className="p-2">
                  <div className="sol-card">
                    <img
                      src="./images/solutions/Teams.png"
                      alt="Teams"
                      width="60px"
                    />
                    <h4>Teams</h4>
                    <p>
                      Chats, meeting &<br />
                      collaboration
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <div className="p-2">
                  <div className="sol-card">
                    <img
                      src="./images/solutions/Word.png"
                      alt="Word"
                      width="60px"
                    />
                    <h4>Word</h4>
                    <p>
                      Create & edit <br /> documents
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <div className="p-2">
                  <div className="sol-card">
                    <img
                      src="./images/solutions/Excel.png"
                      alt="Excel"
                      width="60px"
                    />
                    <h4>Excel</h4>
                    <p>
                      Analyse & manage <br /> data
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <div className="p-2">
                  <div className="sol-card">
                    <img
                      src="./images/solutions/PowerPoint.png"
                      alt="PowerPoint"
                      width="60px"
                    />
                    <h4>PowerPoint</h4>
                    <p>
                      Create running
                      <br />
                      presentation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-2">
                <div className="p-2">
                  <div className="sol-card">
                    <img
                      src="./images/solutions/OneDrive.png"
                      alt="OneDrive"
                      width="60px"
                    />
                    <h4>OneDrive</h4>
                    <p>
                      Secure cloude <br />
                      storage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Solutions;
