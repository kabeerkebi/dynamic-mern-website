import React from 'react';
import '../app.css';
import { useState,useEffect } from 'react';

function About() {
  const [updateabout,setupdateabout] = useState({})
  const [id,setid] = useState()
  useEffect(()=>{
const aboutfunction = async ()=>{
  try {
    const response = await fetch('http://localhost:5555/editabout');
    const data = await response.json()
    setupdateabout(data.response)
setid(data.id[0].image)    
  } catch (error) {
console.log(error);    
  }
}
aboutfunction()



  },[])
console.log(id)
  return (
    <div className='container'>
    
      <div className='row'>
        <div className='col-md-6 mt-5'>
          <h1 className='mt-5 aboutheding'>{updateabout.title} </h1>
          <h5 className='pt-2 pb-4'  style={{color:"#6d1d8e"}}>{updateabout.subtitle} </h5>
          <p>
{updateabout.paragraph}
          </p>
          
        </div>
        <div className='col-md-6'>
          <img src={`http://localhost:5555/${id}`} className='img-fluid' alt='teamwork' />
        </div>
      </div>
    </div>
  );
}

export default About;
