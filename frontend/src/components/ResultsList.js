import React from "react";

const ResultsList = ({resultsData}) => {
  return(
    <div>

      
      {(typeof resultsData.results === 'undefined') ?
      (
        <p>Results will appear below</p>
        
      ):(
        
          <table>
            <thead>
              <tr>
                <th>NPI</th>
                <th>Name</th>
                <th>NPI Type</th>
                <th>Primary Practice Address</th>
                <th>Phone</th>
                <th>Primary Taxonomy</th>
              </tr>

            </thead>
            <tbody>
              
              {resultsData.results.map((result, i) => (
                <tr>
                  <td key={i}><a href={"https://npiregistry.cms.hhs.gov/provider-view/" + result.number}>{result.number}</a></td>
                  <td key={i}>{result.basic.first_name} {result.basic.last_name}</td>
                  <td key={i}>{result.enumeration_type}</td>
                  <td key={i}>{result.addresses[0].address_1}</td>
                  <td key={i}>{result.addresses[0].city}</td>
                  <td key={i}>{result.addresses[0].state}</td>
                  <td key={i}>{result.addresses[0].postal_code}</td>
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