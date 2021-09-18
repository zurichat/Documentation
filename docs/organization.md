# Zuri Chat Core API
Zuri Chat is an open source website, it offers a lot of functionality via a plugin system where each room can be provided by a different plugin provider.


## Using the Organisation Resource

The organization resource has various endpoints listed below:

- GET /organisations
- POST /organisations
- GET /organizations /{organization_id}
- DELETE /organizations/{organization_id}
- PATCH /organizations /{organization_id} /url
- PATCH /organizations /{organization_id} /name
- PATCH /organizations /{organization_id} /logo
- PUT /organizations /{organization_id} /members /{member_id}
- DELETE /organizations /{organization_id} /members /{member_id}

Organization-Member Resource also has its endpoints listed below:

- GET /organizations /{organization_id} /members
- POST/organizations /{organization_id} /members
 
## Error
When an error occurs, an error object is recieved. A `4xx` response code indicates the access token is missing or invalid. In this case, 
check the [Standard Error Responses](#standard-error-responses) for more context. `5xx` errors suggest a problem on server's end.

There are ways to use the organisation resource 
- To list all the organisations a user belong to in the zuri-chat app
- List members within a particular organisation 

How to use the organisation resource to get a list of organisations that users are signed into on the zuri-chat app

## Authorizations
 Authorizations are done through <br>
 **Bearer Authentication**

|  |  |
| ----------- | ----------- |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer|
| Bearer format | "JWT" |
|  |  |

 **Cookie Authentication**
 |  |  |
| ----------- | ----------- |
| Security Scheme Type | API Key |
| Cookie parameter name: | JSESSIONID|
|  |  |
  
 
Copy the curl

 ```
curl -X 'GET' \
  'https://api.zuri.chat/v1/organizations/6137d69b21d3c78fc9a84bdf/members' \
  -H 'accept: application/json'
 ```


Paste the curl call in the part of your code where the endpoint is needed


> Note: There is a need for authentication.
The responses are in JSON format, examples are given below . 

### Responses with Code Description Examples
**Response for a successful returned list of members in this format**
```sh
{
code*	integer($int32)
example: 200
message*	string
data	[...]
}
 ```

**Example** <br>
**200**
Successfully returned list of members in an organization, including an empty array if there are no members

```sh
{
  "code": 200,
  "message": "string",
  "data": [
    {
      "_id": "6137d69b21d3c78fc9a84bdf",
      "orgId": "6137d69b21d3c78fc9a84bdf",
      "files": {},
      "image_url": "https://image.location/image.png",
      "name": "string",
      "email": "user@example.com",
      "display_name": "string",
      "bio": "string",
      "pronouns": "string",
      "phone": "string",
      "time_zone": "string",
      "joined_at": "2021-09-14"
    }
  ]
}
```
# Create an Organization

## Endpoint
<details>
  <summary> POST/organization </summary>

Request url: [Zuri Organization  Api](https://api.zuri.chat/organizations)

 </details>

 This is a request endpoint that creates an organizaion or workspace. It requires the creators email which will need to be a valid email.
 ## Example
- This is an example of a cURl request that is used to transfer data to the server  in this instance.
```sh
curl -X 'POST' \
  'https://api.zuri.chat/organizations' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "creator_email": "string”
}'
```
 **Content type:** <br> application/json

## Responses:
   ### **201:**  Successfully created the resource
  **Content type:** <br> application/json
    
```sh
Response body:
  {
  "code": 201,
  "message": "string",
  "data": {
    "InsertedID": "6137d69b21d3c78fc9a84bdf"
    }
  }
  ```
  ## Dart Example
- Add http package dependency
```sh
dependencies:
  http: ^0.13.3
```
- Import in your file
```sh
import 'package:http/http.dart';
```
- Use the url prefix
```sh
static const urlPrefix = 'https://api.zuri.com/organizations';
```
```sh
Future<void> makePostRequest() async {
  final url = Uri.parse('$urlPrefix');
  final headers = {"Content-type": "application/json"};
  final json = '{"creator_email": "hng@test.com"}';
  final response = await post(url, headers: headers, body: json);
  print('Status code: ${response.statusCode}');
  print('Body: ${response.body}');
}
```
You can use [dart:convert](https://flutter.io/docs/development/data-and-backend/json#serializing-json-manually-using-dartconvert) to convert the raw JSON string to objects. See [Parsing Simple JSON in Flutter and Dart](https://medium.com/@studymongolian/parsing-simple-json-in-flutter-83ee1809a6ab) for help with that.

  
# Get an organization using the Organizarion Id

## Endpoint
<details>
  <summary> GET/organizations </summary>

Request url: [Zuri Organization  Api]https://api.zuri.chat/organizations/{organization_id}

 </details>

- Parameter: This is the information required by this endpoint to get infoormation from the server
Required*
```sh
	organization_id : “string”
```
Example ;<br>
```
organization_id: 6137d69b21d3c78fc9a84bdf
```
## Response:
   ### **200:** Successfully retrieve the resource
  **Content type:** <br> application/json
    
```sh
Response body:

  {
  "code": 200,
  "message": "string",
  "data": {
    "_id": "6137d69b21d3c78fc9a84bdf",
    "name": "HNG",
    "creator_email": "hng@email.com",
    "creator_id": "6137d69b21d3c78fc9a84bdf",
    "logo_url": "hng.zuri.chat",
    "created_at": "2021-09-14",
    "deleted_at": "2021-09-14",
    "organization_settings": {
      "global_settings": {
        "allow_user_add_plugins": true,
        "allow_only_admin_invite": true
      },
      "plugin_settings": {
        "chess_plugin": {
          "allow_in_every_channel": false
        }
         }
    }
  }
}
```

# Delete An Organisation
This delete an existing organization using the unique Id of the organization which all organization have.

### Endpoint
<details>
  <summary> POST/organizations </summary>

Request url: [Zuri Organization  Api]https://api.zuri.chat/organizations

 </details>

### Response
```
RESPONSE SCHEMA:      Application/json
code required         integer <int32>
message required      string
```
For example; <br>
**Content type** <br>
application/json


````
{
"code": 200,
"message": "resource deleted successfully",
  
}
````
# Update Organization Url
Enables an authenticated organization owner to update the organization's url.


## End-Point 
<details>
<summary>  PATCH  /organizations/{organization_id}/url}
 </summary>
Zuri Chat Core API

https://api.zuri.chat/organizations/{organization_id}/url

</details>


### REQUEST SAMPLE
How requests are made.

**content type** <br> application/json

```
{ 

"url": "https://hngworkspace.zuri.chat"

}
```

## Response
Its requires an interger code and string messsage.

 ### **200** Successfully updated the resource <br>

```
RESPONSE SCHEMA: application/json

code required      integer <int32> 
message required   string 

```

## Example <br>

**content type** <br> application/json

```
{ 

"code": 200,
"message": "resource updated successfully"

}
```
For 4xx and 5xx the interger code error and string message with be displayed.

# Get an organization by its URL
Returns the organization with the given full URL. The URL does not have to be truncated to the root, it can be to any resource on the URL.

## End-Point 
<details>
<summary>  GET /organizations/url/{workspace_url}
 </summary>
Zuri Chat Core API

https://api.zuri.chat/organizations/url/{workspace_url}

</details>

Response
### **200** means the resource have been successfully retrieved <br>

```
RESPONSE SCHEMA: application/json

code required      integer <int32> 
message required   string 
data required      object(organization)

```

Example: <br>
**content type** <br> application/json

```
{ 

"code": 200,
"message": "string",
- "data": {
"_id": "6137d69b21d3c78fc9a84bdf",
"name": "HNG",
"creator_email": "hng@email.com",
"creator_id": "6137d69b21d3c78fc9a84bdf",
"logo_url": "hng.zuri.chat",
"created_at": "2019-08-24",
"deleted_at": "2019-08-24",
+ "organization_settings": {...}
}

}
```
For 4xx and 5xx the interger code error and string message with be displayed.

# Organization-Plugin
Get all plugins from an organization.
### End-Point 
<details>
<summary> GET/organizations </summary>
Zuri Chat Core API

https://api.zuri.chat/organizations/{organization_id}/plugins

</details>

## Response
**200** Successfully returned list of plugins from an organization, including an empty array if there are no plugins

```
RESPONSE SCHEMA:         Application/json
code required            integer<int32>
message required         string
data >                   Array of objects (plugin)
```
## Response Sample
**content type** <br> application/json

```
{ 

"code": 200,
"message": "string"
- "data":[
  + {...}
]
}

```

## Add a plugin to an Organization

```
 REQUEST BODY SCHEMA:     application/json 
 plugin_id                integer  <This is the id of the plugin to be added to the organization>
 user_id                  integer <This is the id of the user adding a plugin to the organization>
```



### Response
**201** Successfully created the resource
```
RESPONSE SCHEMA:         Application/json
code required            integer<int32>
message required         string
data >                   object
```
## Response Sample
**content type** <br> application/json

```
{ 

"code": 201,
"message": "string"
- "data": {
       "InsertedID": "6137d69b21d3c78fc9a84bdf"
}
}

```


# Update Organization Name

## Authorization 
### End-Point 
<details>
<summary> PATCH/organizations </summary>
Zuri Chat Core API

https://api.zuri.chat/organizations/{organization_id}/name

</details>


### Request Sample
**content type** <br> application/json

```
{ 

"organization_name": "hngworkspace"

}
```

 ## Response
 ### **200** Successfully updated the resource
**RESPONSE SCHEMA:** application/json

  ```
code required            integer<int32>
message required         string
```
## Response Sample
**content type** <br> application/json

```
{ 

"code": 200,
"message": "resource updated successfully"

}

```

# Update Organization Logo
Adding or changing a verified organization logo.
### End-Point 
<details>
<summary> PATCH/organizations </summary>
Zuri Chat Core API

https://api.zuri.chat/organizations/{organization_id}/logo

</details>

### Request Sample <br>
**content type** <br> application/json

  ```
{ 

"url": "https://image.storage/image.png"

}

```

## Response
**200** Successfully updated the resource

```
RESPONSE SCHEMA:         Application/json
code required            integer<int32>
message required         string
```
## Response Sample
**content type** <br> application/json

```
{ 

"code": 200,
"message": "resource updated successfully"

}

```




# Organization Members  
 
## Get a list of members in an organization: 
To get a list of members in an organization, send a **GET** request to this address `https://api.zuri.chat/organizations/{organization_id}/members/`
along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization.
Replace `{organization_id}` with the Id of the organization you want to list its members. 
> e.g.  `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/`. 

*The response returns a success 200 code and the list of all members in the specified organization Id in json format and an empty array if there are no members* 
 
 
## Add user to an organization
To add a user to an organization, send a **POST** request to this address 
`https://api.zuri.chat/organizations/{organization_id}/members`, along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization. 
Replace `{organization_id}` with the Id of the organization you want to add a user. 
> e.g. `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/` 

Then in the body of the request provide the Id of the user you want to add in json format. e.g
```sh
{ “user_id”: “6137d69b21d3c78fc9a84bdf” }
``` 
*The response returns a success 201 code and confirmation data in json format.* e.g.
```sh
{
  "code": 201,
  "message": "string",
  "data": {
    "InsertedID": "6137d69b21d3c78fc9a84bdf"
  }
}
```

## Get a record of a member in an organization
To get a record of a member in an organization, send  a **GET** request to this address `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}` along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization. 
Replace `{organization_id}` with the Id of the organization you want to fetch a member record from and replace {member_id} with the Id of the member you want to get their record.
> e.g. `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf`

*The response returns a 200 success code and the full record of the specified member in json format.* e.g.
```sh
{
  "code": 200,
  "message": "string",
  "data": {
    "_id": "6137d69b21d3c78fc9a84bdf",
    "orgId": "6137d69b21d3c78fc9a84bdf",
    "files": {},
    "image_url": "https://image.location/image.png",
    "name": "string",
    "status": "string",
    "email": "user@example.com",
    "display_name": "string",
    "bio": "string",
    "pronouns": "string",
    "phone": "string",
    "time_zone": "string",
    "joined_at": "2019-08-24"
  }
}
```

## Update User
This endpoint will be used to update the user's organization information. e.g user roles and permissions.

**PUT** request to this address https://api.zuri.chat/organizations/{organization_id}/members/{member_id} along with the authentication (cookie/bearerAuth) in the request header for organization.
Replace the '{organization_id}' with the oragization the user is in and also replace the {member_id} with the users id in the organization. 
> e.g. https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf.

The body of the request contains the key-value pair of the item you want to update in the member record in json format.
```sh 
  e.g. {"data": 2}
  ```
* The response returns a succes 200 code and confirmation data in json format.  
 ```sh 
 e.g. {
  "code": 200,
  "message": "resource updated successfully"
}
  ```


## Delete User
This endpoint will be used to remove a user from an organization

**DEL** request to this address https://api.zuri.chat/organizations/{organization_id}/members/{member_id} along with the authentication (cookie/bearerAuth) in the request header for organization.
Replace the '{organization_id}' with the Id of the oragization the user is in and also replace the {member_id} with the users id in the organization. 
> e.g. https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf.
* The response returns a succes 200 code and confirmation data in json format.  
 ```sh 
 e.g. {
  "code": 200,
  "message": "resource updated successfully"
}
  ```
## Update member status for an organization:
To update member status of  a member of an organization send a **PATCH** request to this address 
 `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/status`
along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization. 
Replace `{organization_id}` with the Id of the organization you want to update it's member status and replace `{member_id}` with the Id of the member you want to update their status.
> e.g. `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/status`

Then in the body of the request provide the status and its value in json format. 
```sh
e.g. { “status”: “Available” } 
```
*The response returns a success 200 code and confirmation data in json format.* e.g.
```sh
{
  "code": 200,
  "message": "resource updated successfully"
}
```
## Update member profile picture for an organization:
To update profile picture  of  a member of an organization send a **PATCH** request to this address `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/photo` along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization. 
Replace `{organization_id}` with the Id of the organization you want to update the profile picture of  it's member and replace `{member_id}` with the Id of the member you want to update their profile picture.
> e.g. `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/photo`

Then in the body of the request provide "image_utl" and the image link as a key-value pair in json format. 
```sh
e.g. { “image_utl”: “https://image.storage/image.png” } 
```
*The response returns a success 200 code and confirmation data in json format.* e.g.
```sh
{
  "code": 200,
  "message": "resource updated successfully"
}
```

## Update member profile for an organization:
To update profile of a member of an organization send a **PATCH** request to this address `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/profile` along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization. 
Replace `{organization_id}` with the Id of the organization you want to update the profile of  it's member and replace `{member_id}` with the Id of the member you want to update their profile.
> e.g. `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/profile`

Then in the body of the request provide the key-value pair of the item you want to update in json format. 
```sh
e.g. { “data”: “string” } 
```
*The response returns a success 200 code and confirmation data in json format.* e.g.
```sh
{
  "code": 200,
  "message": "resource updated successfully"
}
```
## Toggle a member presence (Away/Active):
To update profile of a member of an organization send a **POST** request to this address `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/presence` along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization. 
Replace `{organization_id}` with the Id of the organization you want to toggle the presence status of  it's member and replace `{member_id}` with the Id of the member you want to toggle their presence status.
> e.g. `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/presence`

*The response returns a success 200 code and confirmation data in json format.* e.g.
```sh
{
  "code": 200,
  "message": "resource updated successfully"
}
```
## update a member settings field(s):
To update a member settings field(s) in an organization send a **PATCH** request to this address `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/settings` along with aunthentication(cookieAuth/bearerAuth) in the request header for authorization. 
Replace `{organization_id}` with the Id of the organization you want to update it's member settings field(s) and replace `{member_id}` with the Id of the member you want to update their settings field(s).
> e.g. `https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/settings`

Then in the body of the request provide the key-value pair of the settings you want to update in json format. 
```sh
e.g. { 
- “global_settings”: {
                “allow_user_add_plugins”:true,
                   "allow_only_admin_invite":true
        } ,
- "plugin_settings": {
       + "chess_plugin": {...}
       }
}
```
*The response returns a success 200 code and confirmation data in json format.* e.g.
```sh
{
  "code": 200,
  "message": "resource updated successfully"
}
```


## Standard Error Responses 
The Authentication API may return the following HTTP Status Codes:

**401 Response when access token is missing or invalid**
```sh
{
code*	integer($int32)
example: 401
message*	string
}
 ```
**Example**
```sh

401
Access token is missing or invalid
{
  "code": 401,
  "message": "string"
}
```
**500 Response when internal server error occurs during operation**
```sh
{
code*	integer($int32)
example: 500
message*	string
}
 ```
**Example**
```sh
{
  "code": 500,
  "message": "string"
}
```
