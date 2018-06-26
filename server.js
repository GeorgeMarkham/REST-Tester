//Grab instance of express
const express = require('express'),
    app = express(), //Initialise express
    bodyParser = require('body-parser'), //Allows express to read data sent by a client
    PORT = process.env.PORT || 8080; //If port is set as an environment variable use it otherwise default to 8080

//Tell express to use bodyParser as middleware
app.use(bodyParser.json());


//Initialise example data collection
var data = {
    "0": {
        'id': "0",
        "title": "An Example 0",
        "content": "This is some example data with an id of 0",
    },
    "1": {
        'id': "1",
        "title": "An Example 1",
        "content": "This is some example data with an id of 1",
    },
    "2": {
        'id': "2",
        "title": "An Example 2",
        "content": "This is some example data with an id of 2",
    },
    "3":{
        'id': "3",
        "title": "An Example 3",
        "content": "This is some example data with an id of 3",
    },
}


/*
    HTTP Verbs:
        - GET: Used to get data such as a webpage or user info
        - POST: Used to upload data to a server, generally used to update data
        - PUT: Very similar to POST, usually used for data creation
        - DELETE: Used to delete data from a database
*/


/*
    When sending data using POST or PUT format it as application/json and include at least an id key value pair:
    {
        "id": "The id of the data"
    }
*/

app.get("/api", (request, response)=>{
    //Send the data back formatted as JSON
    response.json(data)
});

// :id tells express to expect data at that position in the url and identifies it
app.get("/api/:id", (request, response)=>{
    
    //Get the id parameter from the url
    var id = request.params.id;

    //Check id exists in the data collection and return 404 otherwise
    data[id] != null ? response.json(data[id]) : response.sendStatus(404);

});

app.post("/api", (request, response)=>{

    //In line with HTTP verb rules POST only allows updating, trying to create will give a 400 Bad Request error

    //Get the id from the body of the post request
    const id = request.body.id;

    //Check id exists in the data collection and return 400 otherwise
    if(data[id] != null) {
        //Insert data to the object at id where id is the key and request.body is an object containing the sent data
        data[id] = request.body;
        //Send the data with a success key to let the client know that the transaction was a success
        response.json({
            "success": true,
            "data":data[id]
        });
    } else {
        response.sendStatus(400);
    }
});

app.put("/api", (request, response)=>{
    //In line with HTTP verb rules PUT only allows creating, trying to update will give a 400 Bad Request error

    //Get the id from the body of the post request
    const id = request.body.id;

    //Check id doesn't exist in the data collection and return 400 otherwise
    if(data[id] == null) { 
        //Insert data to the object at id where id is the key and request.body is an object containing the sent data
        data[id] = request.body;
        //Send the data with a success key to let the client know that the transaction was a success
        response.json({
            "success": true,
            "data":data[id]
        });
    } else {
        response.sendStatus(400);
    }
});

app.delete("/api", (request, response)=>{
    //Get the id from the body of the post request
    const id = request.body.id;

    //Check id exists in the data collection and return 400 otherwise
    if(data[id] != null) {
        //The delete operator allows a key to be deleted from an object
        delete data[id];
        
        //Send just a success message as the data has now been deleted
        response.json({
            "success": true,
        });
    } else {
        response.sendStatus(400);
    }
});

//Listen on PORT
app.listen(PORT, ()=>{
    console.log("Listening on port: " + PORT);
});