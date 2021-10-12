# API DOCUMENTATION FOR THE ZURI CHAT CHANNELS PLUGIN

## Brief

Contains all the available endpoints for the Zuri Chat Channels plugin as
compiled By Team Coelho HNGi8.

These are REST APIs written in Python using the Django RESTFramework.

Each endpoint is triggered using HTTP verbs and accepts or returns a JSON
formatted payload

## Base URL

`https://channels.zuri.chat`

## **ENDPOINTS**

---

---

## **Database Collections Related To Plug-in**

**Method: GET**

`Description: Retrieve all database collections related to plugin`

URL:

```
https://channels.zuri.chat/api/v1/collections/{plugin_id}
```

Responses Examples:

_Success Response_

```
{
  "status": 200
}
```

_Error Response_

```
{
  "status": 404,
  "message": "no record found"
}
```

## **Database Collection For An Organization**

**Method: GET**

`Description: Get all database collections related to plugin specific to an organisation`

URL:

```
https://channels.zuri.chat/api/v1/collections/{plugin_id}/organizations/{org_id}
```

Required Fields: **plugin_id, org_id**

Response Examples:

_Success Message_

```
{
    "status": 200
}
```

## **Plug-in Details for an Organization**

**Method: GET**

`Description: Retrieve details about the plug-in`

URL:

```
 https://channels.zuri.chat/api/v1/details
```

Response Examples:

_Success Response_

```
{
  "message": "Welcome, to the Channels Plugin",
  "last_visted": "2021-10-12T04:03:26.907897+00:00",
  "no_of_times_visted": 38
}
```

## **Plug-in Info**

**Method: GET**

`Description: Retrieve plugin details and developer information`

URL:

```
https://channels/api/v1/info
```

Response Examples:

_Success Response_

```
{
  "message": "Plugin Information Retrieved",
  "data": {
    "type": "Plugin Information",
    "plugin_info": {
      "name": "Channels Plugin",
      "description": [
        "Zuri.chat plugin",
        "The Channel Plugin is a feature    that helps users create spaces for    conversation and communication on zuri.chat."
      ]
    },
    "scaffold_structure": "Monolith",
    "team": "HNG 8.0/Team Coelho",
    "sidebar_url": "https://channels.zuri.chat/api/v1/sidebar",
    "ping_url": "https://channels.zuri.chat/api/v1/ping",
    "homepage_url": "https://channels.zuri.chat/"
  },
  "success": true
}
```

## **Ping**

**Method: GET**

`Description: Get server status`

URL:

```
https://channels.zuri.chat/api/v1/ping
```

Responses Examples:

_Success Response_

```
{
  "success": true
}
```

## **Sidebar Info For a User**

**Method: GET**

`Description: Get dynamic sidebar details for a user in an organisation`

URL:

```
https://channels.zuri.chat/api/v1/sidebar
```

Required Parameters: **org_id, user_id, token**

Response Examples:

_Success Response_

```
{
  "status": 200
}
```

## **CHANNELS ENDPOINT**

---

---

## **Get Channels**

**Method: GET**

`Description: Get all channels in the organization`

URL:

```
https://channels.zuri.chat/v1/{org_id}/channels
```

Required Parameter : **org_id**

Response Examples:

_Success Response: retrieves all the channels in an organization_

```
[
  {
    "_id": "string",
    "name": "string",
    "description": "string",
    "private": true,
    "owner": "string",
    "archived": true,
    "topic": "string",
    "users": {
      "additionalProp1": [
        {
          "_id": "string",
          "role_id": "string",
          "starred": false,
          "is_admin": false,
          "notifications": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        }
      ],
      "additionalProp2": [
        {
          "_id": "string",
          "role_id": "string",
          "starred": false,
          "is_admin": false,
          "notifications": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        }
      ],
      "additionalProp3": [
        {
          "_id": "string",
          "role_id": "string",
          "starred": false,
          "is_admin": false,
          "notifications": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        }
      ]
    },
    "default": false,
    "starred": true
  }
]
```

_Error Response_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Create Channel**

**Method: POST**

`Description: This creates a channel for a particular organization identified by ID and creates corresponding Centrifugo room.`

Request Body:

```
{
  "name": "string",
  "owner": "string",
  "description": "string",
  "private": false,
  "topic": "string",
  "default": false
}
```

Required Parameters : **org_id, data**

Response Examples:

_Success Response : status 201_

```
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "private": true,
  "archived": true,
  "topic": "string",
  "starred": true
}
```

_Error Response_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **User channels**

**Method: GET**

