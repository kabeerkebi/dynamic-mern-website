import React,{useState} from 'react';
import "../app.css";
import contactImg from "./contact.png";
import axios from "axios";

function Contact() {
  const [name,setName] = useState("")
  const [email,setemail] = useState("")
  const[message,setmessage] = useState("")
  const Submit = ()=>{
const data = {
  name,
  email,
  message
}
axios.put("http://localhost:5555/updatecontact",data )
.then(()=>{
  alert("thanks for enquire")
  

})
.catch((er)=>console.log(er))

  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-6 mt-5">
          <img src={contactImg} alt="boy" className='img-fluid w-75 mt-5 ml-5' />
          <h1 className='aboutheding'>Explore our welcoming space and discover the warmth of our community.</h1>
        </div>

        <div className="col-6">
          <h2 className='aboutheding'>Contact Information</h2>
          <p>Feel free to reach out to us!</p>

          <form action='' method='post'>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className="form-control border-2" onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="form-control border-2" onChange={(e)=>setemail(e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" className="form-control border-2" onChange={(e)=>setmessage(e.target.value)}></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-3 mb-5" onClick={Submit}>Submit</button>
          </form>

          <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=stack%20center%20kasaragod+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>

        </div>
      </div>

      <footer className="text-center mt-5 p-5  ">
        <p>Thank you for visiting our Stack Institute website. Explore the possibilities, enhance your skills, and join us on the journey of innovation.</p>
        <p>Ready to take the next step? <a href="/contact" >Contact us</a> today!</p>
        <p>&copy; 2024 Stack Center. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
