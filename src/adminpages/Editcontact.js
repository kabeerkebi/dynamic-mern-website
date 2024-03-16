import React, { useState, useEffect } from "react";
import axios from "axios";

const Editcontact = () => {
  const [res, setres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5555/getcontactdata");
        const data = await response.json();
        setres(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5555/delete/${id}`)
      .then(() => {
        // If deletion is successful, refresh the data
        refreshData();
        alert("The data is deleted.");
      })
      .catch((error) => console.log(error));
  };

  const refreshData = () => {
    // Fetch updated data after deletion
    axios.get("http://localhost:5555/getcontactdata")
      .then((response) => setres(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h2>Inquiry Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {res.map((data) => (
            <tr key={data._id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.message}</td>
              <td>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Editcontact;
