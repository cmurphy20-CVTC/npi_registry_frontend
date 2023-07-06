import React, {useState, useEffect} from "react";
import axios from 'axios';
import ResultsList from "../components/ResultsList";
import Nav from "../components/Nav";
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
    
      setRefreshKey(refreshKey => refreshKey +1)

    } catch(error) {
     console.log(error)
    }

  } 

  return(
    <div>

      <Nav />
      <form onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label htmlFor="npiNumber">NPI Number</label>
            <input type="text" class="form-control" id="npiNumber" name="npiNumber" onChange={handleChange} value={data.npiNumber}></input>
          </div>
          
           
            <div class="form-group col-md-5">
              <label htmlFor="taxonomyDesc">Taxonomy Description</label>
              <input type="text" class="form-control" id="taxonomyDesc" name="taxonomyDesc" onChange={handleChange} value={data.taxonomyDesc}></input>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4"> 
              
              <label htmlFor="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" name="firstName" onChange={handleChange} value={data.firstName}></input>
            </div>
            <div class="form-group col-md-4">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" name="lastName" onChange={handleChange} value={data.lastName}></input>
            </div>            
          </div>

          <div class="form-row">
            <div class="form-group col-md-3">
              <label htmlFor="city">City</label>
              <input type="text" class="form-control" id="city" name="city" onChange={handleChange} value={data.city}></input>
            </div>
            <div class="form-group col-md-3">
              <label htmlFor="state">State - Use two letters and other criteria</label>
              <input type="text" class="form-control" id="state" name="state" onChange={handleChange} value={data.state}></input>
            </div>
            <div class="form-group col-md-3">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" class="form-control" id="zipCode" name="zipCode" onChange={handleChange} value={data.zipCode}></input>
              </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-3">
            <button type="submit"  class="btn btn-primary mb-2" value="Submit">Search</button>
            
            </div>

          </div>
            
      </form>

     <ResultsList resultsData={resultsData} />  
     
    </div>
  )
}



export default Home;