import React from "react";

const ResultsList = ({ resultsData }) => {
  return (
    <div className="">
      {typeof resultsData.results === "undefined" ? (
        <p className="ml-8 pb-6 sm:text-sm text-2xl">Results will appear below</p>
      ) : (
        <div>
        <table className="mx-auto  mb-8 sm:w-3/4 md:w-5/6 table-auto bg-white shadow-lg">
          <thead className=" sm:text-sm md:text-xl text-left text-white uppercase bg-blue-500 ">
            <tr className="">
              <th scope="col" className="px-6 py-3">NPI</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">NPI Type</th>
              <th scope="col" className="px-6 py-3">Primary Practice Address</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3 text-center">Primary Taxonomy</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.results.map((result, i) => (
              // eslint-disable-next-line react/jsx-key
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-neutral-100 text-center">
                <td key={i}>
                  <a
                    className="sm:text-xs md:text-lg text-blue-300"
                    href={
                      "https://npiregistry.cms.hhs.gov/provider-view/" +
                      result.number
                    }
                  >
                    {result.number}
                  </a>
                </td>
                <td className="sm:text-xs md:text-lg" key={i}>
                  {result.basic.first_name} {result.basic.last_name}{" "}
                  {result.basic.organization_name}
                </td>
                <td className="sm:text-xs md:text-lg" key={i}>{result.enumeration_type}</td>
                <td className="sm:text-xs md:text-lg" key={i}>
                  {result.addresses[0].address_1}
                  <br></br>
                  {result.addresses[0].city}, {result.addresses[0].state},{" "}
                  {result.addresses[0].postal_code}
                </td>
                <td className="sm:text-xs md:text-lg" key={i}>{result.addresses[0].telephone_number}</td>
                <td className="sm:text-xs md:text-lg" key={i}>{result.taxonomies[0].desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default ResultsList;
