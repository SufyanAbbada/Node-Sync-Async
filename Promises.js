console.clear();
function makePizza(flavor) {
  return new Promise((resolve, reject) => {
    if (flavor == "Tikka") {
      reject("Tikka is out of Stock");
      return;
    }
    console.log("Preparing your " + flavor + " Pizza");
    setTimeout(function () {
      resolve(`Your ${flavor} Pizza is Ready to be Eaten`);
    }, 2000);
  });
}

//Here the Promise is returned and it has resolved the issue in the resolve function that can only be accessed
//using '.then' operator while using the Function

console.log(
  makePizza("Tikka")
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    })
);

//AXIOS is Promise based so lets test it.
