import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import updata from './updata.module.css';

export default function Update() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    setId(localStorage.getItem('id') || '');
    setFirstname(localStorage.getItem('firstname') || '');
    setLastname(localStorage.getItem('lastname') || '');
    setEmail(localStorage.getItem('email') || '');
    setCity(localStorage.getItem('city') || '');
    setZip(localStorage.getItem('zip') || '');
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstname':
        setFirstname(value);
        break;
      case 'lastname':
        setLastname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'zip':
        setZip(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://642fd3c3b289b1dec4bae924.mockapi.io/CARD/${id}`, {
        firstname,
        lastname,
        email,
        city,
        zip,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
      // add error handling here, such as displaying an error message to the user
    }
  };


  return (
    <>
       <div className={`title ${updata.title}`}>
    <h4>CRUD Application</h4>
    </div>
<div className={`container ${updata.container}`}>
<h1>UPDATE DATA</h1>
<form className={`row g-3 needs-validation ${updata.needs_validation}` } onSubmit={handleSubmit}>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationCustom01" name='firstname' value={firstname} onChange={handleChange} defaultValue="Mark" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationCustom02" name='lastname' value={lastname} onChange={handleChange} defaultValue="Otto" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
 <div className="col-md-5">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={email} onChange={handleChange} placeholder="name@example.com" />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" name="city" value={city} onChange={handleChange} required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" value={zip} name='zip' id="validationCustom05" onChange={handleChange} required />
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
 
  <div className={`col-12 ${updata.col_12}`}>
    <button className="btn btn_hov" type="submit">Update Data</button>
    
    <Link to = "/data"><button className="btn btn_hov" type="checkdata">Check Data</button></Link>
  </div>
</form>
</div>
    </>
  )
}
