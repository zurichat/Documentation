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
