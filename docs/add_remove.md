### Add/Remove Endpoints For All Plugins

## Brief
Contains all the add/remove endpoints/instructions for all teams

---
## Zuri Main
---
## Create User Account
To use zuri chat you need to sign up or sign in if you already have an account.
Follow the steps below to sign up as a new user.

1. Visit the [home page](https://zuri.chat)
2. Click on 'sign up'
3. Enter your details in the required fields
4. Click on submit
5. Verify your account

---
## Zuri Core
---
## Create organization
POST `/organizations`

This is a request endpoint that creates an organization or workspace. It requires the creator's email as a parameter.

REQUEST URL: `https://api.zuri.chat/organizations`

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
creator_email| string | True | creator's email for the organization. Must be a valid email.
#### Sample Request
```sh
curl -X POST "https://api.zuri.chat/organizations"
     -H "accept: application/json" 
     -H "Content-Type: application/json" -d "{\"creator_email\":\"hng@email.com\"}"
```

```sh
JSON
Content-Type: application/json
	{
		"creator_email": "hng@email.com"
	}
```

#### Sample Response

```sh
    {
      "code": 201,
      "message": "string",
      "data": {
        "InsertedID": "6137d69b21d3c78fc9a84bdf"
        }
    }
```
#### Error Response

```sh
{
  "status": "400",
  "message": "bad request"
}
```
## Delete organization
DELETE `/organizations`

This endpoint allows you to delete an existing organization.

REQUEST URL: `https://api.zuri.chat/organizations`

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
 organization_id | string | True | organization ID

#### Sample Request

```sh
curl -X DELETE "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf" 
     -H "accept: application/json"
```

```sh
JSON
Content-Type: application/json
	{
		"organization_id": "6137d69b21d3c78fc9a84bdf"
	}
```

#### Sample Response

```sh
{
"code": 200,
"message": "resource deleted successfully",
  
}
```
#### Error Response

```sh
{
  "status": "401",
  "message": "No Authorization or session expired."
}
```
---
## Add user to organization
POST `organizations/{organization_id}/members`

Adds a new user to an organization. This request requires the `organization_id` as a path parameter.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/members`
#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID

#### Sample Request

```sh
curl -X POST "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"user_email\":\"user@email.com\"}"
```

```sh
JSON
Content-Type: application/json
	{
		"user_id" : "user@email.com"
	}
```

#### Sample Response

```sh
    {
        "code": 201,
        "message": "string",
        "data": {
            "InsertedID": "6137d69b21d3c78fc9a84bdf"
        }
    }
```

## Deactivate organization 
DELETE `organizations/{organization_id}/members/{member_id}`

This endpoint will be used to deactivate/remove a user from an organization.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Sample Request
```sh
curl -X DELETE "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf" 
-H "accept: application/json"
```

#### Sample Response

```sh
	{
		"status": "200",
		"message": "resource updated successfully",
	}
```
## DATA
## Write Data
POST `/data/write`

A plugin will add new data to the database. `organization_id`, `plugin_id`, `collection_name` must be included in the request. There are no parameters for this endpoint

REQUEST URL: 

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
bulk_write | boolean | False | the value indicates whether many documents will be written or not
collection_name | string | True | the name of the collection to insert data inside
filter | object| False | query to be matched
object_id | string | False| ID of the inserted data
organization_ID | string | True | organization ID
payload | object |True | contains `description` with the actual data to be inserted into the database
plugin_ID | string | True | the Plugin ID

#### Sample Request

```sh
cURL 
curl -X PUT "https://api.zuri.chat/data/write" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"bulk_write\":true,
         \"collection_name\":\"mycollection\",
         \"filter\":{},
         \"object_id\":\"string\",
         \"organization_id\":\"string\",
         \"payload\":{},
         \"plugin_id\":\"string\"}"
```

```sh
JSON 
Content-Type: `application/json`
{
 "plugin_id": "xxx",
 "organization_id": "xxx",
 "collection_name": "mycollection",
 "bulk_write": false,
 "object_id": "xxxx",
 "filter": {},
 "payload": {}
}
```

#### Sample Response
```sh
{
  "data": {
    "insert_count": 0,
    "object_id": "string"
  },
  "message": "data inserted successfully",
  "status": "201"
}
```

#### Error Response

You will get an error if one or more of the required fields is missing or incorrect.
```sh
{
    "status":404,
    "message":"plugin with this id does not exist"
    }
```
## Delete Data

POST `/data/delete/`

Remove data about a plugin from the database. The bulk_delete and filter properties are used to delete multiple records. filter will contain the query to be matched and bulk_delete must be set to true to use this filter property.

There are no parameters for this endpoint.

REQUEST URL:

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
bulk_delete | boolean | False | the value indicates whether many documents will be deleted or not
collection_name | string | True | the name of the collection to insert data inside
filter | object| False | query to be matched
object_id | string | False| ID of the inserted data
organization_ID | string | True | organization ID
payload | object |True | contains `description` with the actual data to be inserted into the database
plugin_ID | string | True | the Plugin ID

#### Sample Request

```sh
cURL 
curl -X PUT "https://api.zuri.chat/data/write" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"bulk_delete\":false,
         \"collection_name\":\"mycollection\",
         \"filter\":{},
         \"object_id\":\"string\",
         \"organization_id\":\"string\",
         \"payload\":{},
         \"plugin_id\":\"string\"}"
```

```sh
JSON 
Content-Type: `application/json`
{
 "plugin_id": "xxx",
 "organization_id": "xxx",
 "collection_name": "mycollection",
 "bulk_delete": false,
 "object_id": "xxxx",
 "filter": {},
 "payload": {}
}
```


#### Sample Response
```sh
{
  "data": {
    "deleted_count": "0"
  },
  "message": "data deleted successfully",
  "status": "200"
}
```

#### Error Response

You will get an error if one or more of the required fields is missing or incorrect.
```sh
{
    "status":404,
    "message":"not found"
}
```
## USERS
## Create a new user
POST `/users`

Create a new user account. Accepts a request with a body of email, etc. Returns the user ID.

REQUEST URL: https://api.zuri.chat/users

#### Body Request

Name | Data Type | Required | Description
------- | ------- | ------- | -------
first_name       |  string | True  | user's first name
| last_name      | string   | True | user's last name
| phone_number   | string   | True | user's phone number
| password       | string   | True | password; no sharing
| email          | string   | True | user's email
| email_verified | boolean  | False | checks if user's email is verified. Default:`false`

#### Sample Request
```sh
curl -X POST "https://api.zuri.chat/users" 
     -H "accept: application/json" 
	 -H "Content-Type: application/json" 
	 -d "{\
	    	"email\":\"ape@gmail.com\",
			\"email_verified\":false,
			\"first_name\":\"ape\",
			\"last_name\":\"animal\",
			\"password\":\"Apeanimal\",
			\"phone_number\":\"09011223456\"
		}"
