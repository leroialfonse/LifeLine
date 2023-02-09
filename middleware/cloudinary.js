// reads in the cloudinary env variable - has to be first.
require("dotenv").config({ path: "./config/.env" });
// Aliasing version 2, and referencing with a variable.
const cloudinary = require("cloudinary").v2;
// Cloudinary picks up env and is now configured. 
console.log(cloudinary.config().cloud_name);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
