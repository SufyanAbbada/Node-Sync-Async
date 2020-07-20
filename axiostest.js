const axios = require("axios");

axios
  .get("https://usman-recipes.herokuapp.com/api/recipes")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log("You data cannot be fetched!");
  });

//It works the same as Request calling but now we have got the beauty in Code.
//It can also be tested the error by giving the wrong url
