import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import input from './input.module.css';

export default function Input() {
    const [state, setstate] = useState({
        firstname:'',
        lastname:'',
        email:'',
        city:'',
        zip:'',
    });

  const navigate = useNavigate();

    const handleChange = (event)=>{
event.preventDefault();
        const { name, value } = event.target;
        setstate((previousState)=>{
              return{
                ...previousState,
                [name]:value
              }
        })
    }


   const handleSubmit = (event)=>{
    event.preventDefault();
  const first = event.target[0].value;
  const last = event.target[1].value;
  const email = event.target[2].value;
  const city = event.target[3].value;
  const zip = event.target[4].value;

 axios.post("https://642fd3c3b289b1dec4bae924.mockapi.io/CARD",{
    firstname : first,
    lastname : last,
    email : email,
    city : city,
    zip : zip,
}).then(()=>{
 navigate("/")
}).catch((error)=>{console.log(error)})

   }


 
  return (
    <>
    <div className={`title ${input.title}`}>
    <h4>CRUD Application</h4>
    </div>
<div className={`container ${input.container}`}>
<h1>ADD DATA</h1>
<form className={`row g-3 needs-validation ${input.needs_validation}`}  onSubmit={handleSubmit}>
  <div className="col-md-5">
    <label htmlFor="validationCustom01" className="form-label">First name</label>
    <input type="text" className="form-control" name='firstname' value={state.firstname} onChange={handleChange} id="validationCustom01" defaultValue="Mark" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Last name</label>
    <input type="text" className="form-control" name='lastname' value={state.lastname} 
    onChange={handleChange}  id="validationCustom02" defaultValue="Otto" required />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-5">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={state.email} onChange={handleChange}  placeholder="name@example.com" />
      <div className="invalid-feedback">
        Please choose a username.
      </div>
  </div>
  <div className="col-md-5">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" name='city' value={state.city} onChange={handleChange}  required />
    <div className="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationCustom05" name='zip' value={state.zip} onChange={handleChange}  required />
    <div className="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
 
  <div className={`col-12 ${input.col_12}`}>
    <button className="btn btn_hov" type="submit">Submit Data</button>
    <Link to= "/data">
    <button className="btn btn_hov" type="checkdata">Check Data</button>
    </Link>
  </div>
</form>
</div>
     
   
    </>
  )
}
