import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Data() {
  const [data, setData] = useState(null);

  function apiData(){
    axios
    .get("https://642fd3c3b289b1dec4bae924.mockapi.io/CARD")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  useEffect(() => {
   apiData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

function handleClick(id){
axios.delete(`https://642fd3c3b289b1dec4bae924.mockapi.io/CARD/${id}`)
.then(() => {
  apiData();
})

}

function setDataToStore(id,firstname,lastname,email,city,zip){
localStorage.setItem('id', id);
localStorage.setItem('firstname', firstname);
localStorage.setItem('lastname', lastname);
localStorage.setItem('email', email);
localStorage.setItem('city', city);
localStorage.setItem('zip', zip);
}



  return (
    <>
<div className="btn_class">
              <button className="btn btn_hov">
              <Link to="/" style={{textDecoration: "none", color: "white"}}>
              Click Here to Add Data
              </Link>
               
              </button>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4" style={{width:"98%", margin: "0 auto"}} >
           
    
      {data.map((item) => {
        return (
          <div key={item.id} class="col">
          
          <div class="card">

            <div className="cont_data">
             <table className="table table-dark table-striped-row">
                <tbody className="table-group-divider">
                  <tr>
                  <th>ID</th>
                    <td className="text_dg">{item.id}</td>
                    </tr>
                    <tr>
                    <th className="text_dg">First Name</th>
                    <td className="text_dg">{item.firstname}</td>
                    </tr>
                    <tr>
                    <th className="text_dg">Last Name</th>
                    <td className="text_dg">{item.lastname}</td>
                    </tr>
                    <tr>
                    <th className="text_dg">Email</th>
                    <td className="text_dg">{item.email}</td>
                    </tr>
                    <tr>
                    <th className="text_dg">City</th>
                    <td className="text_dg">{item.city}</td>
                    </tr>
                    <tr>
                    <th className="text_dg">Zip Code</th>
                    <td className="text_dg">{item.zip}</td>
                    </tr>
                    <tr>
                    <td>
                  
                  <Link to={'/update'}>
                      <button className="btn btn_hov" onClick={()=>setDataToStore(item.id,item.firstname,item.lastname,item.email,item.city,item.zip)}>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button className="btn btn_hov" onClick={()=>handleClick(item.id)} >Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            </div>
            
        );
      })}

      </div>
            
         
    </>
  );
}
