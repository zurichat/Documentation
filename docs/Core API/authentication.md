---
slug: /authentication
sidebar_position: 1
title: Authentication
---

# Authentication
The Authentication API enables you to manage all aspects of user identity. It offers endpoints so your users can log in, log out, access APIs, and more.




## Login

This endpoint is used to sign a user into the application.

Endpoint : `/auth/login`

Request Type : `POST`

Request Body Schema: `application/json`


#### Request Body Params

Params | Required | Description
------- | ------- | -------
email | Yes | String 
password | Yes | String

#### Sample Request



```json
  { 

    "email": "user@example.com",
    "password": "pa$$word"

  }
```


#### Sample Response


_Content-type:_ `application/json`


```json
{
  "code": 200,
  "message": "string",
  "data": {
    "session_id": "string",
    "user": {
      "id": "613590fd0366b6816a0b75ee",
      "first_name": "Johnson",
      "last_name": "Ajayi",
      "display_name": "samsoft",
      "email": "hng.user01@gmail.com",
      "phone": "09067324567",
      "status": 0,
      "time_zone": "string",
      "created_at": "2021-09-06T03:54:37.387Z",
      "update_at": "1901-01-01T00:00:00.000Z",
      "token": "l6TVRneU9ESTBNSHhIZDNkQlIwUlplRTVFVFhwYWFsVXlXa1JCZVU5RVVtbFplbHBvVDFSSmVVMTZUbXBPVVQwOWZFQWpod01iU0E2d1FOUkczQlcwaUZDbHVqUnVOVXFFTHk4QUdGMGhMdkgzIiwiZW1haWwiOiJqYjEyQGdtYWlsLmNvbSIsImlkIjoiNjE0MzNmNTZkMDI4NGJjNmE5MjIzM2M1Iiwib3B0aW9ucyI6ey"
    }
  }
}
```


---

## Logout

This endpoint is used to sign a user out of the application. The request can be made via either `GET` or `POST`.

Endpoint : `/auth/logout`

Request Type : `GET` or `POST`



#### Sample Response

_Content-type:_ `application/json`

```json
{
  "code": 200,
  "message": "string"
}
```

---
## Confirm user password

This endpoint is used to verify a user password.

Endpoint : `/auth/confirm-password`

Request Type : `POST`

Request Body Schema: `application/json`

Authorization : `cookieAuth` or `bearerAuth`


#### Request Body Params

Params | Required | Description
------- | ------- | -------
email | Yes | String 
password | Yes | String

#### Sample Request



```json
  { 

    "email": "user@example.com",
    "password": "pa$$word"

  }
```

#### Sample Response

_Content-type:_ `application/json`

```json
{
  "code": 200,
  "message": "Password confirm successful"
}
```

---
## Reset user password
This endpoint is used to reset a user password.

Endpoint : `/auth/request-reset-password`

Request Type : `POST`

Request Body Schema: `application/json`

Authorization : `cookieAuth` or `bearerAuth`


#### Request Body Params

Params | Required | Description
------- | ------- | -------
email | Yes | String 

#### Sample Request


```json
  { 

    "email": "user@example.com",

  }
```

#### Response


```bash
  Default If there are no errors, 
  email for  password reset is sent to the submitted email, 
  else the interger code error and string message is displayed.
```


