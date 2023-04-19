// import http from "http";
import express from "express";

/* const server = http.createServer((req, res) => {
    console.log("headers", req.headers);
    console.log("method", req.method);
    console.log("url", req.url);
    const user = {
        name: "John",
        hobby: "Skating",
    };
    // res.setHeader("Content-Type", "text/html");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
});

server.listen(3000); */

const app = express();

// app.use(express.static(__dirname + "/public"));

// Middleware
/* app.use((req, res, next) => {
    console.log("<h1>Helloo</h1>");
    next();
}); */

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/:id", (req, res) => {
    console.log(req.query); //get query
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    res.send("getting root");
    res.status(404).send("not found");
});

app.get("/profile", (req, res) => {
    res.send("getting profile");
});

app.post("/profile", (req, res) => {
    console.log(req.body);
    res.send("Success");
});

app.listen(3000);
