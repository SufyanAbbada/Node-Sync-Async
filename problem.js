console.clear();
function pizza(flavor) {
  console.log("Lets prepare " + flavor + " Pizza");
  setTimeout(function () {
    console.log("Preparing Your " + flavor + " Pizza");
    return flavor + "Pizza Prepared";
  }, 1000 * 3);
  return "Pizza Ready";
}
console.log(pizza("Fajita"));

//As you can see that we requires to have the 'Pizza Prepared' term first and then as it returns, then 'Pizza Ready'
//should be Printed. But here our Function haven't waited but printed the last line and gone.
//And when we come to the API and Database calls, it will end up even before our request has arrived back.
//So here comes the Concept of Sync and async.

//We also cannot wait for it to complete because that will stop the thread and that thread will now not be available for others to execute.

//Lets do the same work by Call Back
