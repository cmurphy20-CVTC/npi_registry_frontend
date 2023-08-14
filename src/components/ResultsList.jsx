import React from "react";

const ResultsList = ({ resultsData }) => {
  return (
    <div>
      {typeof resultsData.results === "undefined" ? (
        <p className="ml-8 pb-6 text-2xl">Results will appear below</p>
      ) : (
        <table className="mx-auto w-5/6 table-auto bg-white shadow-lg">
          <thead className="text-xl text-gray-700 uppercase  ">
            <tr className="">
              <th scope="col" className="px-6 py-3">NPI</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">NPI Type</th>
              <th scope="col" className="px-6 py-3">Primary Practice Address</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Primary Taxonomy</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.results.map((result, i) => (
              // eslint-disable-next-line react/jsx-key
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td key={i}>
                  <a
                    className="ml-12 text-lg text-blue-300"
                    href={
                      "https://npiregistry.cms.hhs.gov/provider-view/" +
                      result.number
                    }
                  >
                    {result.number}
                  </a>
                </td>
                <td className="text-lg" key={i}>
                  {result.basic.first_name} {result.basic.last_name}{" "}
                  {result.basic.organization_name}
                </td>
                <td className="text-lg" key={i}>{result.enumeration_type}</td>
                <td className="text-lg" key={i}>
                  {result.addresses[0].address_1}
                  <br></br>
                  {result.addresses[0].city}, {result.addresses[0].state},{" "}
                  {result.addresses[0].postal_code}
                </td>
                <td className="text-lg" key={i}>{result.addresses[0].telephone_number}</td>
                <td className="text-lg" key={i}>{result.taxonomies[0].desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultsList;
