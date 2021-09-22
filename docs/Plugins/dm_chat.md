---
slug: /dm_chat
sidebar_position: 4
title: DM Chat Plugin
---

# Zuri Chat DM (Create Room API)
This API enables private messaging system to your site and allow users to privately message each other.



## **Errors**
When an error occurs, you will receive an error object. Most of these error objects contain an error code and an error description so that your applications can more efficiently identify the problem.
​
A 4xx response code, ondicates a bad request or the email address is not valid. In this case, 
check the [Standard Error Responses](#standard-error-responses) for more context.
​
5xx errors suggest a problem on server's end.
​
​
​
## API methods:
- POST

## End Points:
base url: https://dm.zuri.chat/docs/v1

### /createroom
- **Endpoint**: createroom
- **Method**: Post
- **Description**: creates a room using the id of two users so that messages can be sent between them. It can also work for one user as a user can send a message to his/herself. but the user id has to be in a list.

### parameters: 
|   |    |
|--------|-------------|
| Name | Data type |
| org_id (required)| string |
| room_users_id (required) | list of strings |
| bookmarks| string |
| pinned| string |
|    |    |
### How to create a room 
- Use the endpoint **https://dm.zuri.chat/api/v1/createroom**
- Create a json object that takes two parameters, **the organization id and a list of user ids**
- This will create a room and return the id
***please note the createroom is a post method***


### **Example:** 
- ### for two or more users

```sh
 https://dm.zuri.chat/api/v1/createroom { 
     "org_id": "ajaiu498283928928rieowe",
    "room_user_ids": ["lkdl049052098509292","al09952090529302"]
 }
```
- ### for a user

```sh
 https://dm.zuri.chat/api/v1/createroom { 
     "org_id": "ajaiu498283928928rieowe",
    "room_user_ids": ["lkdl049052098509292", ]
 }
```
### response:

```json
code:201
 { 
     "room_id": "61423bbc9fd1f4f655d445e7",
 }
```


# Get Room Messages

The get room messages uses the user id in retrieving the messages sent to the room thereby checking the organization id to know which organization is using the room.

> GET /messages/:room_id/

  
> Note: `you need to create a room for you to get messages of the particular organisation.` 

  
## Path Parameter
A unique ID  of the room is required to locate the messages of the particular room.
  

```sh
/messages/room_id
integer required
```

  

## Request

```sh
Bearer [ACCESS_TOKEN]
application/json
```

  

## Responses with sample

  
`200 ok`
>Successfully Get all room messages with status code 200 and returns all room messages in json format.

`example:`
```sh
content-type: application/json
{
    "code": 200,
        "data": [{
           "message":  "Happy mother's day", "created_time":"2018-05-13T06:25:16+0000", 
        "id": "1742085185888234_1648933289336758"
           },
        {
        "message": "Days were gone",
        "created_time":"2018-04-27T02:30:14+0000",
        "id": "1742085185888234 1622033204560100" 
        }]  
}
```
### For error code, the integar code error and string message is provided.

`example:`

```sh
content-type: application/json
{        
    "code": 401,        
    "message": "Bad Request"
}
```


# Update Messages

## API methods:
- GET

## End Points:
base url : https://dm.zuri.chat/docs/v1
### /updatemessage
- **Endpoint**: updatemessage/{id}
- **Method**: GET
- **Description**: Used to get an updated message immediately when called, A **message id** is the only required parameter to do this.

### How to get updated messages
- use the endpoint **https://dm.zuri.chat/api/v1/updatemessage/{id}.**
- use a valid message id in the endpoint.
- you should get the message which is attached to the id.

### Example: 

```
 https://dm.zuri.chat/api/v1/updatemessage/6141c56d9fd1f4f655d444fe
```


### Response:

```json
code:200
 	
Response body
Download
{
  "_id": "6141c56d9fd1f4f655d444fe",
  "created_at": "2021-09-15T10:03:44.912000Z",
  "media": [],
  "message": "testing endpoints",
  "pinned": false,
  "read": false,
  "room_id": "613b2db387708d9551acee3b",
  "saved_by": [
    "string"
  ],
  "sender_id": "lkdl049052098509292",
  "threads": [
    {
      "created_at": "2021-09-15T10:03:44.912000Z",
      "media": [],
      "message": "does it work",
      "message_id": "613f55f96173056af01b4a7b",
      "sender_id": "lkdl049052098509292"
    }
  ]
}
```


# Model for dm plugin
These models show descriptions of the format of what you either  post or get.
- **Strings** are characters that are enclosed within codes.
- **Max-length** is the maximum number of characters to be entered
- **Min-length** the the minimum number of characters


 ## Message link Response ; 
 The message link response  creates a link for a particular message. It takes the room and message id’s and converts it to a link.
 
 ```
{
room_id
string
title: Room id
readOnly: true
message_id
string
title: Message id
readOnly: true
link
string($uri)
title: Link
readOnly: true
minLength: 1
}
```

## Room:  
The room has an organization id which is the organization using that room.
 - **Room user ids;**  shows a List of strings of the user id’s of the two users in a  direct message.
- **Bookmarks** show the list of the users that bookmark a particular message.
- **Pinned** shows the list of the users that pinned a particular message
- **the fields on astericks are very important.**

```
org_id*
string
title: Org id
maxLength: 128
minLength: 1
room_user_ids*
[string
maxLength: 128
minLength: 1]
bookmarks*
[string
maxLength: 128
minLength: 1]
pinned*
[string
maxLength: 128
minLength: 1]
created_at
string($date-time)
title: Created at
readOnly: true
default: 2021-09-16T08:29:25.303576Z
}
```

## CREATE ROOM RESPONSE
```
{
room_id
string
title: Room id
readOnly: true
} 
```

## MESSAGE RESPONSE 
It takes a status (read or not), message id and a thread (if it has a thread).

```
{
status
string
title: Status
readOnly: true
minLength: 1
message_id
string
title: Message id
readOnly: true
thread*
boolean
title: Thread
data
Data{
< * >:
string
minLength: 1
}
created_at
string($date-time)
title: Created at
readOnly: true
}
```

## ROOM INFO RESPONSE
 It gives information about a particular room. It has the Id of the room, the organization that owns the room, the id’s of the users of that room and the description of the room (example: this chat is between...)

```
{
_id
string
title: id
readOnly: true
org_id
string
title: Org id
readOnly: true
minLength: 1
room_user_ids*
[string
minLength: 1]
created_at
string($date-time)
title: Created at
readOnly: true
description
string
title: Description
readOnly: true
minLength: 1
}
```

## THREAD 
A thread is a message within a message. it contains the id of the message, the sender id, the message and media contained in the message.
```
{
message_id*
string
title: Message id
maxLength: 128
minLength: 1
sender_id*
string
title: Sender id
maxLength: 128
minLength: 1
message*
string
title: Message
minLength: 1
media
[
default: List []
string($uri)
minLength: 1]
created_at
string($date-time)
title: Created at
default: 2021-09-16T08:29:25.315456Z
}
```

## MESSAGE 
- **Room id** specifies the room that a message belongs to so that if queries are to be made, it can be referenced. 
- **Message** contains the information that is sent
- **Media field** stores the url for whatever media that is sent.
- **Read field** the default is usually false( that is, it has not been read)
- **Pinned** it is  boolean (true or false)
- **Saved by** it has a saving functionality. it  takes a list of users that saved a particular message.
- **Threads** takes in a message id, sender id, and message. It is  basically a message within a message.

```
{
sender_id*
string
title: Sender id
maxLength: 128
minLength: 1
room_id*
string
title: Room id
maxLength: 128
minLength: 1
message*
string
title: Message
minLength: 1
media
[
default: List []
string($uri)
minLength: 1]
read
boolean
title: Read
default: false
pinned
boolean
title: Pinned
default: false
saved_by
[
default: List []
string
maxLength: 128
minLength: 1]
threads
[
default: List []
Thread{
message_id*
string
title: Message id
maxLength: 128
minLength: 1
sender_id*
string
title: Sender id
maxLength: 128
minLength: 1
message*
string
title: Message
minLength: 1
media
[...]
created_at
string($date-time)
title: Created at
default: 2021-09-16T08:29:25.315456Z
}]
created_at
string($date-time)
title: Created at
default: 2021-09-16T08:29:25.316043Z
}
```


## THREAD RESPONSE
 it is used to get information about a particular thread.
 
 ```
{
status
string
title: Status
readOnly: true
minLength: 1
message_id
string
title: Message id
readOnly: true
thread_id
string
title: Thread id
readOnly: true
thread*
boolean
title: Thread
data
Data{
< * >:
string
minLength: 1
}
created_at
string($date-time)
title: Created at
readOnly: true
}
```

#  Copy Message Link API
​
## API methods:
- GET

## End Points:
base url: https://dm.zuri.chat/docs/v1
### /copymessagelink/{message_id}
- **Endpoint**: copymessagelink/{message_id}
- **Method**: GET
- **Description**: This is used to retrieve a single message. It takes a message_id as query params.
If message_id is provided, it returns a dictionary with information about the message,
or a 204 status code if there is no message with the same message id.
I will use the message information returned to generate a link which contains a room_id and a message_id
### parameters: 
|  |  |
|--------|-------------|
| Name | Data type |
| message_id (required)| string |
|     |      |

### How to copy a message link
- use the endpoint **https://dm.zuri.chat/api/v1/copymessagelink/**
- input the message_id after the stroke  **https://dm.zuri.chat/api/v1/copymessagelink/message_id**
- it will create a room and return the **mesaage_id**,**room_id** and **the message_link**, the message link contains the messages.

**please note the createroom is a get method**


### Example: 

```sh
https://dm.zuri.chat/api/v1/copymessagelink/61480c0de4b2aebf8ec8c866

```
### Response:

```json
code:201
 { 
    "room_id": "6146d126845b436ea04d102e",
    "message_id": "61480c0de4b2aebf8ec8c866",
    "link": "https://dm.zuri.chat/getmessage/6146d126845b436ea04d102e/61480c0de4b2aebf8ec8c866"
 }
```
the link contains the message information
example of information in a link:
```json
link: "https://dm.zuri.chat/getmessage/6146d126845b436ea04d102e/61480c0de4b2aebf8ec8c866"

  "_id": "61480c0de4b2aebf8ec8c866",
    "created_at": "2021-09-20T04:20:28.965457Z",
    "media": [],
    "message": "Hello",
    "pinned": false,
    "reactions": [],
    "read": false,
    "room_id": "6146d126845b436ea04d102e",
    "saved_by": [],
    "sender_id": "6146ce37845b436ea04d102d",
    "threads": []
``` 


## Standard Error Responses 
The Authentication API may return the following HTTP Status Codes:

---

### **400**  An icorrect client request 

```
RESPONSE SCHEMA: application/json

code required      integer  
message required   string

 ```



### **401**  Invalid Access Token

```
 RESPONSE SCHEMA:   application/json

code required        integer 
message required     string


```

 ### **422** Server unable to process contained information e.g API behavior 

```
RESPONSE SCHEMA: application/json

code required      integer  
message required   string 

```

### **500** Comes up when internal server error occured during operation or undocumented

```

RESPONSE SCHEMA:     application/json

code required         integer 
message required      string

```