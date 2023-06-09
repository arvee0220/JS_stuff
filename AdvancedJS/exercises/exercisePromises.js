// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("success");
  }, 4000);
});
// #2) Run the above promise and make it console.log "success"
promise1.then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise2 = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() => console.log("Ooops something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url).then(res => res.json())
})).then(result => {
  console.log("1", result[0])
  console.log("2", result[1])
  console.log("3", result[2])
  console.log("4", result[3])
}).catch(error => console.log('error', error))
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?