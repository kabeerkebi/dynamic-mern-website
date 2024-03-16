import React, { useEffect, useState } from "react";
import axios from "axios";

const Editcourses = () => {
  const [title, settitle] = useState("");
  const [paragraph, setparagraph] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [image, setimage] = useState();
  const [itemId, setitemId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5555/editcourses");
        const { response, id } = await res.json();
        settitle(response.title);
        setparagraph(response.paragraph);
        setsubtitle(response.subtitle);
        setitemId(id[0]._id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handlesubmit = async () => {
    try {
      await handleImageSubmit();

      await axios.put("http://localhost:5555/updatecourses", {
        title: title,
        subtitle: subtitle,
        paragraph: paragraph,
      });
      alert("Update successful");
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageSubmit = async () => {
    if (itemId) {
      const formData = new FormData();
      formData.append("coursesimage", image);

      try {
        await axios.put(`http://localhost:5555/changeimagecourses/${itemId}`, formData);
        console.log("Image update successful");
      } catch (error) {
        console.error("Error updating image:", error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Edit Courses Page</h1>

      <div className="mb-3">
        <label htmlFor="imageInput" className="form-label">Choose Image</label>
        <input type="file" className="form-control" id="imageInput" onChange={(e) => setimage(e.target.files[0])} />
      </div>

      <div className="mb-3">
        <h4>For Editing Title</h4>
        <textarea
          className="form-control"
          rows="3"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <h4>For Editing Subtitle</h4>
        <textarea
          className="form-control"
          rows="3"
          value={subtitle}
          onChange={(e) => setsubtitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <h4>For Editing Paragraph</h4>
        <textarea
          className="form-control"
          rows="5"
          value={paragraph}
          onChange={(e) => setparagraph(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handlesubmit}>
        Click
      </button>
    </div>
  );
};

export default Editcourses;
