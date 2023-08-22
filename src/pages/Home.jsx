import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultsList from "../components/ResultsList";
import Nav from "../components/Nav";
import ErrorBoundary from "../components/errorBoundary";

function Home() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    npiNumber: "",
    taxonomyDesc: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [resultsData, setResultsData] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const fetchResults = async () => {
      const response = await axios.get(
        "https://npiregistrybackend-production.up.railway.app/registryResults"
      );

      console.log(response.data.results);

      setResultsData(response.data);
    };

    fetchResults();
  }, [refreshKey]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        "https://npiregistrybackend-production.up.railway.app/registrySearch";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);

      setRefreshKey((refreshKey) => refreshKey + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-full h-full sm:w-3/4">
      <Nav />

      <div className=" mt-10">
        <form
          className="mx-auto mb-10 w-1/2 bg-white pt-4 shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mx-auto mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className=" ml-6 w-full">
              <label className="mb-2 flex flex-row text-xl" htmlFor="npiNumber">
                NPI Number
              </label>
              <input
                type="text"
                className="form-input mb-6  w-5/6 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="npiNumber"
                name="npiNumber"
                onChange={handleChange}
                value={data.npiNumber}
              ></input>

              <label
                className=" mb-2 flex  flex-row text-xl"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                className="form-input w-5/6 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="firstName"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
              ></input>
            </div>

            <div className="mx-auto ml-6 w-full sm:ml-6">
              <label
                className="mb-2 flex flex-row text-xl"
                htmlFor="taxonomyDesc"
              >
                Taxonomy Description
              </label>
              <input
                type="text"
                className="form-input mb-6 w-5/6 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="taxonomyDesc"
                name="taxonomyDesc"
                onChange={handleChange}
                value={data.taxonomyDesc}
              ></input>

              <label
                className=" mb-2 flex  flex-row text-xl"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                className="form-input w-5/6 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="lastName"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
              ></input>
            </div>
          </div>

          <div className="mx-auto mb-6 grid grid-cols-1 md:grid-cols-3">
            <div className="mx-auto  mb-6 w-full ">
              <label
                className="ml-4 mb-2 flex  flex-row text-xl"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                className="form-input ml-4 w-5/6 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="city"
                name="city"
                onChange={handleChange}
                value={data.city}
              ></input>
            </div>
            <div className="mx-auto mb-6 w-full sm:mb-6 ">
              <label
                className=" ml-4 mb-2 flex flex-row text-xl"
                htmlFor="state"
              >
                State - Use two letters
              </label>
              <input
                type="text"
                className="form-input ml-4 w-5/6 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="state"
                name="state"
                onChange={handleChange}
                value={data.state}
              ></input>
            </div>
            <div className="mx-auto mb-6  ml-6 w-full">
              <label className=" mb-2 flex  flex-row text-xl" htmlFor="zipCode">
                Zip Code
              </label>
              <input
                type="text"
                className="form-input  w-5/6 rounded-lg border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                id="zipCode"
                name="zipCode"
                onChange={handleChange}
                value={data.zipCode}
              ></input>
            </div>
          </div>

          <div className=" mx-auto mb-6 flex  flex-row">
            <div className="mx-auto mb-6 flex w-full flex-row">
              <button
                type="submit"
                className="mx-auto rounded bg-blue-500 py-2 px-4 font-bold text-white shadow-md hover:bg-blue-700 sm:w-2/3"
                value="Submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <ResultsList resultsData={resultsData} />
    </div>
  );
}

function HomeErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Home {...props} />
    </ErrorBoundary>
  );
}

export default HomeErrorBoundary;
