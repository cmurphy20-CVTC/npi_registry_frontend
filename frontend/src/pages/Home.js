import React, {useState} from "react";
import axios from 'axios';

function Home() {
  const [data, setData] = useState({})
  
  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value}) ;
  };
    
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/npi-test";
      const {data: res} = await axios.post(url, data)
      console.log(res.message)
    } catch(error) {
     console.log(error)
    }

  }
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" onChange={handleChange} value={data.firstName}></input>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" onChange={handleChange} value={data.lastName}></input>
        

        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  )
}


export default Home;