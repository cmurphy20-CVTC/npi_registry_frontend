const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.use(cors())

app.use(bodyParser.json());

app.get("/", function(req, res){

    res.render("index");
    
})

app.post("/registrySearch", function(req, res){
    
  const npiNumber = req.body.npiNumber;
  const first_name = req.body.firstName;
  const last_name = req.body.lastName;
  const taxonomy_description = req.body.taxonomyDesc;
  const city = req.body.city;
  const state = req.body.state;
  const zip_code = req.body.zipCode;

  const url = "https://npiregistry.cms.hhs.gov/api/?number=" + npiNumber + "&enumeration_type=&taxonomy_description=" + taxonomy_description + "&name_purpose=&first_name=" + first_name + "&last_name=" + last_name + "&organization_name=&city=" + city + "&state=" + state +"&postal_code=" + zip_code + "&country_code=US&limit=50&skip=&pretty=&version=2.1";

  localStorage.setItem("searchURL", url);

  res.json({search: url})

})

app.get("/registryResults", function(req, res) {

  let url = localStorage.getItem("searchURL");

  axios.get(url).then((response) => {

    const npiData = response.data;

    res.send(npiData)

  }).catch((error) => {

    console.log(error)

  })

  
  
})

app.listen(5000, function(){
    console.log("The server is running on port 5000.")
})