import React from "react";

const ResultsList = ({ resultsData }) => {

  return (
    <div className="">
      {typeof resultsData.results === "undefined" ? (
        <p className="pb-6 text-center sm:text-sm text-2xl">Results will appear below</p>
      ) : (
        <table className="mx-auto mb-8 w-5/6 table-auto bg-white shadow-lg">
        <thead className=" bg-blue-500 text-left uppercase text-white sm:text-sm md:text-xl ">
          <tr className="">
            <th scope="col" className="px-4 py-1 md:px-6 md:py-3">
              NPI
            </th>
            <th scope="col" className="px-4 py-1 md:px-6 md:py-3">
              Name
            </th>
            <th scope="col" className="px-4 py-1 md:px-6 md:py-3">
              NPI Type
            </th>
            <th scope="col" className="px-4 py-1 md:px-6 md:py-3">
              Primary Practice Address
            </th>
            <th scope="col" className="px-4 py-1 md:px-6 md:py-3">
              Phone
            </th>
            <th scope="col" className="px-4 py-1 text-center md:px-6 md:py-3">
              Primary Taxonomy
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {resultsData.results.map((result, i) => (
            // eslint-disable-next-line react/jsx-key
            <tr className=" border-b bg-white text-center hover:bg-neutral-100 dark:border-gray-700 dark:bg-gray-800">
              <td key={i}>
                
                  {result.number}
                
              </td>
              <td className=" px-4 py-3 text-left text-xs md:text-lg" key={i}>
                {result.basic.first_name}
                <br></br>
                {result.basic.last_name} {result.basic.organization_name}
              </td>
              <td className="px-4 py-3 text-xs md:text-lg" key={i}>
                {result.enumeration_type}
              </td>
              <td className="px-4 py-3 text-left text-xs md:text-lg" key={i}>
                {result.addresses[0].address_1}
                <br></br>
                {result.addresses[0].city}, {result.addresses[0].state},{" "}
                {result.addresses[0].postal_code}
              </td>
              <td className="  py-3 text-xs md:text-lg" key={i}>
                {result.addresses[0].telephone_number}
              </td>
              <td className=" px-4 py-3 text-xs md:text-lg" key={i}>
                {result.taxonomies[0].desc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};

export default ResultsList;
