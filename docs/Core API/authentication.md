---
slug: /authentication
sidebar_position: 1
title: Authentication
---

The Authentication API is a resource that provide endpoints to authenticate users, recover forgotten password,  authenticates and authorizes a user in Zuri Chat. 


## Endpoints
- POST `/account/request-password-reset-code`
- POST `/account/verify-account`
- POST `/auth​/confirm-password`
- POST `/auth/login`
- POST `/auth/logout`
- POST `/auth/logout/othersessions`
- POST  `/auth/request-reset-password`
- GET `/auth/verify-token`

## Account - Reset password

POST `/account/request-password-reset-code`

With the user's email, you can request for a code to reset your password

Request URL: `https://api.zuri.chat/account/request-password-reset-code`

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
email | string | True | user's email

#### Sample Request

```sh
cURL

curl -X POST "https://api.zuri.chat/account/request-password-reset-code" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"email\":\"eyi@gmail.com\"}"
```

```sh
JSON 

Content-Type: `application/json`

{
  "email": "eyi@gmail.com"
}
```

#### Sample Response
```sh
{
  "status": 200,
  "message": "Password reset code sent",
  "data": null
}
```

#### Error Response
```sh
{
  "status": 400,
  "message": "User not found, confirm and try again!"
}
```

## Account - Verify User Acount
POST `/account/verify-account`

Verify a user's account

Request URL:` https://api.zuri.chat/account/verify-account`

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
email | string | True | user's email
password | string | True | user's password, hence no sharing

#### Sample Request
```sh
cURL

curl -X POST "https://api.zuri.chat/auth/login"
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"email\":\"hng.user01@gmail.com\",\"password\":\"password\"}"

```

```sh
JSON 
Content-Type: `application/json`

{
  "email": "hng.user01@gmail.com",
  "password": "password"
}
```

#### Sample Response

```sh
{
  "code": 200,
  "message": "Password confirm successful"
}

```

#### Error Response
```sh
{
  "status": 400,
  "message": "bad request"
}
```

## Confirm User Password

POST `/auth​/confirm-password`

Confirm a user's password. Requires `cookieAuth` or `bearerAuth` for authorization in the request header.

Request URL: `"https://api.zuri.chat/auth/confirm-password"`

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
email | string | True | user's email
password | string | True | user's password, hence no sharing


#### Sample Request
```sh
cURL
curl -X POST "https://api.zuri.chat/auth/confirm-password" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"confirm_password\":\"string\",\"password\":\"string\"}"
```

```sh
JSON
Content-Type: `application/json`
{
  "confirm_password": "string",
  "password": "string"
}
```
#### Sample Response

```sh
{
  "code": 200,
  "data": null,
  "message": "password confirm successful"
}

```

#### Error Response


```sh
{
  "status": 400,
  "message": ""
}
```



## Login

POST `/auth/login`

Use this endpoint to authenticate a user in the application

Request URL: `https://api.zuri.chat/auth/login`

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
email | string | True | user's email
password | string | True | user's password, hence no sharing

#### Sample Request
```sh
cURL

curl -X POST "https://api.zuri.chat/auth/login"
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"email\":\"hng.user01@gmail.com\",\"password\":\"password\"}"

```

```sh
JSON 
Content-Type: `application/json`

{
  "email": "hng.user01@gmail.com",
  "password": "password"
}
```


#### Sample Response

