# REST-Tester

## Requirements:
* Must have node & npm installed: https://nodejs.org/en/
* Use POSTMAN to test the API: https://www.getpostman.com/apps 

### To install:
```
    npm install
```

### To run:
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
![GET response](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/2.png)

4. To send a POST request click on GET and select POST then click the Body tab. Select raw and change Text to application/json. Then, in the top box, input:
```
{
	"id":"1",
	"title": "This title has been updated",
	"content": "This content has also been updated"
}
```
hit send and you'll see the following:
![GET response](https://github.com/GeorgeMarkham/REST-Tester/raw/master/example_imgs/3.png)