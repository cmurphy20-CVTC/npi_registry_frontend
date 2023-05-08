import React, {useState, useEffect} from "react";
import axios from 'axios';


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

const [resultsData, setResultsData] = useState(1)
const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {  
    
    
      const fetchResults = async () => {
        
      const response = await axios.get("http://localhost:5000/registryResults")

      console.log(response.data.results)
       
          setResultsData(response.data)
          
          console.log(refreshKey)
      }

      fetchResults();

  }, [refreshKey])
  
  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value}) ;
  };
    
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:5000/registrySearch";
      const {data: res} = await axios.post(url, data)
      console.log(res.message)
      //  console.log(data) // data from req

      // setData({
      //   firstName: "",
      //   lastName: "",
      //   npiNumber: "",
      //   taxonomyDesc: "",
      //   city: "",
      //   state: "",
      //   zipCode: ""
      // })

      setRefreshKey(refreshKey => refreshKey +1)

    } catch(error) {
     console.log(error)
    }

  } 
  
  return(
    <div>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="npiNumber">NPI Number</label>
        <input type="text" id="npiNumber" name="npiNumber" onChange={handleChange} value={data.npiNumber}></input>
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


      <div>

      
      {(typeof resultsData.results === 'undefined') ?
      (
        <p>Results will appear below</p>
        
      ): (
        resultsData.results.map((result, i) => (
          <div>
          <p key={i}>{result.number}</p>
            <p key={i}>{result.basic.first_name} {result.basic.last_name}</p>
            <p key={i}>{result.enumeration_type}</p>
            <p key={i}>{result.addresses[0].address_1}</p>
            <p key={i}>{result.addresses[0].city}</p>
            <p key={i}>{result.addresses[0].state}</p>
            <p key={i}>{result.addresses[0].postal_code}</p>
            <p key={i}>{result.taxonomies[0].desc}</p>
            
            
            <p key={i}></p>
            <p key={i}></p>
          </div>
          
        ))
      )}
      </div>
    
    </div>
  )
}


export default Home;