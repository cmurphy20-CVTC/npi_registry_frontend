const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const ejs = require("ejs");
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.render("index");
    
})

app.get("/results", function(req, res) {
  res.render("results");
})

app.get("/no_results", function(req, res) {
  res.render("no_results");
})

app.get("/npiSearch", function(req, res) {
  res.render("npiSearch");
})

app.post("/", function(req, res){
    
  const npiNumber = req.body.npiNumber;
  const first_name = req.body.firstName;
  const last_name = req.body.lastName;
  const taxonomy_description = req.body.taxonomyDesc;
  const city = req.body.cityName;
  const state = req.body.state;
  const zip_code = req.body.zipCode;

  const url = "https://npiregistry.cms.hhs.gov/api/?number=" + npiNumber + "&enumeration_type=&taxonomy_description=" + taxonomy_description + "&name_purpose=&first_name=" + first_name + "&last_name=" + last_name + "&organization_name=&city=" + city + "&state=" + state +"&postal_code=" + zip_code + "&country_code=US&limit=200&skip=&pretty=&version=2.1";

  localStorage.setItem("returnURL", url);

  axios.get(url).then((response) => {

    const npiData = response.data;

    res.render("results", {resultData: npiData});

  }).catch((error) => {

    console.log(error)

  })

})


app.post("/npiSearch", function(req, res) {
  const npiResult = req.body.npi;

  const url = "https://npiregistry.cms.hhs.gov/api/?number=" + npiResult + "&country_code=US&limit=1&skip=&pretty=&version=2.1";

  axios.get(url).then((response) => {

    const searchedNPIData = response.data;

    console.log(searchedNPIData.results[0].basic)

    res.render("npiSearch", {npiData: searchedNPIData.results});

  }).catch((error) => {

    console.log(error)

  })
})

app.post("/backToResults", function(req, res){
    
  const url = localStorage.getItem("returnURL");

  axios.get(url).then((response) => {

    const npiData = response.data;

    res.render("results", {resultData: npiData});

  }).catch((error) => {

    console.log(error)

  })

})





app.listen(3000, function(){
    console.log("The server is running on port 3000.")
})