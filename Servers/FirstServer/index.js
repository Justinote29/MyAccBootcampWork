//FOUNDATION- Here, we import express.  with the function, require, and assign it to the variable express.  This gives us access to all the express methods like app.get, etc.
const express = require("express");

//Then we create an instance (app) of our application when out server starts.  This is different if our app is actually deployed.
const app = express();

//kind of like what radio station we're listening for.  There are thousands of ports, some are reserved like 80 for http and 443 for https.  This lets our domain host use whatever port they want and if they aren't using one, we use port 3000. like if they've assigned a port use it, else 3000.
const port = process.env.PORT || 3000;

//ROUTE HANDLERS
//composed of 2 parts: verb and route.  Get methods take a route and a callback function. req= request and res= response. "/" is the root route.

app.get("/", (req, res) => {
  ///res.end() and res.send() both stop the request cycle by sending a response.  The browser interprets them differently though.  Not sure how though.
  //   res.end();
  res.send("My Second Server!!!");
});

//new route handler- get and /home
app.get("/home", (req, res) => {
  res.send("My Home Route!!!");
});

//new route handler - get and /contact
app.get("/contact", (req, res) => {
  res.send("This is the contact route");
});

//new route handler - get and /home/contact
app.get("/home/contact", (req, res) => {
  res.send("this is the home/contact route");
});

//the star handler- this handles every route we haven't explicitly accounted for.  If using the star handler, make it last or you'll get unexpected behavior.
app.get("*", (req, res) => {
  res.send("I am the everything else");
});

//LISTENER- listen can take 2 arguments, the port and a callback function  (optional).  recommended to use this so you know where to look for the code on a server that is causing issues, just makes it easier when we're running multiple apps on different servers- tells us which (app) server running on which port.
app.listen(port, () => console.log(`First Server running on port ${port}`));
