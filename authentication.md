
# Zuri Chat Core API (Authentication Endpoints) (1.0.0)

Download OPenApi specification: [Download](auth.4cf62435.yaml)

Connect With Us: `developer@zuri.chat` <br>
Zuri Chat is an open source slack clone. However, it offers a lot more functionality via a plugin system where each room can be provided by a different plugin provider.



# Authentication
The Authentication API enables you to manage all aspects of user identity when you use Auth. It offers endpoints so your users can log in, log out, access APIs, and more.

## **BearerAuth**
The authorization token for this account. It's gives access to the bearer. This token should be kept a secret, so no sharing. Its expires in 24hours.

|  |  |
| ----------- | ----------- |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer|
|  |  |
## **CookieAuth**
It authorizes clients request and maintains session information. Its expires in 24hours.

|  |  |
| ----------- | ----------- |
| Security Scheme Type | API KEY |
| Cookie parameter name: | JSESSIONID|
|  |  |



## **Errors**
When an error occurs, you will receive an error object. Most of these error objects contain an error code and an error description so that your applications can more efficiently identify the problem.

If you get a 4xx response code, then you can assume that there is a bad request from your end. In this case, 
check the [Standard Error Responses](#standard-error-responses) for more context.

5xx errors suggest a problem on server's end.



 ## **Testing** <br>
This particular endpoint doesn't have a parameter. The body of the request contains an email address which require a string value and password which requires a string value.


## End-Point
<details>
  <summary> POST/auth/login </summary>
Zuri Chat Core API

https://api.zuri.chat/auth/login
 </details>


## Authentication request to access protected resources

```
REQUEST BODY SCHEMA: application/json

email               String<email> 
password            String<password> 

```
## Sample request

How to make log in request

**content type** <br> application/json

```
{ 

"email": "user@example.com",
"password": "pa$$word"

}
```


## Responses


 ### **200** login successful <br>

```
RESPONSE SCHEMA: application/json

code required      integer <int32> 
message required   string 
data required      object

```
## Response Sample

**Content type** <br>
application/json


````
{
"code": 200,
"message": "string",
- "data": {
"session_id": "string",
+ "user": {...}
}
}
````


Response for 4xx and 5xx requires the int error code and a string message. For example; <br>

**Content type** <br>
application/json

```
{ 

"code": 400,
"message": "string"

}

```



# Authentication request to logout 
The request can be made via two endpoints `Get` and `POST`.


## End-Point 1
<details>
<summary> GET/auth/logout </summary>
Zuri Chat Core API

https://api.zuri.chat/auth/logout

</details>

## End-Point 2
<details>
<summary> POST/auth/logout </summary>
Zuri Chat Core API

https://api.zuri.chat/auth/logout

</details>

## **Responses**

**200** Logged out successfully <br>
```
RESPONSE SCHEMA:    application/json

code required       integer <int32>
message required    string

```

## Response Sample
The code interger and string message are shown. For example; <br>

**Content type** <br>
application/json

```
{

"code": 200,
"message": "string"

}
```

# Validation

validates the user before access is granted.

 ### AUTHORIZATIONS:  `cookieAuth` or `bearerAuth`
## Endpoint
<details>
<summary> GET/auth/verify-token </summary>
Zuri Chat Core API

https://api.zuri.chat/auth/verify-token
</details>

## Responses

### **200** Token verification successful <br>

```
RESPONSE SCHEMA :   application/json

code required       integer <int32> 
message required    string 
data required       object

```

## Response sample

**Content type** <br>
application/json


````
{
"code": 200,
"message": "string",
- "data": {
"is_verified": true,
+ "user": {...}
}
}
````

Response Sample for the rest (4xx and 5xx) will display the interger error code and string message.


# Password

## Confirm user password 
verify user password

## End-Point 
<details>
<summary> POST/auth/confirm-password </summary>
Zuri Chat Core API

https://api.zuri.chat/auth/confirm-password

</details>

### **AUTHORIZATIONS: `cookieAuth` or `bearerAuth`**

```
REQUEST BODY SCHEMA: application/json

email               String<email> 
password            String<password> 

```

### Request sample

**content type** <br> application/json

```
{ 

"email": "user@example.com",
"password": "pa$$word"

}
```

### Response Sample

**Content type** <br>
application/json

```
{

"code": 200,
"message": "Password confirm successful"

}

```
For 4xx and 5xx the interger code error and string message with be displayed.

## Password Reset
Resets user password

## End-Point 
<details>
<summary> POST/auth/request-reset-password </summary>
Zuri Chat Core API

https://api.zuri.chat/auth/request-reset-password

</details>

```
REQUEST BODY SCHEMA: application/json

email               String<email> 


```

### **Request Sample** <br>
Request is made by inputing a string <br>
**Content type** <br>
application/json

```
"user@example.com"

```

## Response
**Default** If there are no errors, email for  password reset is sent to the submitted email, else the interger code error and string message is displayed.

### Response Sample
**Content type** <br>
application/json

```

{
    "code" : 400
"message" : "string"
}

```


## Standard Error Responses 
The Authentication API may return the following HTTP Status Codes:

---

### **400**  An icorrect client request <br>

```
RESPONSE SCHEMA: application/json

code required      integer <int32> 
message required   string

 ```



### **401** Is the error that shows up because the request is unauthorized <br>

```
 RESPONSE SCHEMA:   application/json

code required        integer <int32>
message required     string


```

 ### **422** Server unable to process contained information e.g API behavior <br>

```
RESPONSE SCHEMA: application/json

code required      integer <int32> 
message required   string 

```

### **500** Comes up when internal server error occured during operation

```

RESPONSE SCHEMA:     application/json

code required         integer <int32>
message required      string

```