```sh
{
  "code": 200,
  "data": {
    "session_id": "string",
    "user": {
      "created_at": "2021-09-06 03:54:37.387816",
      "display_name": "samsoft",
      "email": "hng.user01@gmail.com",
      "first_name": "Johnson",
      "id": "613590fd0366b6816a0b75ee",
      "last_name": "Ajayi",
      "phone": "09067324567",
      "status": 0,
      "time_zone": "string",
      "token": "l6TVRneU9ESTBNSHhIZDNkQlIwUlplRTVFVFhwYWFsVXlXa1JCZVU5RVVtbFplbHBvVDFSSmVVMTZUbXBPVVQwOWZFQWpod01iU0E2d1FOUkczQlcwaUZDbHVqUnVOVXFFTHk4QUdGMGhMdkgzIiwiZW1haWwiOiJqYjEyQGdtYWlsLmNvbSIsImlkIjoiNjE0MzNmNTZkMDI4NGJjNmE5MjIzM2M1Iiwib3B0aW9ucyI6ey",
      "update_at": "0001-01-01 00:00:00"
    }
  },
  "message": "string"
}

```

#### Error Response

```sh
{
  "status": 400,
  "message": "User not found, confirm and try again"
}
```


## Logout
POST/GET `/auth/logout`

Use this endpoint to logout a user. You can use either `POST` or `GET` method for your request.
It does not require parameters.

REQUEST URL: `https://api.zuri.chat/auth/logout`

#### Request Header
Authorization: `cookieAuth` or `bearerAuth`

#### Sample Request

```sh
cURL

curl -X POST "https://api.zuri.chat/auth/logout" -H "accept: application/json"
```

#### Sample Response

```sh
{
    "code": 200,
    "message": "Logged out successfully"
}
```

#### Error Response
```sh
{
  "status": 401,
  "message": "unauthorized access"
}
```

## Logout user from all sessions
POST `/auth/logout/othersessions`

Requires `cookieAuth` or `bearerAuth` for authorization to logout a user from all sessions

Request URL: `"https://api.zuri.chat/auth/logout/othersessions"`

#### Request Header

Authorization: `cookieAuth` or `bearerAuth`


#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
email | string | True | user's email

####  Sample Request
```sh
cURL
curl -X POST "https://api.zuri.chat/auth/logout/othersessions"
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"email\":\"string\"}"
```

```sh
JSON 
Content-Type: `application/json`

{
  "email": "user@example.com"
}
```
#### Sample Response
```sh

{
  "code": 200,
  "message": "Logged out successfully"
}
```

#### Error Response

```sh
{
    "status": "401",
    "message" : "unauthorized access"
}
```

## Reset User  Password

POST  `/auth/request-reset-password`

Requires `cookieAuth` or `bearerAuth` for authorization to reset a user's password.

REQUEST URL: "https://api.zuri.chat/auth/request-reset-password"

#### Request Header

Authorization: `cookieAuth` or `bearerAuth`

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
email | string | True | user's email


####  Sample Request
```sh
cURL

curl -X POST "https://api.zuri.chat/auth/request-reset-password"
     -H "accept: */*" 
     -H "Content-Type: application/json" 
     -d "user@example.com"
```

```sh
JSON
Content-Type: `application/json`

{
  "email": "user@example.com"
}
```

#### Sample Response

```sh

{
  "code": 200,
  "message": ""
}
```

#### Error response

```sh
{
    "status": "401",
    "message" : ""
}
```

## Validate User before access is granted

GET `/auth/verify-token`

Requires `cookieAuth` or `bearerAuth` for authorization to verify a user before access is granted to other resources.

REQUEST URL: `"https://api.zuri.chat/auth/verify-token"`

#### Request Header

Authorization: `cookieAuth` or `bearerAuth`

#### Sample Request
```sh
curl -X GET "https://api.zuri.chat/auth/verify-token" -H "accept: application/json"
```

#### Sample Response

```sh
{
  "code": 200,
  "data": {
    "is_verified": true,
    "user": {
      "created_at": "2021-09-06 03:54:37.387816",
      "display_name": "samsoft",
      "email": "hng.user01@gmail.com",
      "first_name": "Johnson",
      "id": "613590fd0366b6816a0b75ee",
      "last_name": "Ajayi",
      "phone": "09067324567",
      "status": 0,
      "time_zone": "string",
      "update_at": "0001-01-01 00:00:00"
    }
  },
  "message": "string"
}
```