```

```sh
JSON
Content-Type: application/json
{
  "email": "ape@gmail.com",
  "email_verified": false,
  "first_name": "ape",
  "last_name": "animal",
  "password": "Apeanimal",
  "phone_number": "09011223456"
}
```

#### Sample Response
```sh
{
  "status": 200,
  "message": "user created",
  "data": {
    "user_id": "615840f887540d8d01ffc88d",
    "verification_code": "602569"
  }
}
```

#### Error Response
```sh
{
  "message": "bad request",
  "status": "400"
}
```
## Deactivate user
DELETE  `/users/{user_id}`
This endpoint allows you deactivate a user account.

REQUEST URL: https://api.zuri.chat/users/{user_id}

#### Request Headers

Authorization:  `bearerAuth`


#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{user_id} | string | True | User ID

#### Sample Request
```sh
curl -X DELETE "https://api.zuri.chat/users/32wdf" -H "accept: application/json"
```

#### Sample Response

```sh
	{
		"status": 200,
		"message": "user deleted successfully",
		"data": null
	}
```

#### Error Response
```sh
{
  "status": 401,
  "message": "No Authorization or session expired."
}
---
## Zuri App
---
## `Sign Up` 
**Creating an account can be done in two ways** 

 ### **Email and password** 
 - The password has to be inputed twice.
 -  Click on the terms and conditions, if everything is okay, tick the checkbox.
 -  Click on `Create Account`.
 -   A six digit `OTP` will be sent to your email address, copy and paste the code.
 -   You will be redirected to the [Sign in screen](#sign-in)
  ### **Google** `pending`

**Add An Organization** 
 This enable the user to **;** 
 - **Create a new organization / Create a workplace**
 1. Click on your verified email.
 1. Add the name of your organization.
 1. Add the project name your team is working on.
 1. Add the email address of team members `or` invite from contacts `or` copy and share your invite link. 
 *another email address can be used.* 

## **Channels:**
- To add a channel, click on the add channel button. 
- The user is directed to new channel screen.
- Add channel name (it must be lowercase and without space).
- Add channel description.
- use the toggle button if you want the channel to be private.
- Then click on the create button.
- This creates the new channel and adds it to the home screen.

---
## DM CHAT  PLUGIN
---
**Base url:**
```
https://dm.zuri.chat/
```
## Create Room

**Method: POST**

``Description: Creates a new room between users``

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/room
```

Request Body:

```
{
    "org_id": "614e8de3f068e4d7fc31a74e",
    "room_user_ids": [
        "614e8de3f31a74e068e40qbr",
        "614e8de3f31d74e0w8e4d7fc"
    ],
    "bookmarks": [
        "string"
    ],
    "pinned": [
        "string"
    ]
}
```

Response Example:

*If room already exists between users the Id is returned*
```
{
    "status": 200,
    "room_id": "614e74e0c8de3f31a68e4d7f"
}
```

*If no room exists between the users a new room is created and the Id returned*
```
{
    "status": 201,
    "room_id": "614e74e08de3f31a68e4d7fc"
}
```
*Request Error*
```
{
    "status": 400,
    "message": Bad Request
}
```
## Send Message

**Method: POST**

``Description: Sends messages to users in a room``

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/rooms/{room_id}/messages
```
Request Body:

*Required Fields: **sender_id**, **room_id**, **message***
```
{
  "sender_id": "61467e5fc00bcc41a5607b13",
  "room_id": "61467e13c00bcc181a5607b1",
  "message": "This is a test Example",
  "media": [],
  "read": false,
  "pinned": false,
  "saved_by": [
    "string"
  ],
  "threads": [
    {
      "message_id": "string",
      "sender_id": "string",
      "message": "string",
      "media": [],
      "created_at": "2021-09-30T11:23:55.065Z"
    }
  ],
  "reactions": [
    {
      "message_id": "string",
      "sender_id": "string",
      "data": "string",
      "category": "string",
      "aliases": [
        "string"
      ],
      "count": 0,
      "created_at": "2021-09-30T11:23:55.065Z"
    }
  ],
  "created_at": "2021-09-30T11:23:55.065Z"
}
```

Response Examples:

*Message success response*
```
{
    "status": 201,
    "event": "message_create",
    "message_id": "6155a0ee7f31a92765a1ecab",
    "room_id": "614e160e068e4d2e26f31a74",
    "thread": false,
    "data": {
        "sender_id": "61467e181a500cc6b07b13c1",
        "message": "Test example",
        "created_at": "2021-09-30T11:23:55.065000Z"
}
```

*Error response; if sender not in the room*
```
{
    "status": 400,
    "message": "sender not in room"
}
```

*Error response; if room does not exist*
```
{
    "status": 400,
    "message": "room not found"
}
```

*Request Error*
```
{
    "status": 400,
    "message": Bad Request
}
```

*Error response; if message was not sent*
```
{
    "status": 424,
    "message": "message not saved and not sent"
}
```

*Error response; if centrifugo connection fails*
```
{
    "status": 424,
    "message": "centrifugo server not available"
}
```


## Send Thread Messages

**Method: POST**

`Description: Sends messages as threads in room`

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/rooms/{room_id}/messages/{message_id}/threads
```
Request Body:

*Required Fields: **sender_id**, **message_id**, **message***
```
{
  "message_id": "6155a0e6be7f31a9275a1eca",
  "sender_id": "61467e181ab13c00bcc15607",
  "message": "Checking out the threads",
  "media": [],
  "created_at": "2021-09-30T15:41:45.685Z"
}
```

Response Examples:

*Thread message success response*
```
{
    "status": 201,
    "event": "thread_message_create",
    "thread_id": "bd830644-2205-11ec-9853-2ff0a732e3ef",
    "room_id": "614e1606f31a74e068e4d2e2",
    "message_id": "6155a0e6be7f31a9275a1eca",
    "thread": true,
    "data": {
        "sender_id": "61467e181ab13c00bcc15607",
        "message": "Checking out the threads",
        "created_at": "2021-09-30T15:41:45.685000Z"
    }
}
```

*Request Error*
```
{
    "status": 400,
    "message": Bad Request
}
```

*Error response; if sender not in the room*
```
{
    "status": 404,
    "message": "sender not in room"
}
```

*Error response; if room does not exist*
```
{
    "status": 404,
    "message": "message or room not found"
}
```

*Error response; if thread message was not sent*
```
{
    "status": 424,
    "message": "message not saved and not sent"
}
```

*Error response; if centrifugo connection fails*
```
{
    "status": 424,
    "message": "centrifugo server not available"
}
```


## Delete Message

**Method: DELETE**

`Description: Deletes messages in rooms`

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/rooms/{room_id}/messages/{message_id}/message
```

Response Examples:

*Success*
```
{
    "status": 200,
    "message": OK
}
```

*Request Error*
```
{
    "status": 400,
    "message": Bad Request
}
```

*Error response*
```
{
    "status": 404,
    "message": "message not found"
}
```

## Message Reactions

**Method: POST**

`Description: Creates new message emoji reactions`

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/rooms/{room_id}/messages/{message_id}/reactions
```

Request Body:
```
{
  "message_id": "6155a0e6be7f31a9275a1eca",
  "sender_id": "6155a0e9276be7f31a5a1eca",
  "data": "string",
  "category": "string",
  "aliases": [
    "string"
  ],
  "count": 0,
  "created_at": "2021-09-30T18:59:48.088Z"
}
```

Response Examples:

*Success; 201 created response*
```
{
    "status": "success",
    "event": "add_message_reaction",
    "reaction_id": "f82283bc-2221-11ec-9853-2ff0a732e3ef",
    "room_id": "614e16064f8ed2e231a74e06",
    "message_id": "6155a0e65a1f31a927ecabe7",
    "data": {
        "sender_id": "61467ec00bcc181a5607b131",
        "reaction": "string",
        "created_at": "2021-09-30T18:59:48.088000Z"
    }
}
```

*Error Response*
```
{
    "status": 404,
    "message": "message or room not found"
}
```

*Error Response*
```
{
    "status": 424,
    "message": "data not sent"
}
```
## Save Bookmarks

**Method: POST**

`Description: Saves links as bookmarks in rooms`

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/rooms/{room_id}/new-bookmark
```

Request Body:
```
{
  "link": "https://dm.zuri.chat/docs/v1/",
  "name": "dm plugin docs",
  "created_at": "2021-09-30T19:29:32.378Z"
}
```

Response Examples:

*Success; 200 status response*
```
{
  "link": "https://dm.zuri.chat/docs/v1/",
  "name": "dm plugin docs",
  "created_at": "2021-09-30T19:29:32.378000Z"
}
```

*Error Response*
```
{
    "status": 400,
    "message": "Bad Request"
}
```



## Delete Bookmarks

**Method: DELETE**

`Description: Deletes bookmarks in rooms`

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/rooms/{room_id}/bookmark
```

Response Examples:

*Success*
```
{
    "status": 200
}
```

*Error Response*
```
{
    "status": 400,
    "message": "Bad Request"
}
```

*Error Response*
```
{
    "status": 404,
    "message": "bookmark not found"
}
```

## Send Files

**Method: POST**

`Description: Sends media files in rooms (authorization is required)`

URL:
```
https://dm.zuri.chat/api/v1/org/{org_id}/rooms/{room_id}/messagemedia
```

Request Body: *to be entered as a form data*
```
{
    "file": "file.jpg"
}
```

Response Examples:

*Success*
```
{
    "status": 201,
    "media_url": "https://api.zuri.chat/files/message_media/614679ee1abcb75607b13c00/61467e18000bcc7b13c11a56/20210928143839_0.jpg"
}
```

*No content*
```
{
    "status": 204,
    "message": "No file attached, Use send Message api to send only a message"
}
```

*Error Response: Bad Request*
```
{
    "status": 400,
    "message": "sender not in room"
}
```

*Error Response*
```
{
    "status": 404,
    "message": "room not found"
}
```

*Error Response*
```
{
    "status": 424,
    "message": "data not sent"
}
```
---
## TODO  PLUGIN
---
**Base url:**
```
https://todo.zuri.chat/api/v1
```
# Create a Todo #
This endpoint is used to create a todo
|  |  |
| ------ | ------ |
| Request Type | ``` POST ``` |
| Endpoint |  ``` /create-todo ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| organisation_id |  yes | string |
| title |  yes | string |
| user_id |  yes | integer |
| type |  yes | string |

Sample Request
```json

      {
            "organisation_id": "614679ee1a5607b13c00bcb7",
            "title": "check",
            "user_id": "123",
            "type": "todo",
            
      }

```
Sample Response
```json
{
    "status": "success",
    "type": "Todo",
    "data": {
        "_id": "61548df27f0874785c51cb2b",
        "organisation_id": "614679ee1a5607b13c00bcb7",
        "title": "check",
        "user_id": "123",
        "type": "todo",
        "channel": "61548df2d76d-check",
        "tasks": [],
        "labels": [],
        "collaborators": [],
        "created_at": "2021-09-29T16:01:54.882458Z"
    }
}
```
# Create a Task #
This endpoint is commonly used to create a task 
|  |  |
| ------ | ------ |
| Request Type | ``` POST ``` |
| Endpoint |  ``` /add-task ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| title |  yes | string |
| status |  yes | string |
| description |  no | string |
Sample Request
```json
[
      {
            "description": "string",
            "title": "string",
            "status": "string"
      }
]
```
Sample Response
```json
[
      {
           "status": 200,
            "message": "Task created",
            "data": {
              "_id": "6137a5af52efebbea2739c71"
            }
      }
]
```
# Delete a Todo #
This endpoint is commonly used to delete a todo
|  |  |
| ------ | ------ |
| Request Type | ``` DELETE ``` |
| Endpoint |  ``` /todo/{todo_id} ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| user_id |  yes | string |
Sample Response
```json
[
      {
           "status": 200,
            "message": "Todo Deleted",
            "data": {
                "MatchedCount": 1,
                "ModifiedCount": 1,
            }
      }
]
```
# Delete a Task #
This endpoint is commonly used to delete a task
|  |  |
| ------ | ------ |
| Request Type | ``` DELETE ``` |
| Endpoint |  ``` /task/{task_id} ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| user_id |  yes | string |
Sample Response
```json
[
      {
           "status": 200,
            "message": "Todo Deleted",
            "data": {
                "MatchedCount": 1,
                "ModifiedCount": 1,
            }
      }
]
```

---
## CHANNELS
---
**Base url:**
```
channels.zuri.chat
```
# Create a Channel

 POST /v1/{org_id}/channels/

 This endpoint allows you to create a channel for an organization

Request Type: `POST`


Endpoint: `{baseUrl}/v1/{org_id}/channels/`

## Path Parameters

Params| Description | Required
---------|----------|---------
 org_id | string | yes

## Request Headers
    
Content-Type: `application/json`
    
Authorization: `Basic Auth credentials`

## Sample request

How to create a channel

### Request Body Params

Params| Description | Required
---------|----------|---------
name | string | yes
owner| string | yes
description | string | -
private| boolean | -

Content-Type: `application/json`

```sh
{ 
"name" : "string",
"owner": "string",
"description": "string",
"private": "boolean"
}
```

## Sample Response

### **201** Success 



```
RESPONSE SCHEMA: application/json

code required      integer <int32>
message required   string 
data required      object
```

```sh
{ 

"_id": "string",
"name": "string",
"description": "string",
"private" : "boolean",
"archived": "boolean"
}
```

### **404** Not Found 



```sh
{
    "message": "not found",
    "status": "404"
}
```
# Delete a channel

DELETE /v1/{org_id}/channels/{channel_id}/

This endpoint allows you to delete a channel

Request Type: `GET`


Endpoint: `{baseUrl}/v1/{org_id}/channels/{channel_id}/`

## Path Parameters

Params| Description | Required
---------|----------|---------
 org_id | string | yes
 channel_id| string | yes


## Request Headers
    
Content-Type: `application/json`
    
Authorization: `Basic Auth credentials`

 
## Sample Response

### **204** Success 



```
RESPONSE SCHEMA: application/json

code required      integer <int32>
message required   string 
data required      object
```

```sh
{
    "status": "204",
    "message": "channel deleted"
}
```

### **404** Not Found 



```sh
{
    "status": "404",
    "message": "member not found"
}
```
# Delete a Member from a Channel

 DELETE /v1/{org_id}/channels/{channel_id}/members/{member_id}] 

This endpoint allows you to delete a member from a channel

Request Type: `DELETE`


Endpoint: `{baseUrl}/v1/{org_id}/channels/{channel_id}/members/{member_id}`


## Path Parameters

Params| Description | Required
---------|----------|---------
 org_id | string | yes
 channel_id| string | yes
 member_id | string | yes

## Request Headers
    
Content-Type: `application/json`
    
Authorization: `Basic Auth credentials`

 
## Sample Response

### **204** Success 

```
RESPONSE SCHEMA: application/json

code required      integer <int32>
message required   string 
data required      object
```

```sh
{
    "status": "204",
    "message": "member removed from the channel"
}
```

### **404** Not Found 


```sh
{
    "status": "404",
    "message": "member not found"
}
```

---
# NoticeBoard Plugin 
---
```
Base URL: noticeboard.zuri.chat/api/
```

**POST**

**Summary**
Adds a new file to that organisation.  

**Description** 
```
curl -X POST "{{baseUrl}}/v1/organisation/{{org_id}}/attachfile" -H  "accept: application/json"
```

**Parameters**

|  |  |  |  |  |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| Name | Located in | Description | Required | Schema  |
| org_id | path	|  | Yes | string |
|  |  |  |  |  |

**Responses**

|  |  | 
| ----------- | ----------- |
| code | Description |
| 200 | No file attached |
| 201 | |
|  |  |



**DELETE**

**Summary**
Delete an attached file from an organisation

**Description**
```
curl -X DELETE "{{baseUrl}}/v1/organisation/{{org_id}}/attachfile" -H  "accept: application/json"
```


**Parameters**

|  |  |  |  |  |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| Name | Located in | Description | Required | Schema  |
| org_id | path	|  | Yes | string |
|  |  |  |  |  |

**Responses**

|  |  | 
| ----------- | ----------- |
| code | Description |
| 204 | |
| 404| File not found |
|  |  |

---
# Chess Plugin 
---
```
Base URL: https://chess.zuri.chat/
```

## Create Game

<!-- descriptions -->

When this endpoint is used, it Creates a new gaming room, assigns an Id to it and sets the status to started (state = 0).

### How To Use

This is a POST endpoint and it can be tested with a form or through POSTMAN.
There can not be more than 6 games running concurrently.

Once request is sent to the api endpoint with all neccesary parameters through a FORM or POSTMAN and hit enter. when successful, [onSuccess](#onsuccess) response is return and game created. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :
  - Once you click on join as player 1, all parameters will be added automatically and on Success, you enter into the game created waiting for opponent

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
- General endpoint

| URL          | METHOD | URL PARAMS | DATA PARAMS |
| ------------ | ------ | ---------- | ----------- |
| /game/create | POST   | false      | true        |

- PARAMS [URL OR DATA] if true

| NAME      | DATA TYPE | REQUIRED |
| --------- | --------- | -------- |
| user_id   | integer   | true     |
| user_name | string    | true     |
| image_url | string    | false    |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :

  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```[
  { object_id: game._id }
]

```

- message : "New Game Board Created successfully",

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message_1 : "Unable to create a Game"
- message_2 : "No free boards right now"

## Join Game

<!-- descriptions -->

When this endpoint is used, its check if an opponent already exist, if not it join as the opponent.

### How To Use

This is a POST endpoint and it Enters a game as the second player.
This can be tested from the client side in a form or using Postman.

Input the endpoint complete url into postman or form with all necessary parameter , when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser. when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :
  - Once the link is open, user choose any six available game in the homepage to play as opponent. On clicked "join as opponent/player 2", the user enters the game and can start playing with the host.

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
- General endpoint

| URL   | METHOD | URL PARAMS | DATA PARAMS |
| ----- | ------ | ---------- | ----------- |
| /join | POST   | false      | true        |

- PARAMS [URL OR DATA] if true

| NAME      | DATA TYPE | REQUIRED |
| --------- | --------- | -------- |
| game_id   | string    | true     |
| user_id   | integer   | true     |
| user_name | string    | true     |
| image_url | string    | false    |

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :

  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```
game_id
```

- message : "Game join successfully"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
Error object

```

- message_1 : "Unable to join a game"
- message_2: "opponent already exists"
- message_3: "Game not found"

## Game delete

<!-- descriptions -->

When this endpoint is used, it deletes a particular game from the database .

### How To Use

<!-- brief description -->

This is a DELETE endpoint and it simple means that your browser e.g chrome, edge, etc can make request (i.e write/send the endpoint in their browser engine) and see the response (i.e the plugin information). You can also use Postman or other API testing platform to make request to the endpoint.

Input the endpoint in the browser, or any API testing platform and hit enter, when successful, [onSuccess](#onsuccess) response is display as JSON formatted in the browser ( or the API testing platform). when an error occur [onError](#onerror) is thrown.

- Guidance Example on the <https://zuri.chat/chess> application :

<!-- description on how to use on our app : leave if not implemented in the FE yet -->

-

### Features

This involves the baseUrl, body request type, all required and non required parameters, methods and url for this endpoint.

- BaseURL : <https://www.chess.zuri.chat/api/v1>
- Request Body Schema : application/json
- General endpoint

| URL     | METHOD | URL PARAMS | DATA PARAMS |
| ------- | ------ | ---------- | ----------- |
| /delete | DELETE | false      | true        |

- PARAMS[URL OR DATA] if true

| NAME    | DATA TYPE | REQUIRED |
| ------- | --------- | -------- |
| game_id | string    | true     |

- complete endpoint url format : <https://www.chess.zuri.chat/api/v1/delete>

### Responses

This is the end result send back to the client on successful execution or when an error occur. Below are the response on this two scenarios

#### onSuccess

This return a json formatted response payload to the client browser display in addition to the code.

- code :

  - 2xx -> This success ranges originate from the server, usually from a successful request(200). etc

- payload :
  - result

```
{
  payload
}
```

- message : "game deleted successfully"

#### onError

- code :

  - 4xx -> This error ranges originate from the client, possible from a bad request(403),page not found (404), unauthorized access(402). etc

  - 5xx -> This error ranges originate from the server, possible the server being down(500). etc

- payload :
  - error

```
<Error object/>

```

- message : "Unable to delete game"

---
# Goals Plugin 
---
```
Base URL: https://goals.zuri.chat/api/v1
```

### Create Goal
#### Description

This endpoint Create a brand new goal.

#### Parameters

| Method | Endpoint| Body | Parameter | Query | Content Type | Description |
|-|-|-|-|-|-|-|
| `POST` | `/goals` | ```{"category": "#backend","description": "test goal","start_date": "2020-10-02","due_date": "2020-10-02","goal_type": "annual", "goal_name": "public room"}``` | null | org_id | `application/json` | All the field in the body are **required** |

### Code Sample

```bash
curl -X 'POST' \
  'https://goals.zuri.chat/api/v1/goals?org_id=6145d099285e4a184020742e' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "category": "#backend",
  "description": "test goal",
  "start_date": "2020-10-02",
  "due_date": "2020-10-02",
  "goal_type": "annual",
  "goal_name": "public room"
}'
```

### Sample Response

 **Code: 200**

```bash
{
  message: "success",
  status: 200,
  data: {
    room_id: "8d9273ef-76c7-4a6d-a4b5-d8e4fad2e60f",
    isComplete: false,
    isExpired: false,
    category: "#backend",
    description: "test goal",
    start_date: "2020-10-02",
    due_date: "2020-10-02",
    goal_type: "annual",
    goal_name: "public room"
  }
}

```

 **Code: 400**

```bash
{
  status: 'fail',
  message: 'Goal with the title: "public room" and  category: "#backend" already exists on your organization'
}
```

 **Code: 401**

```bash
{
  status: 'fail',
  message: 'Unauthorized'
}
```

 **Code: 404**

```bash
{
  status: 'fail',
  message: 'Can not find the requested url on this server'
}
```

 **Code: 500**

```bash
{
  status: 'error',
  message: 'Internal server error'
}
```
### Delete a goal
### Description

This endpoint delete a single goal.

#### Parameters

| Method | Endpoint| Body | Parameter | Query | Content Type | Description |
|-|-|-|-|-|-|-|
| `DELETE` | `/goals/update` | null | null | **org_id**  **goal_id** | `application/json` | Both the **org_id** and **goal_id** fields are required|

### Code Sample

```bash
curl -X 'DELETE' \
  'https://goals.zuri.chat/api/v1/goals?org_id=6145d099285e4a184020742e&goal_id=613fa4a56173056af01b4b26' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
}'
```

### Sample Response

**Code: 200**

```bash
{
  message: "success",
  status: 200,
  data: {
    _id: "613ddbd3e4010959c8dc0c5e",
    category: "#backend",
    createdBy: "Depeju",
    description: "test goal",
    start_date: "2020-10-02",
    due_date: "2020-10-02",
    goal_type: "annual",
    goal_name: "public room",
    isComplete: true,
    isExpired: true,
    room_id: "b66e5fe5-2c66-413c-b2fc-a38d6ab76330"
  }
}

```

**Code: 400**

```bash
{
  status: 'fail',
  message: 'There is no goal of this id attached to this organization id that was found.'
}
```

**Code: 401**

```bash
{
  status: 'fail',
  message: 'Unauthorized'
}
```

 **Code: 404**

```bash
{
  status: 'fail',
  message: 'Can not find the requested url on this sevfrver'
}
```

**Code: 500**

```bash
{
  status: 'error',
  message: 'Internal server error'
}
```
---
# Sales Plugin 
---
```
Base URL: https://sales.zuri.chat/api/v1/
```
## Add users to a room
Method: Post  

Description: Fetches data from the Zuri core API and adds a user to a room.

Example:
```
https://sales.zuri.chat/api/v1/add-to-room/
```

Request body:
```
{
user:"2345" 
}
```

Response:
```
{
  "user": 2345,
  "room_name": "prospects"
}
```
## Create Deals 
Method: Post  

Description: Fetches data from the Zuri core API to create a new deal for a prospect.

Example:
```
https://sales.zuri.chat/api/v1/prospects/deals/
```

Request Body:
```

{
  "_id": "123abc456def",
  "name": "John Doe",
  "deal_stage": "Prospect",
  "amount": "$123456",
  "close_date": "dd-mm-yyyy",
  "description": "Deliver 10, 000 bags of cement"
}
```
Response:

```
{
  "status": 200,
  "message": "success",
  "data": {
    "insert_count": 1,
    "object_id": "614e8de3f31a74e068e4d7fc"
  }
}
```
## Create Prospects

Method: Post  

Description: Fetches data from the Zuri core API and creates a new prospect.

Example:
```
https://sales.zuri.chat/api/v1/prospects/create/
```

Request Body:
```
{
  "name": "John Doe",
  "email": "example@mail.com",
  "phone_number": "+2348012345678",
  "deal_stage": "proposal"
}
```
Response:

```
{
  "status": 200,
  "message": "success",
  "data": {
    "insert_count": 1,
    "object_id": "614e8de3f31a74e068e4d7fc"
  }
}
```
## Delete a Particular Deal
Method: Delete  

Description: Deletes a particular deal from the Zuri Core API.

Example:
```
https://sales.zuri.chat/api/v1/deals/delete/{id/}
```

Response
```
{
  "status": 200,
  "message": "success",
  "data": {
    "deleted_count": 1
  }
}
```

## Delete a Particular Prospect
Method: Delete  

Description: Deletes a particular prospect from the Zuri Core API.

Example:
```
https://sales.zuri.chat/api/v1/prospects/delete/{id/}
```

Response:
```
{
  "status": 200,
  "message": "success",
  "data": {
    "deleted_count": 1
  }
}
```

