import fs from "fs";

// Asynchronous
fs.readFile("./hello.txt", (error, data) => {
    if (error) {
        console.log("errrroooorrr", error);
    }
    console.log("readFile Async", data.toString("utf-8"));
});

// Synchronous
const file = fs.readFileSync("./hello.txt");

console.log("readFileSync", file.toString());

// Append
/* fs.appendFile("./hello.txt", " This is so cool!!", (error) => {
    if (error) {
        console.log("error", error);
    }
}); */

// Write
fs.writeFile("bye.txt", "Sad to see you go", (error) => {
    if (error) {
        console.log(error);
    }
});

// Delete
fs.unlink("./bye.txt", (error) => {
    if (error) {
        console.log(error);
    }
    console.log("inception");
});

/* console.time()
console.timeEnd() => measures the length of time it takes for a function to complete. */
