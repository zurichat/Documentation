---
slug: /organizations/members
sidebar_position: 2
title: Members
---


## Retrieve organization member list

This endpoint returns a list of members from an organization.

Endpoint : `/organizations/{organization_id}/members/`

Request Type : `GET`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Sample Request
```bash
  curl --location --request GET 'https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```json
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
---

## Add user to organization

This is a request endpoint that enables you to add a user to an organization.

Endpoint : `organizations/{organization_id}/members`

Request Type : `POST`

#### Body Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Sample Request

```json
	{
		"user_id" : "6137d69b21d3c78fc9a84bdf"
	}
```

#### Sample Response

```json
    {
        "code": 201,
        "message": "string",
        "data": {
            "InsertedID": "6137d69b21d3c78fc9a84bdf"
        }
    }
```
---
## Fetch organization member
This endpoint is used to fetch the details of a user in an organization.

Endpoint : `organizations/{organization_id}/members/{member_id}`

Request Type : `GET`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string

#### Sample Request
```bash
  curl --location --request GET 'https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/members/6137d69b21d3c78fc9a84bdf' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```json
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
---

## Reactivate member
This endpoint is used to reactivate a member in an organization.

Endpoint : `organizations/{organization_id}/members/{member_id}`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string


#### Sample Response

```json
{
  "code": 200,
  "message": "resource updated successfully"
}
```
---

## Deactivate organization member
This endpoint will be used to deactivate/remove a user from an organization.

Request Type : `DELETE`

Endpoint : `organizations/{organization_id}/members/{member_id}`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string


#### Sample Response

```json
	{
		"status": 200,
		"message": "resource updated successfully",
	}
```
---
## Update organization member status
This endpoint updates the organization member status.

Endpoint : `organizations/{organization_id}/members/{member_id}/status`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string

#### Body Params

Param | Required | Description
---------|----------|---------
 status | yes | string

#### Sample Request

```json
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

---
## Update organization member profile picture
This endpoint updates the organization member profile picture.

Endpoint : `organizations/{organization_id}/members/{member_id}/photo`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string

#### Body Params

Param | Required | Description
---------|----------|---------
 image_url | yes | string

#### Sample Request

```json
	{
		"url": "https://image.storage/image.png"
	}
```

#### Sample Response

```json
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 

---
## Update organization member profile
This endpoint updates the organization member profile.

Endpoint : `organizations/{organization_id}/members/{member_id}/profile`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string


#### Sample Request

```json
	{
		"data": "some string"
	}
```

#### Sample Response

```json
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 

---
## Toggle organization member presence (Away/Active):
This endpoint toggles the presence of an organization's member.

Endpoint : `organizations/{organization_id}/members/{member_id}/presence`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string


#### Sample Response

```json
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 

---
## Update organization member settings
This endpoint updates the organization member settings.

Endpoint : `organizations/{organization_id}/members/{member_id}/settings`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string
 member_id | yes | string


#### Sample Request

```json
	{
		"global_settings": {
                    "allow_user_add_plugins":true,
                    "allow_only_admin_invite":true
            } ,
        "plugin_settings": {
        + "chess_plugin": {...}
        }
	}
```

#### Sample Response

```json
{
"code": 200,
"message": "resource updated successfully"
  
}
``` 