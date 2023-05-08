import React, {useState} from "react";
import axios from 'axios';
import Results from './Results';

function Home() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    npiNumber: "",
    taxonomyDesc: "",
    city: "",
    state: "",
    zipCode: ""
  })
  
  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value}) ;
  };
    
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/registrySearch";
      const {data: res} = await axios.post(url, data)
      console.log(res.message)
      console.log(data) // data from req
    } catch(error) {
     console.log(error)
    }

  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="npiNumber">NPI Number</label>
        <input type="number" id="npiNumber" name="npiNumber" onChange={handleChange} value={data.npiNumber}></input>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" onChange={handleChange} value={data.firstName}></input>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" onChange={handleChange} value={data.lastName}></input>
        <label htmlFor="taxonomyDesc">Taxonomy Description</label>
        <input type="text" id="taxonomyDesc" name="taxonomyDesc" onChange={handleChange} value={data.taxonomyDesc}></input>
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" onChange={handleChange} value={data.city}></input>
        <label htmlFor="state">State</label>
        <input type="text" id="state" name="state" onChange={handleChange} value={data.state}></input>
        <label htmlFor="zipCode">Zip Code</label>
        <input type="text" id="zipCode" name="zipCode" onChange={handleChange} value={data.zipCode}></input>

        <button type="submit" value="Submit">Submit</button>
      </form>

    <Results />
    </div>
  )
}


export default Home;