import React from "react";
// import { useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const AboutUs = () => {
  // const navigate = useNavigate()
  return (
    <Layout>
      <div className="container mt-3">
        <div className="row">
          <h1>OUR TEAM</h1>
          <div className="col-md-4">
            <div className="Imagecontainer">
              <img
                src="./assets/krishna.png"
                alt="Rent"
                style={{ width: "100%", height: "70%", borderRadius: "10px" }}
              />
              <div>
                <h2>SDE: Krishna Kumar</h2>
                <span>
                  Portfolio Link:
                  <button
                    style={{
                      backgroundColor: "yellow",
                      borderRadius: "25px",
                      border: "none",
                      background: "rgb(34,193,195)",
                    }}
                  >
                    <a
                      href="https://3kportfolio.netlify.app/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Click Here
                    </a>
                  </button>
                </span>
              </div>
              {/* <button
              className="btn"
              onClick={() => navigate("/category/rent")}
            >
              Name: MOhd ANsar Mansoorie<br></br>
              Portfolio
            </button> */}
            </div>
          </div>
          {/* <div className="col-md-4 ml-4">
            <div className="Imagecontainer">
              <img src="./assets/wimg.png" alt="Im" style={{width: "70%"}} />
            </div>
        </div> */}
          <div className="col-md-4">
            <div className="Imagecontainer">
              <img
                src="./assets/asr.jpeg"
                alt="Rent"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
              <div>
                <h2>SDE: Mohd. Ansar</h2>
                <span>
                  Portfolio Link:
                  <button
                    style={{
                      backgroundColor: "yellow",
                      borderRadius: "25px",
                      border: "none",
                      background: "rgb(34,193,195)",
                    }}
                  >
                    <a
                      href="https://myportfolioansar.netlify.app/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Click Here
                    </a>
                  </button>
                </span>
              </div>
              {/* <button
              className="btn"
              onClick={() => navigate("/category/sale")}
            >
              TO SALE
            </button> */}
            </div>
          </div>

          <div className="col-md-4">
            <div className="Imagecontainer">
              <img
                src="./assets/ritesh.png"
                alt="Rent"
                style={{ width: "100%", height: "40%", borderRadius: "10px" }}
              />
              <div>
                <h2>SDE: Retesh Kr. Sharma</h2>
                <span>
                  GitHub Link:
                  <button
                    style={{
                      backgroundColor: "yellow",
                      borderRadius: "25px",
                      border: "none",
                      background: "rgb(34,193,195)",
                    }}
                  >
                    <a
                      href="https://github.com/rksharma7071"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Click Here
                    </a>
                  </button>
                </span>
              </div>
              {/* <button
              className="btn"
              onClick={() => navigate("/category/sale")}
            >
              TO SALE
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
