Its very simple example of JWT based Authentication

There are two simple routs 
1. Login 
  Request Body : {
      "username" : "anyname",
      "password" : "anypassword"
  }

  respose :{
      "token" : "Here jwt token will be given" 
  }

2. verify 
  Request body :{
      "token" : "pass the tokne which i got in login"
  }  

  respose :{
    "name": "anyname",
    "userId": "123456789", // hardcoded value
    "iat": 1572610024, // issued at timestamp
    "exp": 1572696424 // exp timestamp
}