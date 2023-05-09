import React from "react";

const ResultsList = ({resultsData}) => {
  return(
    <div>

      {(typeof resultsData.results === 'undefined') ?
      (
        <p>Results will appear below</p>
        
      ):(
        
          <table class="table">
            <thead>
              <tr>
                <th scope="col-md-2">NPI</th>
                <th scope="col-md-2">Name</th>
                <th scope="col-md-2">NPI Type</th>
                <th scope="col-md-2">Primary Practice Address</th>
                <th scope="col-md-2">Phone</th>
                <th scope="col-md-2">Primary Taxonomy</th>
              </tr>

            </thead>
            <tbody>
              
              {resultsData.results.map((result, i) => (
                <tr>
                  <td key={i}><a href={"https://npiregistry.cms.hhs.gov/provider-view/" + result.number}>{result.number}</a></td>
                  <td key={i}>{result.basic.first_name} {result.basic.last_name} {result.basic.organization_name}</td>
                  <td key={i}>{result.enumeration_type}</td>
                  <td key={i}>{result.addresses[0].address_1}<br></br>
                  {result.addresses[0].city}, {result.addresses[0].state}, {result.addresses[0].postal_code}</td>
                  <td key={i}>{result.addresses[0].telephone_number}</td>
                  <td key={i}>{result.taxonomies[0].desc}</td>
                </tr>
              ))}
            </tbody>      
            
          </table>
          
      )}
      
      </div>
  )
  
}

export default ResultsList;