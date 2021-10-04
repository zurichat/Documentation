---
slug: /organizations/members
sidebar_position: 2
title: Members
---

Organization-Members Resource allows an organization to perform bulk actions related to its members like add new members, update member details, deactivate and reactivate a member, toggle member presence and more.

## Endpoints
- POST `/organizations/{organization_id}/members`
- GET `organizations/{organization_id}/members/{member_id}`
- GET `/organizations/{organization_id}/members/`
- PATCH `organizations/{organization_id}/members/{member_id}/status`
- PATCH `organizations/{organization_id}/members/{member_id}/photo`
- PATCH `organizations/{organization_id}/members/{member_id}/profile`
- POST `/organizations/{organization_id}/members/{member_id}/presence`
- PATCH `organizations/{organization_id}/members/{member_id}/settings`
- PATCH `organizations/{organization_id}/members/{member_id}`
- DELETE `organizations/{organization_id}/members/{member_id}`


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


## Get organization member
GET `organizations/{organization_id}/members/{member_id}`

This endpoint is used to fetch the details of a user in an organization.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Sample Request

```sh
cURL
  curl --location --request GET 'https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

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


## Get organization members

GET `/organizations/{organization_id}/members/`

This endpoint returns a list of members from an organization.

REQUEST URL: `https://api.zuri.chat//organizations/{organization_id}/members/`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID

#### Sample Request
```sh
  curl --location --request GET 'https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

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
```


## Update organization member status

PATCH `organizations/{organization_id}/members/{member_id}/status`

This endpoint updates the organization member status.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/status`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
status | string | True | set member status


#### Sample Request
```sh
curl -X PATCH "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/status" 
-H "accept: application/json" 
-H "Content-Type: application/json" 
-d "{\"status\":\"Available\"}"
```

```sh
JSON
Content-Type: application/json
	{
		"status": "Available"
	}
```

#### Sample Response

```json
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 


## Update organization member profile picture

PATCH `organizations/{organization_id}/members/{member_id}/photo`

This endpoint updates the organization member profile picture.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/photo`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
image_url | string | True | update member photo


#### Sample Request

```sh
curl -X PATCH "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/photo" -H "accept: application/json" 
-H "Content-Type: image" 
-d "{\"image_url\":\"https://image.storage/image.png\"}"
```

```sh
JSON
Content-Type: application/json
	{
		"image_url": "https://image.storage/image.png"
	}
```

#### Sample Response

```sh
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 


## Update organization member profile
PATCH `organizations/{organization_id}/members/{member_id}/profile`

This endpoint updates the organization member profile.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/profile`


#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Request Body
Name | Data Type | Required | Description
------- | ------- | ------- | -------
bio | string | False  | updated bio content
display_name | string | False | updated display name
first_name | string | False | updated first name
last_name | string | False | updated last name
phone | string | False | updated phone
pronouns | string | False | updated pronouns
social | string | False | updated social handles
time_zone | string | False | updated time zone

#### Sample Request

```sh
curl -X PATCH "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/profile" 
-H "accept: application/json" 
-H "Content-Type: application/json" 
-d "{ \"bio\":\"string\",\"display_name\":\"string\",\"first_name\":\"string\",\"last_name\":\"string\",\"phone\":\"string\",\"pronouns\":\"string\",\"socials\":[{\"title\":\"string\",\"url\":\"string\"}],\"time_zone\":\"string\"}"
```

```sh
JSON
Content-Type: application/json

  {
  "bio": "string",
  "display_name": "string",
  "first_name": "string",
  "last_name": "string",
  "phone": "string",
  "pronouns": "string",
  "socials": [
    {
      "title": "string",
      "url": "string"
    }
  ],
  "time_zone": "string"
}
```

#### Sample Response

```json
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 


## Toggle organization member presence (Away/Active):

POST `/organizations/{organization_id}/members/{member_id}/presence`

This endpoint updates the presence of an organization's member.

REQUEST URL : `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}/presence`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Sample Request
```sh
curl -X POST "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf/presence" 
-H "accept: application/json"
```

#### Sample Response

```sh
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 


## Update organization member settings

PATCH `organizations/{organization_id}/members/{member_id}/settings`

This endpoint updates the organization member settings.

REQUEST URL : `organizations/{organization_id}/members/{member_id}/settings`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Sample Request
```sh
{
  "messages_and_media": {
    "additional_options": [
      "id",
      "nunc",
      "nisl"
    ],
    "bring_emails_into_zuri bson:": "magna",
    "convert_emoticons_to_emoji": true,
    "custom": false,
    "emoji": "libero",
    "emoji_as_text": true,
    "frequently_used_emoji": true,
    "inline_media_and_links": [
      "nisi",
      "euismod",
      "pellentesque"
    ],
    "messages_one_click_reaction": [
      "pede",
      "at",
      "montes"
    ],
    "names": "odio",
    "show_jumbomoji": false,
    "theme": "dui"
  },
  "notifications": {
    "channel_hurdle_notification": false,
    "email_notifications_for_mentions_and_dm": [
      "ut",
      "posuere",
      "nulla"
    ],
    "message_preview_in_each_notification": false,
    "mute_all_sounds": true,
    "my_keywords": "eleifend",
    "notification_schedule": "rutrum",
    "notify_me_about": "lectus",
    "thread_replies_notification": true,
    "use_different_settings_mobile": "nunc",
    "when_iam_not_active_on_desktop": "venenatis"
  },
  "sidebar": {
    "always_show_in_the_sidebar": [
      "interdum",
      "a",
      "at"
    ],
    "list_private_channels_seperately": false,
    "organize_external_conversations": true,
    "show_conversations": "phasellus",
    "show_profile_picture_next_to_dm": false,
    "sidebar_sort": "ullamcorper"
  },
  "themes": {
    "colors": "orci",
    "themes": "cursus"
  }
}
```

#### Sample Response

```sh
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 


## Reactivate organization member
PATCH `organizations/{organization_id}/members/{member_id}`

This endpoint is used to reactivate a member in an organization.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/members/{member_id}`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID
{member_id} | string | True | member ID

#### Sample Request
```sh
curl -X PATCH "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf" 
-H "accept: application/json"
```

#### Sample Response

```sh
{
  "code": "200",
  "message": "resource updated successfully"
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