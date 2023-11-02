const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
// const logger = require("morgan");
// app.use(logger("dev"));
// app.use(express.static("../client"))

// this is our body-parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

// allows access to fake data file
const { bucketList } = require("./mockData");

app.get("/", (req, res) => {
  res.send(bucketList);
});

// READ
app.get("/user/:username/bucket", (req, res) => {
  if (!req.params.username) {
    res.status(400).json({ error: "Please provide a username" })
  } else if (!bucketList[req.params.username]) {
    res.status(404).json({ error: "Unable to find username" })
  } else 
  res.json(bucketList[req.params.username]);
});

let newId = 4;
// CREATE
app.post("/user/:username/bucket", (req, res) => {
  if(!req.body.description){
    res.status(400).json({error: "Please provide a valid new item"})
  } else if(!req.params.username) {
    res.status(400).json({error: "Please provide a username"})
  } else if (!bucketList[req.params.username]) {
    res.status(404).json({error: "Unable to find username"})
  } else {
    // build an object from user data
    let data = {
      id: newId++,
      description: req.body.description,
      isComplete: false,
    };
    // add an empty array to mock data if it doesn't exist
    if (!bucketList[req.params.username]) {
      bucketList[req.params.username] = []
    }
    // add data to fake data array
    bucketList[req.params.username].push(data)
    // send a receipt back to client
    res.json(data)
  }
});

// Delete
app.delete('/user/:username/bucket/:id', (req, res)=>{
  if (!req.params.username) {
    res.status(400).json({ error: "Please provide a username" })
  } else if (!bucketList[req.params.username]) {
    res.status(404).json({ error: "Unable to find username" })
  } else {
    // access value from parameters
    let requestedId = Number(req.params.id)
    // need to find if element exists matching user's id
    // if there is a match, returns the index of the first match
    let requestedItemIndex = bucketList[req.params.username].findIndex((bucketItem)=>{
      return bucketItem.id === requestedId
    })
    if(requestedItemIndex !== -1){
      // if we know the index, can we splice?
      // we need to know starting index and 1
      let removedObj = bucketList[req.params.username].splice(requestedItemIndex, 1)
      // send data back
      res.json(removedObj)
    } else {
      res.status(404).json({error: "Unable to find id on backend with delete"})
    }
  }
})

// UPDATE = PUT
app.put('/user/:username/bucket/:id', (req, res)=>{
  if(!req.params.id) {
    res.status(400).json({ error: "Please provide an item id" })
  } else if (!req.params.username) {
    res.status(400).json({ error: "Please provide a username" })
  } else if (!bucketList[req.params.username]) {
    res.status(404).json({ error: "Unable to find username" })
  } else {
    let requestedId = Number(req.params.id)
    // iterate through array
    // if found, return the element => object
    // if not found, return undefined
    let item = bucketList[req.params.username].find(bucketItem => {
      return requestedId === bucketItem.id
    })
    // test to make sure element is found
    if (item) {
      // update isComplete from false to true <=> true to false
      item.isComplete = !item.isComplete
      res.json(item)
    } else {
      res.status(404).json({ error: "Unable to find id for put backend method" })
    }
  }
})

app.listen(port, () => console.log(`App listening on port ${port}`));
