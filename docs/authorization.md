---
sidebar_position: 2
title: Authorization
---

# Authorization

This document will show you how to authorize API calls.
API calls are authenticated by including the authorization token in the body of the request you make. If you do not include the token when making an API request or use a valid token, an http error will be returned. 

---
## BearerAuth
The authorization token for this account. It gives access to the bearer. This token should be kept a secret and expires in 24 hours.

|  |  |
| ----------- | ----------- |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer|
|  |  |

## CookieAuth
CookieAuth authorizes clients request and maintains session information. It also expires in 24hours.

|  |  |
| ----------- | ----------- |
| Security Scheme Type | API KEY |
| Cookie parameter name: | JSESSIONID|
|  |  |

---
## Verify Token

This endpoint is used to validate the user before access is granted.


Endpoint : `/auth/verify-token`

Request Type : `GET`

Authorization : `cookieAuth` or `bearerAuth`


#### Sample Response

_Content-type:_ `application/json`

```json
{
  "code": 200,
  "message": "string",
  "data": {
    "is_verified": true,
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
      "update_at": "1901-01-01T00:00:00.000Z"
    }
  }
}
```

---
## Errors
When an error occurs, you will receive an error object. Most of these error objects contain an error code and an error description so that your applications can more efficiently identify the problem.

If you get a 4xx response code, then you can assume that there is a bad request from your end. In this case, 
check the [Standard Error Responses](#standard-error-responses) for more context.

5xx errors suggest a problem on server's end.


## Standard Error Responses 
The Authentication API may return the following HTTP Status Codes:

---

### 400  

Bad Request: Indicates that the server cannot or will not process the request due to something that is perceived to be a client error



```bash
RESPONSE SCHEMA:   application/json
    {
        code: integer
        message: string
    }

 ```



### 401 

Unauthorized: No valid token provided 

```bash
RESPONSE SCHEMA:   application/json
    {
        code: integer
        message: string
    }

 ```

 ### 422 
 
 Unprocessable entity: indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions

```bash
RESPONSE SCHEMA:   application/json
    {
        code: integer
        message: string
    }

 ```

### 500 

Server Errors: Something went wrong on our end. 
(This doesn't happen often 🌚)

```bash
RESPONSE SCHEMA:   application/json
    {
        code: integer
        message: string
    }

 ```