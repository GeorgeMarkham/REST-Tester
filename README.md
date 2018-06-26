# REST-Tester

## Contents
* [Requirements](https://github.com/GeorgeMarkham/REST-Tester#requirements)
* [Installation](https://github.com/GeorgeMarkham/REST-Tester#to-install)
* [How to run the server](https://github.com/GeorgeMarkham/REST-Tester#to-run)
* [Using Postman](https://github.com/GeorgeMarkham/REST-Tester#using-postman)

## Requirements:
* Must have node & npm installed: https://nodejs.org/en/
* Use POSTMAN to test the API: https://www.getpostman.com/apps 

## To install:
```
    git clone https://github.com/GeorgeMarkham/REST-Tester.git
    cd REST-Tester
    npm install
```

## To run:
```
    npm start
```
OR
```
    node server.js
```

## Using Postman:


1. When you start Postman you'll see this screen
![Postman start screen](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/0.png)


2. In the url input next to GET type `http://localhost:8080/api` (replace 8080 with whatever port number you choose to run the server on)
![Postman url input screen](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/1.png)


3. Click Send and you'll see the server output in the box at the bottom of the screen
![GET request](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/2.png)


4. To send a POST request click on GET and select POST then click the Body tab. Select raw and change Text to application/json. Then, in the top box, input:
```
{
	"id":"1",
	"title": "This title has been updated",
	"content": "This content has also been updated"
}
```
Hit send and you'll see the following:
![POST request](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/3.png)


5. To send a PUT request do the same as above but select PUT instead of POST and, in the top box, input the following and hit send:
```
{
	"id":"100",
	"title": "This is a new title",
	"content": "This object's id is 100"
}
```
![PUT request](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/4.png)


6. To send a DELETE select DELETE instead and, in the top box, input the following (where id is the id you want to delete) and hit send:
```
{
	"id":"0"
}
```
![PUT request](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/5.png)


7. If you run another GET request you should see the following output:
![GET request](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/6.png)


_You can also run a GET request on a specific id such as `http://localhost:8080/api/1`_