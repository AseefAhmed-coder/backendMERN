# login-backend
 # login-backend
I'have create an exercise tracker application with using the following frameworks:
1. Database -> Mongodb Database -> NoSql Database
2. Server -> Express Server 
3. Modules -> NodeJS Modules
4. React -> React Components using some following Hooks:
    a. useContext() -> React Component with context
    b. useEffect() -> React Component with Effect
5. Design created using wire frame then implement on the html css bootstrap

# Project Title: 
Exercise Tracking Application using MERN Stack.

## API Reference
We created two schemas in our model one for UserModel,js which are used in AuthController and Auth Middleware, respectively and other one are Client.js which are used in AuthController but Client.js Schema are differ to which is used for ClientController and Client Middleware.

# Post request URL onSignup
1. First You need to sign up the user with http://localhost:4000/signup
# Sign Up Data
{
    "email": "test1@gmail.com",
    "password": "test1",
    "username": "test1"
}
Passowrd in encrypted form because we use in our project on jwt authentication.
# Sign up Pics
[image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/85b68c06-52e4-4c42-92a0-222be4a39a72)
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/b20b56f9-71b4-4839-9aef-94c652e5827e)

# Post Request URL on LoginPage
2. Second if your sign in then u can login the page on http://localhost:4000/login
# LoginData
{
    "email": "test99@gmail.com",
    "password": "test99"
}
# Login Pics
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/862e1813-1b28-4092-b99b-e851dd3d84cb)
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/3040ca3e-c69c-4644-878b-31e414150fdc)

# Get Requeste URL on Home Page 
3. Get All the client record in our database show on postman http://localhost:4000/getclient
# getClient Data Pics
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/734ecb21-b0ff-46f0-b933-57fd981560a1)
In this pic we shows that our client data is also verify and check with my user because we used in jwt authentication.

# Post Request URL on Home Page
4. Post the client data to add our database on http://localhost:4000/addclient
# Post Data
{
    "firstname": "Test25",
    "lastname": "Test25",
    "phone": "01234567890",
    "activity": "bicycle",
    "description": "5 laps in cycle track",
    "durations": 5,
    "image": "testPic25.PNG",
    "user": "64702aae4778fda713cd8742"
}
user object id pass to join both tables.
# addClient Data Pic
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/c1dd7c6c-1266-4c3f-a6b2-c264927f8167)

# Get request URL by only one unique ID
5. Get the client by its unique ID on http://localhost:4000/getclient/id
# get only one client pics
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/e8da8b52-628e-4853-9173-0297c8220585)

# Put and Patch request by unique id
6. post and patch method using by unique id to update the userdata on http://localhost:4000/updateclient/id
# Post/update the only one user data
{
    "firstname": "Test25",
    "lastname": "Test25",
    "phone": "01234567890",
    "activity": "Hiking",
    "description": "2 steps forward on mountainmountains",
    "durations": 2,
    "image": "testPic25.PNG",
    "user": "64702aae4778fda713cd8742"
}
# Post/update the only one user data pic
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/2c89ef08-3b32-4e8f-8977-c720113b84f6)

# Delete request by unique id
7. delete the user by some unique id in our database http://localhost:4000/deleteclient/id
# pics of delete client
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/dd3141ed-80e4-433c-a505-75bc881461e8)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file 
MONGO_URL = ""
PORT = ""
TOKEN_KEY=""
set the MONGO-URL, Token Key and PORT number.

## Folder and File Structure in our backend project
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/7ff8a7be-9908-4fbb-b84c-f4e2f9b15b84)

1. we create a Controller Folder -> AuthContorller.js and ClientController.js
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/7080ffbb-ad54-4ecd-b4f1-6b7c55646d14)
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/f842651d-030f-4b78-80b2-4362b7efc26f)

2. create a middleware Folder -> AuthMiddleware.js and ClientMiddleware.js
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/c2bd6a5f-e0bc-43eb-8122-e8a693d40e48)
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/fae06780-5b1c-4442-a5df-b77cf1ee4358)

3. create a model folder -> Client.js schema and UserModel.js Schema to set the fields for mongodb database
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/71e1bfa4-11d6-4369-973c-34fb8efc4ec8)
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/097073e3-2780-47be-bcd4-db4a1ef49356)

4. create a Routes folder - > routes define for User and Client to hit the URL.
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/c709c805-2c9d-4f4b-9288-98aefa9b9156)

5. create a util folder - > SecretToken.js and validareClient.js
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/6f00056b-fa66-4b5b-8a4b-ba0e1dbdbef5)
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/29d0744e-51ce-47a2-995b-b4d81015785f)

6. index.js file 
![image](https://github.com/AseefAhmed-coder/login-backend/assets/130729918/03249c31-f2b9-4996-beaa-88c070595a78)

## Author 
Aseef Ahmed

# GITHUB LINK
https://github.com/AseefAhmed-coder

# Guideline
first you need to type npm install then run on npm start command

# Used Node Modules
1. bcrypt
2. bcrypt.js
3. cookie-parser
4. cors
5. dotenv
6. express
7. jsonwebtoken
8. mongoose
9. nodemon
10. validate

# Contact on Email
ahmedaseef6@gmail.com
