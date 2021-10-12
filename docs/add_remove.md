### Add/Remove Endpoints For All Plugins

## Brief
Contains all the add/remove endpoints for plugins

These are REST APIs written in various programming languages.

Each endpoint is triggered using HTTP verbs and accepts or returns a JSON formatted payload

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
