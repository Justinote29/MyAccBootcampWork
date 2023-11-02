# MongoDB/MongooseJS related question:

For testing these questions you may access the class server database using Studio 3T.

## Problem

You are building a social media platform that allows users to post messages and follow other users. Each message has a title, content, and a timestamp. Each user has a username, a list of followers, and a list of messages they have posted.

Your task is to design a MongoDB schema for this platform and write queries using MongooseJS to perform the following operations:

const mongoose = require("mongoose");


Here's the User schema
const mySocialUserSchema =  new mongoose.Schema({
    username: {type: String,
                required: true},
    password: {type: String,
                required, true},
})

Here's the Post Schem

const mySocialPostSchema = new mongoose.Schema({
    title: {type: String},
    content: {type: String},
    timestamp: {type: Date,
                default: Date.now,},
    postedBy: {type:mongoose.Schema.ObjectId, ref: mySocialUserSchema}
})



1. Insert a new user with a given username.
const User = mongoose.model("User", mySocialPostSchema);
const newUser = new User({username: "justino", password: "justino1233"})

newUser.save()
.then((user)=>{
    res.status(200).json(user);
})
.catch((error)=>{
    console.log(error);
    res.status(700).json({error: "Error creating user"})
})

2. Insert a new message with a given title, content, and timestamp, and associate it with a given user.
const Post = mongoose.model("Post", mySocialPostSchema)

const newPost = new Post({
    title: "new post",
    content: "taking final",
    postedBy: reference to userId of person who posted that was created by Mongo when user was created 
})

newPost.save()
.then((post)=>{
    res.status(200).json(user);
})
.catch((error)=>{
    console.log(error);
    res.status(700).json({error: "Error creating post"})
})

3. Retrieve all messages posted by a given user, sorted by timestamp in descending order.

Const Post = mongoose.model("Post", mySocialPostSchema)

const allPosts = Post.find({postedBy: userId}).sort({timestamp: -1})
.then((posts)=>{
    res.status(200).json(posts);
})
.catch((error)=>{
    console.log(error);
    res.status(700).json({error: "Error retrieving posts"})
})