`Description: Retrieve list of channels a user belongs to `

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/users/{user_id}/
```

Required Parameters : **org_id, user_id**

Response Examples:

_Success Response: status 200_

```
[
  {
    "_id": "string",
    "name": "string",
    "description": "string"
  }
]
```

_Status : 204_

```
User does not belong to any channel
```

_Error Response: status : 400_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Get Channel Details**

`v1/{org_id}/channels/{channel_id}/`

**Method: GET**

`Description: Get channel details`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/
```

Required Parameters: **channel_id, org_id**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "private": true,
  "owner": "string",
  "archived": true,
  "topic": "string",
  "users": {
    "additionalProp1": [
      {
        "_id": "string",
        "role_id": "string",
        "starred": false,
        "is_admin": false,
        "notifications": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ],
    "additionalProp2": [
      {
        "_id": "string",
        "role_id": "string",
        "starred": false,
        "is_admin": false,
        "notifications": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ],
    "additionalProp3": [
      {
        "_id": "string",
        "role_id": "string",
        "starred": false,
        "is_admin": false,
        "notifications": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ]
  },
  "default": false,
  "starred": true
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Update Channel Details**

**Method: PUT**

`Description: Update channel details`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/
```

Request Body:

```
{
  "name": "string",
  "description": "string",
  "private": true,
  "archived": true,
  "topic": "string",
  "starred": true
}
```

Required Parameters: **channel_id, org_id, data**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "name": "string",
  "description": "string",
  "private": true,
  "owner": "string",
  "archived": true,
  "topic": "string",
  "users": {
    "additionalProp1": [
      {
        "_id": "string",
        "role_id": "string",
        "starred": false,
        "is_admin": false,
        "notifications": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ],
    "additionalProp2": [
      {
        "_id": "string",
        "role_id": "string",
        "starred": false,
        "is_admin": false,
        "notifications": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ],
    "additionalProp3": [
      {
        "_id": "string",
        "role_id": "string",
        "starred": false,
        "is_admin": false,
        "notifications": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ]
  },
  "default": false,
  "starred": true
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Delete Channel**

**Method: DELETE**

`Description: Deletes a channel and its related objects: messages, roles and threads`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/
```

Required Parameters: **channel_id, org_id, user_id**

Response Examples: _Sucess Response: status 204_

```
Channel deleted successfully
```

_Error Response: status 404_

```
Not found
```

## **Channel Files**

**Method: GET**

`Description: retrieves a list of URLs for files/media that have been sen sent in a channel.`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/files/
```

Required Parameters: **channel_id, org_id**

Response Examples:

_Success Response: status 200_

```
{
  "channelmessage": [
    {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    }
  ],
  "thread": [
    {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    }
  ]
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## CHANNEL MEMBER ENDPOINTS

---

---

## **List Channel Members**

**Method: GET**

`Description : retrieves all members of a channel identified by ID`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/members/

```

Required Parameters: **channel_id, org_id**

Response Examples:

_Success Response: status 200_

```
[
  {
    "_id": "string",
    "role_id": "string",
    "starred": false,
    "is_admin": false,
    "notifications": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    }
  }
]
```

_Error Response: status 404_

```
Not found
```

## **Add Channel Member(s)**

**Method: POST**

`Description: add one or more members to a channel`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/members/
```

Request Body:

_For Single Member_

```
{
  "_id": "string",
  "role_id": "string",
  "starred": false,
  "is_admin": false,
  "notifications": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

_For multiple Members_

```
[
        {
          "_id": "string",
          "role_id": "string",
          "is_admin": false,
          "notifications": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        },
        {
          "_id": "string",
          "role_id": "string",
          "is_admin": false,
          "notifications": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        },
        {
          "_id": "string",
          "role_id": "string",
          "is_admin": false,
          "notifications": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        },
        ...
    ]"

```

Required Parameters: **channel_id, org_id, data**

Response Examples:

_Success Response: status 201_

```
{
  "_id": "string",
  "role_id": "string",
  "starred": false,
  "is_admin": false,
  "notifications": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

_Status: 204_

```
Error Response
```

_Status 404_

```
Collection not found
```

## **Channel Member input**

**Method: POST**

`Description: Check if input is enabled for users`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/members/can_input/
```

Request Body :

```
{
  "_id": "string",
  "role_id": "string",
  "starred": false,
  "is_admin": false,
  "notifications": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

Required Parameters: **channel_id, org_id, data**

Response Examples:

_Success Response: status 201_

```
{
  "_id": "string",
  "role_id": "string",
  "starred": false,
  "is_admin": false,
  "notifications": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

_Error Response: status 404_

```
Collection Not Found
```

### Get Channel Member Details

**Method: GET**

`Description: Get details of a channel member`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/members/{member_id}/

```

Required Parameters: **channel_id, member_id, org_id**

Response Examples:

_Sucess Response: status 200_

```
{
  "_id": "string",
  "role_id": "string",
  "starred": false,
  "is_admin": false,
  "notifications": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

_Error Response: status 404_

```
Not found
```

## **Update Channel Member Details'**

**Method: PUT**

`Description: Update channel member details`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/members/{member_id}/
```

Request Body:

```
{
  "_id": "string",
  "role_id": "string",
  "starred": false,
  "is_admin": false,
  "notifications": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

Required Parameters: **channel_id, member_id, org_id, data**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "role_id": "string",
  "starred": false,
  "is_admin": false,
  "notifications": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

_Error Response: status 404_

```
Not found
```

## **Delete Channel Member**

**Method: DELETE**

`Description: Remove member from a channel`

URL:

```
https://channels.zuri.chat​/api​/v1​/{org_id}​/channels​/{channel_id}​/members​/{member_id}​/
```

Required Parameters: **channel_id, member_id, org_id**

Response Examples:

_Success Response: status 204_

```
User removed successfully
```

_Error Response: status 404_

```
Not found
```

## \*\*USER NOTIFICATION ENDPOINTS

---

---

### **User channel notifications**

**Method: GET**

`Description: Retrieve user notification preferences for channel`

URL:

```
https://channels.zuri.chat/v1/{org_id}/channels/{channel_id}/members/{member_id}/notifications/

```

Required Parameters: **channel_id, member_id, org_id**

Response Examples:

_Success Response: status 200_

```
{
  "web": "all",
  "mobile": "all",
  "same_for_mobile": true,
  "mute": true
}
```

_Error Response: status 404_

```
Not found
```

## **Update User Notifications**

**Method: PUT**

`Description: Update user notification preferences for a channel`

URL:

```
​https://channels.zuri.chat/api​/v1​/{org_id}​/channels​/{channel_id}​/members​/{member_id}​/notifications​/
```

Request Body:

```
{
  "web": "all",
  "mobile": "all",
  "same_for_mobile": true,
  "mute": true
}
```

Required Parameters: **channel_id, member_id, org_id, data**

Response Examples:

_Success Response: status 200_

```
{
  "web": "all",
  "mobile": "all",
  "same_for_mobile": true,
  "mute": true
}
```

## \*\*MESSAGE ENDPOINTS

---

---

## **Get Channel messages**

**Method: GET**

`Description: Get all the messages sent in a channel.`

URl:

```
/v1/{{org_id}}/channels/{{channel_id}}/messages/
```

Required Parameters: **channel_id, org_id**

Response Examples:

_Success Response: status 200_

```
[
  {
    "_id": "string",
    "user_id": "string",
    "channel_id": "string",
    "can_reply": true,
    "type": "message",
    "edited": true,
    "files": [
      "string"
    ],
    "timestamp": "2021-10-12T07:25:47.597Z",
    "replies": 0,
    "has_files": true,
    "pinned": true,
    "content": "string",
    "emojis": [
      "string"
    ],
    "event": {
      "additionalProp1": "string",
      "additionalProp2": "string",
      "additionalProp3": "string"
    }
  }
]
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Create Channel Message**

**Method: POST**

`Description: Create a channel message and automatically publishes to centrifugo`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/messages/
```

Request Body:

```
{
  "user_id": "string",
  "content": "string",
  "files": [
    "string"
  ],
  "event": {
    "additionalProp1": {
      "action": "string",
      "recipients": [
        [
          {
            "_id": "string",
            "role_id": "string",
            "starred": false,
            "is_admin": false,
            "notifications": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        ]
      ]
    },
    "additionalProp2": {
      "action": "string",
      "recipients": [
        [
          {
            "_id": "string",
            "role_id": "string",
            "starred": false,
            "is_admin": false,
            "notifications": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        ]
      ]
    },
    "additionalProp3": {
      "action": "string",
      "recipients": [
        [
          {
            "_id": "string",
            "role_id": "string",
            "starred": false,
            "is_admin": false,
            "notifications": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        ]
      ]
    }
  }
}
```

Required Parameters: **channel_id, org_id, data**

Response Examples:

_Success Response: status 201_

```
{
  "_id": "string",
  "user_id": "string",
  "channel_id": "string",
  "can_reply": true,
  "type": "message",
  "edited": true,
  "files": [
    "string"
  ],
  "timestamp": "2021-10-12T07:30:04.134Z",
  "replies": 0,
  "has_files": true,
  "pinned": true,
  "content": "string",
  "emojis": [
    "string"
  ],
  "event": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Search channel messages**

`/v1/{org_id}/channels/{channel_id}/search_messages/`

**Method: POST**

`Description: Search channel messages based on content, pinned status, file attachments etc.`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/search_messages/
```

Request Body:

```
{
        "user_id": "string",
        "content": "string",
        "has_files": true,
        "pinned": true
    }
```

Required Parameters: **channel_id, org_id, data**

Response Examples:

_Success Response: status 200_

```
[
  {
    "result": [
      {
        "_id": "string",
        "user_id": "string",
        "channel_id": "string",
        "can_reply": true,
        "type": "message",
        "edited": true,
        "files": [
          "string"
        ],
        "timestamp": "2021-10-12T07:42:14.530Z",
        "replies": 0,
        "has_files": true,
        "pinned": true,
        "content": "string",
        "emojis": [
          "string"
        ],
        "event": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      }
    ],
    "query": {
      "user_id": "string",
      "content": "string",
      "has_files": true,
      "pinned": true
    }
  }
]
```

_Error Response: status 400_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## Get Message Details

**Method: GET**

`Description: Retrieve message details`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/messages/{msg_id}/
```

Required Parameters: **msg_id, org_id**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "user_id": "string",
  "channel_id": "string",
  "can_reply": true,
  "type": "message",
  "edited": true,
  "files": [
    "string"
  ],
  "timestamp": "2021-10-12T08:04:03.647Z",
  "replies": 0,
  "has_files": true,
  "pinned": true,
  "content": "string",
  "emojis": [
    "string"
  ],
  "event": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Update Message Details**

**Method: PUT**

`Description: Update message based on ID`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/messages/{msg_id}/
```

Request Body:

```
{
    "pinned": true,
    "content": "string"
}
```

Required Parameters: **msg_id, org-id, user_id, channel_id, data**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "user_id": "string",
  "channel_id": "string",
  "can_reply": true,
  "type": "message",
  "edited": true,
  "files": [
    "string"
  ],
  "timestamp": "2021-10-12T07:57:27.138Z",
  "replies": 0,
  "has_files": true,
  "pinned": true,
  "content": "string",
  "emojis": [
    "string"
  ],
  "event": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Delete Message**

**Method: DELETE**

`Description: Delete a message based on Id and organisation`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/messages/{msg_id}/
```

Required Parameters: **msg_id, org_id, user_id, channel_id**

Response Examples:

_Success Response: status 204_

```
Message deleted successfully
```

_Error Response: status 404_

```
Not found
```

## **Get Message Reactions**

**Method: GET**

`Description: Retrieve message reactions`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/messages/{msg_id}/reactions/

```

Required Parameters: **msg_id, org_id, user_id, channel_id**

Response Examples:

_Success Response: status 200_

```
[
  {
    "title": "string",
    "count": 0,
    "users": [
      "string"
    ]
  }
]
```

## **Update Message Reaction**

**Method: POST**

`Description: Update message reactions`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/messages/{msg_id}/reactions/
```

Request Body:

```
{
    "title": "string",
    "user_id": "string"
}
```

Required Parameters: **msg_id, org_id, user_id, channel_id, data**

Response Examples:

_Success Response: status 201_

```
{
  "title": "string",
  "user_id": "string"
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **ROLES ENDPOINTS**

---

---

## Get Channel Roles

**Method: GET**

`Description: Retrieve channel roles`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/roles/

```

Required Parameters: **channel_id, org_id**

Response Examples:

_Success Response: status 200_

```
[
  {
    "_id": "string",
    "name": "string",
    "channel_id": "string",
    "permissions": [
      {
        "name": "string",
        "description": "string"
      }
    ]
  }
]
```

## **Create a Channel Role**

**Method: POST**

`Description: Create a channel role`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/roles/
```

Request Body:

```
{
  "name": "string",
  "permissions": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

Required Parameters: **channel_id, org_id. data**

Response Examples:

_Success Response: status 201_

```
{
  "_id": "string",
  "name": "string",
  "channel_id": "string",
  "permissions": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

## **Get Role Details**

**Method: GET**

`Description: Retrieve role details`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/roles/{role_id}/
```

Required Parameters: **org_id, role_id**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "name": "string",
  "channel_id": "string",
  "permissions": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

## **Update Role Details**

**Method: PUT**

`Description: Update role details`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/roles/{role_id}/
```

Request Body:

```
{
  "name": "string",
  "permissions": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

Required Parameters: **org_id, role_id, data**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "name": "string",
  "channel_id": "string",
  "permissions": [
    {
      "name": "string",
      "description": "string"
    }
  ]
}
```

## **Delete a Role**

**Method: DELETE**

`Description: Delete a role`

URL:

```
https://channeles.zuri.chat​/api​/v1​/{org_id}​/roles​/{role_id}​/
```

Required Parameters: **org_id, role_id**

Response Examples:

_Success Response: status 204_

```
Role deleted successfully
```

_Error Response: status 404_

```
Not found
```

## **THREADS ENDPOINTS**

---

---

## **Get Message Threads**

**Method: GET**

`Description: Retrieve all replies to message`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/messages/{channelmessage_id}/threads/

```

Required Parameters: **channelmessage_id, org_id**

Response Examples:

_Success Response: status 200_

```
[
  {
    "_id": "string",
    "user_id": "string",
    "channelmessage_id": "string",
    "channel_id": "string",
    "content": "string",
    "files": [
      "string"
    ],
    "has_files": true,
    "emojis": [
      "string"
    ],
    "edited": true,
    "timestamp": "2021-10-12T07:53:12.168Z"
  }
]
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
```

## **Create Message Thread**

**Method: POST**

`Description: Add reply to message`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/messages/{channelmessage_id}/threads/
```

Request Body:

```
{
    "user_id": "string",
    "content": "string",
    "files": [
        "string"
    ]
}
```

Required Parameters: **channelmessage_id, org_id, channel_id, data**

Response Examples:

_Success Response: status 201_

```
{
  "_id": "string",
  "user_id": "string",
  "channelmessage_id": "string",
  "channel_id": "string",
  "content": "string",
  "files": [
    "string"
  ],
  "has_files": true,
  "emojis": [
    "string"
  ],
  "edited": true,
  "timestamp": "2021-10-12T07:57:27.121Z"
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Update Thread message**

**Method: PUT**

`Description: Update thread message`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/threads/{thread_id}/

```

Request Body:

```
{
  "content": "string"
}
```

Required Parameters: **org_id, thread_id, user_id, channel_id, data**

Response Examples:

_Success Response: status 200_

```
{
  "_id": "string",
  "user_id": "string",
  "channelmessage_id": "string",
  "channel_id": "string",
  "content": "string",
  "files": [
    "string"
  ],
  "has_files": true,
  "emojis": [
    "string"
  ],
  "edited": true,
  "timestamp": "2021-10-12T08:51:48.391Z"
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Update Thread Reaction**

**Method: POST**

`Description: Update thread reactions`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/threads/{thread_id}/
```

Request Body:

```
{
    "title": "string",
    "user_id": "string"
}
```

Required Parameters: **thread_id, org_id, user_id, channel_id, data**

Response Examples: _Success Response: status 201_

```
{
  "title": "string",
  "user_id": "string"
}
```

_Error Response: status 404_

```
{
  "error": {
    "message": "string",
    "status": 0
  }
}
```

## **Delete Thread Message**

**Method: DELETE**

`Description: Delete thread message`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/threads/{thread_id}/
```

Required Parameters: **org_id, thread_id, user_id, channel_id**

Response Examples:

_Success Response: status 204_

```
Thread message deleted successfully
```

## **SOCKET ENDPOINTS**

---

---

## **Get Channel Socket Name**

**Method: GET**

`Description: Retrieve Centrifugo socket channel name based on organisation and channel IDs`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/channels/{channel_id}/socket/
```

Required Parameters: **channel_id, org_id**

Response Examples:

_Success Response: status 200_

```
{
  "socket_name": "string",
  "channel_id": "string"
}
```

_Error Response: status 404_

```
Not found
```

## **ROOM ENDPOINT**

---

---

## **Create Room**

**Method: POST**

`Description: Create a room`

URL:

```
https://channels.zuri.chat/api/v1/{org_id}/rooms/
```

Request Body:

```
{
  "room_name": "string",
  "room_members_ids": [
    "string"
  ],
  "ord_id": "string",
  "private": false
}
```

Required Parameter: **org_id, data**

Response Examples:

_Success Ressponse: status 201_

```
{
  "room_name": "string",
  "room_members_ids": [
    "string"
  ],
  "ord_id": "string",
  "private": false
}
```

_Error Response: status 404_

```{
  "error": {
    "message": "string",
    "status": 0
  }
}
```
