console.clear();

function pizza(flavor, callback) {
  console.log("Lets prepare " + flavor + " Pizza");
  setTimeout(function () {
    console.log("Preparing Your " + flavor + " Pizza");
    callback(flavor + " Pizza Prepared");
  }, 1000 * 3);

  return "Pizza Ready";
}
pizza("Fajita", prepared);

function prepared(pizza) {
  console.log(pizza + " and Ready to be Eaten");
}

console.log("Just Some Time, Your Pizza is baking.");

//Here you can see that the last line of code is being executed even when the function is still in Progress.
//It means that if your callback is taking some time, the other procedure will keep on working that is in other function.
