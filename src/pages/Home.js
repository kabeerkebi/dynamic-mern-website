// THIS NOT HOME PAGE THIS COURSES PAGE

import React from "react";
import "../app.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useState, useEffect } from "react";

function Home() {
  const [courses, setcourses] = useState({});
  const [images,setimages] = useState();
  useEffect(() => {
    const fectfuction = async () => {
      try {
        const fetchdata = await fetch("http://localhost:5555/editcourses");
        const { response, id } = await fetchdata.json();
        setcourses(response)
        setimages(id[0].image)
      } catch (error) {
        console.log(`your fecth methos is errore ${error}`);
      }
    };
    fectfuction()
  }, []);
  console.log(images);
  return (
    <div className="homedivmain row m-0">
      <div className="homediv col-6 p-3 ">
        <div className=" mt-5">
          <div className="homedivinner mt-5 ">
            <h1 className="bestdata">
             {courses.title}
            </h1>
            <br />
            <h5 className="technolab">{courses.subtitle}</h5>
            <br />
            <div className="homesmalldiv">
              <p>
              {courses.paragraph}
              </p>
              <Link to="/contact">
                <button className="btn btn-primary">Equiry</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="homediv1 col-6">
        <img src={`http://localhost:5555/${images}`} alt="Beautiful landscape" className="img-fluid" />
      </div>
    </div>
  );
}

export default Home;
