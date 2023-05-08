import React, { useState, useEffect } from "react";

function Results() {
  const [resultsData, setResultsData] = useState(null)

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch("http://localhost:5000/registrySearch")
      const json = await response.json()

      if (response.ok) {
        console.log(json)
        setResultsData(json)
      }
    }
    fetchResults()
  }, [])
 
    return(
      <div>
        {resultsData && resultsData.map((result, i) => (
            <p key={i}>{result}</p>
        ))}
      </div>
    )
  
}

export default Results;