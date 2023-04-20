// 1. What floor does Santa end up?
// 2. When does Santa first enter the basement floor?
/* 
	( = 1 floor up
	) = 1 floor down
*/

// const fs = require("fs");
import fs from "fs";

const question1 = () => {
    fs.readFile("./santa.txt", (err, data) => {
        console.time("Santa-time");
        const directions = data.toString();
        const directionsArray = directions.split("");
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === "(") {
                return (acc += 1);
            } else if (currentValue === ")") {
                return (acc -= 1);
            }
        }, 0);
        console.timeEnd("Santa-time");
        console.log("floor: ", answer);
    });
};

const question2 = () => {
    fs.readFile("./santa.txt", (err, data) => {
        console.time("Santa-time");
        const directions = data.toString();
        const directionsArray = directions.split("");
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === "(") {
                accumulator += 1;
            } else if (currentItem === ")") {
                accumulator -= 1;
            }
            counter++;
            return accumulator > 0;
        });
        console.timeEnd("Santa-time");
        console.log("basement entered at: ", counter);
    });
};

question1();
question2();
