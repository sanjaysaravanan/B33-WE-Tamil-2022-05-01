const resolvePromise = true;
const promiseObj = new Promise((resolve, reject) => {
  if(resolvePromise) {
    resolve("Yeeh I Completed the Promise, Hey Here is the Completed Promise");
  }
  else reject("Was feeling sick, Not able to Fullfill the Promise");
});

console.log(promiseObj);

promiseObj.then((value) => {
  console.log(value);
  return new Promise((resolve) => { resolve(value + " #### From One ####") });
}).then((value) => {
  throw new Error("New Error For Rejection at second Then");
  console.log(value);
  return new Promise((resolve) => { resolve(value + " #### From Two ####") });
}).then((value) => {
  console.log(value);
  return value;
})
.catch((error) => {
  console.log(error);
}).finally(() => {
  console.log("Promise Finished");
});





