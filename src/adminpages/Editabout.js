import React, { useState, useEffect } from "react";
import axios from "axios";

const EditAbout = () => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [itemId, setItemId] = useState(null);
  const [image, setImage] = useState();
  


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:5555/editabout");
        const { response, id } = await res.json();
        setItemId(id[0]._id);
        setTitle(response.title);
        setParagraph(response.paragraph);
        setSubtitle(response.subtitle);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTextChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      handleImageSubmit()
      await axios.put("http://localhost:5555/updateabout", {
        title,
        paragraph,
        subtitle,
        
      });
      alert("Update successful");
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  const handleImageSubmit = async () => {
    if (itemId) {
      const formData = new FormData();
      formData.append("aboutimage", image);

    await  axios
        .put(`http://localhost:5555/changeimage/${itemId}`, formData)
        .then(() => {
          console.log("Image update successful");
        })
        .catch((error) => {
          console.error("Error updating image:", error);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Edit About Page</h1>

      <div className="mb-3">
        <label htmlFor="imageInput" className="form-label">Choose Image</label>
        <input type="file" className="form-control" id="imageInput" onChange={handleImageChange} />
      </div>

      <div className="mb-3">
        <h4>For Editing Title</h4>
        <textarea className="form-control" value={title} onChange={handleTextChange(setTitle)} />
      </div>

      <div className="mb-3">
        <h4>For Editing Subtitle</h4>
        <textarea className="form-control" value={subtitle} onChange={handleTextChange(setSubtitle)} />
      </div>

      <div className="mb-3">
        <h4>For Editing Paragraph</h4>
        <textarea className="form-control" value={paragraph} onChange={handleTextChange(setParagraph)} />
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    
    </div>
  );
};

export default EditAbout;
