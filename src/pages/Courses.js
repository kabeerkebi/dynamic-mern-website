//  MUST THIS NOT COURSES THIS HOME PAGE

import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.css"; // Import FontAwesome CSS here
import "../app.css";
import couresImage from "./courses.webp";
import IMgtwo from "./mainhome.png";

function Courses() {
  const [home, sethome] = useState({}); 
  const[ id,setid] = useState()
  const[ idd,setidd] = useState()

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:5555/edithome");
        const data = await response.json();
        sethome(data.response);
       setid(data.id[0].image)
       setidd(data.idd[0].image)

      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  console.log(idd);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className="course-div1 mt-5">
            <h1 className="stackcenter">{home.title}</h1>

            <div className="knowmore">
              <h6 className="mt-2 toknowmore">{home.subtitle} </h6>
              <a
                className="btn btn-primary btn-courses"
                href="https://www.stackcentre.in/index.html"
              >
                click
              </a>
            </div>

            <p className="mt-5 homep1 ">{home.paragraph}</p>
          </div>
        </div>

        <div className="col-md-6">
          <img src={`http://localhost:5555/${idd}`} alt="oneBoys" className="img-fluid" />
        </div>
      </div>

      {/* section two */}
      <div className="row">
        <div className="col-4">
          <img src={`http://localhost:5555/${id}`} alt="cerficate" className="img-fluid" />
        </div>
        <div className="col-7">
          <h1 className="aboutheding">{home.title2}</h1>
          <p className="homep1"> {home.paragraph2} </p>

          <div className="row mt-3">
            <div className="col-md-6">
              <p className="mt-3">
                <i className="fas fa-arrow-right pe-3"></i> {home.skill1}{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p className="mt-3">
                <i className="fas fa-arrow-right pe-3"></i> {home.skill1}{" "}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p className="mt-3">
                <i className="fas fa-arrow-right pe-3"></i> {home.skill3}{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p className="mt-3">
                <i className="fas fa-arrow-right pe-3"></i> {home.skill4}{" "}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <p className="mt-3">
                <i className="fas fa-arrow-right pe-3"></i> {home.skill5}{" "}
              </p>
            </div>
            <div className="col-md-6">
              <p className="mt-3">
                <i className="fas fa-arrow-right pe-3"></i> {home.skill6}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
