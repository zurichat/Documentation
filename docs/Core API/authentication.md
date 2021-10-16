---
slug: /authentication
sidebar_position: 1
title: Authentication
---

The Authentication API enables you to manage and access Zuri core resources. It offers endpoints so users can log in, log out, access APIs, and more.

The API supports two identity protocols: **JWT Token** and **Session**.


### Base URL

The auth API is served over HTTPS. All URLs referenced in this doc have the following base [https://api.zuri.chat](https://api.zuri.chat)

### Authentication methods

There are two ways to authenticate

- JWT Token
- Session


## Endpoints
- POST `/account/request-password-reset-code`
- POST `/account/verify-account`
- POST `/auth​/confirm-password`
- POST `/auth/login`
- POST `/auth/logout`
- POST `/auth/logout/othersessions`
- POST  `/auth/request-reset-password`
- GET `/auth/verify-token`
- GET `/auth/social-login/{Provider}/{access_token}`
- POST `/account/verify-reset-password`

## Request Reset Password code

POST `/account/request-password-reset-code`

Validates the user's email address, generates a password reset code, and sends the reset code to an email address. This API is called when a user requests a password reset. If successful, this operation returns HTTP status code 200.

Request URL: `https://api.zuri.chat/account/request-password-reset-code`

#### Request Body

Name | Required | Description
------- | ------- | -------
email | True | user email address

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
```json
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

## Verify User Account
POST `/account/verify-account`

This API handles user email confirmation, this API is called after user registration. Accept POST request method.

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

## Confirm Password

POST `/auth​/confirm-password`

Given a user's password and confirm password, this endpoint will confirm if the user password is valid, you can use this API when you want to switch user workspace or give access to private resources. Requires `cookieAuth` or `bearerAuth` for authorization in the request header.

Request URL: `"https://api.zuri.chat/auth/confirm-password"`

#### Request Body

Parameter | Required | Description
------- | ------- | -------
password | True | User password
confirm_password | True | User confirm password


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

Use this endpoint to authenticate a user and get Access Token in order to call an API. Optionally, you can also access request cookies for authentication, accept the POST request method, and return a status code of 200

Request URL: `https://api.zuri.chat/auth/login`

#### Request Body

Parameter |  Required | Description
------- |  ------- | -------
email |  True | Valid user email address
password |  True | User password

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

```json
{
    "status": 200,
    "message": "login successful",
    "data": {
        "session_id": "616022964f2104d6ab206419",
        "user": {
            "id": "6156387c5a1ecabe7f31af35",
            "first_name": "Abiona",
            "last_name": "Quadrat A. ",
            "display_name": "",
            "email": "quadratadewemi@gmail.com",
            "phone": "+2347062349012",
            "status": 0,
            "time_zone": "Africa/Lagos",
            "created_at": "2021-09-30T22:21:48.163347861Z",
            "updated_at": "0001-01-01T00:00:00Z",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb29raWUiOiJNVFl6TkRFeU56ZzROWHhIZDNkQlIwUlplRTVxUVhsTmFtc3lUa2RaZVUxVVFUQmFSRnBvV1dwSmQwNXFVWGhQVVQwOWZLNUszWWdxbUxjWjNlcjRRLXNzMERudGN4XzBxbTg1OGJiQVVjZ2hvMW0xIiwiZW1haWwiOiJhZGV3ZW1pbW9hYmlvbmFAeWFob28uY29tIiwiaWQiOiI2MTYwMjI5NjRmMjEwNGQ2YWIyMDY0MTkiLCJvcHRpb25zIjp7IlBhdGgiOiIvIiwiRG9tYWluIjoiIiwiTWF4QWdlIjo3OTQxMzI3ODU2LCJTZWN1cmUiOmZhbHNlLCJIdHRwT25seSI6ZmFsc2UsIlNhbWVTaXRlIjowfSwic2Vzc2lvbl9uYW1lIjoiZjY4MjJhZjk0ZTI5YmExMTJiZTMxMGQzYWY0NWQ1YzcifQ.6TI0frwwaC-o_0xZt7wEHGCy-dBihGB9yL3N8th3btE"
        }
    }
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

### Logout User Session

Use this endpoint to log out user sessions, accept the POST request method and return 200 on successful logout. You can use either `POST` or `GET` method for your request.
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

### Logout Other Session

Use this endpoint to log out user sessions from all devices.

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

### Verify Token

Use this endpoint to verify the user access token

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
### Social Login

This endpoint handles social login for both Facebook and Google. To use this endpoint, you need to specify the provider name and access token gotten from the provider. it'll return status code 200 and access token

Request Method: GET
GET `/auth/social-login/{Provider}/{access_token}`


### Verify Reset Password

This endpoint validates a password reset code, if successful, this operation returns HTTP status code 200.

**Request Method**: POST
POST `/account/verify-reset-password`

#### Request Body

Parameter | Required | Description
------- | ------- | -------
code | True | Verification code sent to user email address

#### Sample Response
```json
{
  "status": 200,
  "message": "Password reset code valid",
  "data": {
    "isverified": true
  }
}
```

### Update Password

This endpoint validates a password reset code and update user's password

**Request Method**: POST
POST `/account/update-password/{verification_code:[0-9]+}`

#### Request Body

Parameter | Required | Description
------- | ------- | -------
password | True | 
confrim_password | True

#### Sample Response
```json
{
  "status": 200,
  "message": "Password update successful",
  "data": null

}
```