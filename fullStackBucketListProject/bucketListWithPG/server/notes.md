Consuming an API

1) utilize THEIR endpoint
2) THEY decide how data is to be sent - JSON usually (or XML)
3) THEY determine how much data and what is looks like



Build an API
1) WE decide on the endpoint
2) WE decide how data is to be sent
3) WE determine how much data and what it looks like

We'll make a 
CRUD functional API for BucketList
Create, Read, Update and Delete

We'll use 2 endpoints (routes): /bucket   /bucket/:id, and 4 route handlers
 - we can use /bucket to create data 

Create Data
1)  route /bucket and we'll use POST method
2)  send back data as JSON  
3)  send back document from DB to client (with ID), the "receipt" we receive from DB to client- one object with an "id", description, and isCompleted. (Then client can do whatever they want with it).  Forward on a receipt from DB.
4) let people using this know they need to send json with a body and a key named "description".

example of data sent to/from DB
{
    id:1,
    descripton: "Learn PostgreSQL!!",
    isComplete:false,
}



Read Data
1)  route can be /bucket and GET method
2)  send data back as JSON  (JSON lets us send object and stuff as strings-kind of like the universal lang we use to send things- all lang. can use strings)
3)  send back an array of objects- bucketlist items
4) send json with body and description

Update Data - we use the id to update the item
1) /bucket/:id route and PUT method
2) send back data as JSON
3) send back a copy of the updated document  (object)

Delete Data - so we can delete one specific item
1) /bucket/:id route and DELETE method
2) send back data as JSON
3) send back a copy of the deleted document (object)


//your browser can only do GET requests, so we have to write code.  For now we'll use postman and http://localhost:3000/bucket to do a POST request.  We can have postman simulate a browser doing requests other than GET requests.  Let's us simulate activite from the client, like a submitted form and it will post to the DB.