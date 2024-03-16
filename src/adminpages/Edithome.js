import React, { useState, useEffect } from "react";
import axios from "axios";

const Edithome = () => {
  const [title, settitle] = useState("");
  const [para, setpara] = useState("");
  const [subtitle, setsubtitle] = useState("");
  const [title2, settitle2] = useState("");
  const [para2, setpara2] = useState("");
  const [skill1, setskill1] = useState("");
  const [skill2, setskill2] = useState("");
  const [skill3, setskill3] = useState("");
  const [skill4, setskill4] = useState("");
  const [skill5, setskill5] = useState("");
  const [skill6, setskill6] = useState("");
  const [image1, setimage1] = useState();
  const [image2, setimage2] = useState();
  const [itemId, setItemId] = useState(null);
  const [itemId2, setItemId2] = useState(null);



  useEffect(() => {
    const fecthdata = async () => {
      const res = await fetch("http://localhost:5555/edithome");
      const { response, id ,idd} = await res.json();
      settitle(response.title);
      setpara(response.paragraph);
      setsubtitle(response.subtitle);
      settitle2(response.title2);
      setpara2(response.paragraph2);
      setskill1(response.skill1);
      setskill2(response.skill2);
      setskill3(response.skill3);
      setskill4(response.skill4);
      setskill5(response.skill5);
      setskill6(response.skill6);
      setItemId(id[0]._id)
      setItemId2(idd[0]._id)

    };
    fecthdata();
  }, []);
  console.log(itemId2);
  const handlesubmit = () => {
    fileupload2()
    fileupload()
    axios.put("http://localhost:5555/updatehome", {
      title: title,
      subtitle: subtitle,
      paragraph: para,
      paragraph2: para2,
      title2: title2,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
      skill4: skill4,
      skill5: skill5,
      skill6: skill6,
    });
    alert("update sucess");
  };

  const fileupload = async () => {
  
    if (itemId) {
      const formData = new FormData();
      formData.append("homeimage", image1);

      await axios
        .put(`http://localhost:5555/changehome/${itemId}`, formData)
        .then(() => {
          console.log("Image update successful");
        })
        .catch((error) => {
          console.error("Error updating image:", error);
        });
    }
  };




  const fileupload2 = async () => {
    if (itemId2) {
      const formData = new FormData();
      formData.append("homeimage", image2);

      await axios
        .put(`http://localhost:5555/changehome2/${itemId2}`, formData)
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
    <h1 className="mb-4">Edit Home Page</h1>

    <div className="row mb-3">
      <div className="col">
        <label htmlFor="image1" className="form-label">Choose Main Image </label>
        <input type="file" className="form-control" id="image1" onChange={(e) => setimage2(e.target.files[0])} />
      </div>
      <div className="col">
        <label htmlFor="image2" className="form-label">Choose Secound Image </label>
        <input type="file" className="form-control" id="image2" onChange={(e) => setimage1(e.target.files[0])} />
      </div>
    </div>

    
    <div className="mb-3">
      <h4>For Editing Title</h4>
      <textarea
        className="form-control"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
    </div>



<div className="mb-3">
  <h4>For Editing skill1</h4>
  <textarea
    className="form-control"
    value={skill1}
    onChange={(e) => setskill1(e.target.value)}
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
    value={para}
    onChange={(e) => setpara(e.target.value)}
  />
</div>

<div className="mb-3">
  <h4>For Editing Title 2</h4>
  <textarea
    className="form-control"
    rows="3"
    value={title2}
    onChange={(e) => settitle2(e.target.value)}
  />
</div>

<div className="mb-3">
  <h4>For Editing Paragraph 2</h4>
  <textarea
    className="form-control"
    rows="5"
    value={para2}
    onChange={(e) => setpara2(e.target.value)}
  />
</div>







<div className="mb-3">
  <h4>For Editing skill2</h4>
  <textarea
    className="form-control"
    value={skill2}
    onChange={(e) => setskill2(e.target.value)}
  />
</div>

<div className="mb-3">
  <h4>For Editing skill3</h4>
  <textarea
    className="form-control"
    value={skill3}
    onChange={(e) => setskill3(e.target.value)}
  />
</div>

<div className="mb-3">
  <h4>For Editing skill4</h4>
  <textarea
    className="form-control"
    value={skill4}
    onChange={(e) => setskill4(e.target.value)}
  />
</div>

<div className="mb-3">
  <h4>For Editing skill5</h4>
  <textarea
    className="form-control"
    value={skill5}
    onChange={(e) => setskill5(e.target.value)}
  />
</div>

<div className="mb-3">
  <h4>For Editing skill6</h4>
  <textarea
    className="form-control"
    value={skill6}
    onChange={(e) => setskill6(e.target.value)}
  />
</div>


    <button className="btn btn-primary" onClick={handlesubmit}>
      Click
    </button>
  </div>
  );
};

export default Edithome;
















