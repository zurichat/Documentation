---
slug: /organization
sidebar_position: 2
title: Organization
---
The Organization API gives access and control for Zuri workspace management.

## Using the Organization Resource

The organization API has various endpoints listed below:

HTTP VERB | RESOURCE ENDPOINT
------- | -------
 GET | /organizations
 POST | /organizations
 GET | /organizations /`{organization_id}`
 DELETE | /organizations/`{organization_id}`
 PATCH | /organizations /`{organization_id}` /url
 PATCH | /organizations /`{organization_id}` /name
 PATCH | /organizations /`{organization_id}` /logo
 PUT | /organizations /`{organization_id}` /members /`{member_id}`
 DELETE | /organizations /`{organization_id}` /members /`{member_id}`


Organization-Member Resource also has its endpoints listed below:

HTTP VERB | RESOURCE ENDPOINT
------- | -------
 GET | /organizations /`{organization_id}` /members
 POST | /organizations /`{organization_id}` /members
 
## Authorization

 `cookieAuth` or `bearerAuth`

 [Refer to the Authentication Guide](https://docs.zuri.chat/authorization)

---
## Retrieve Organization

This endpoint is used to fetch an organization using the Organization Id.

Endpoint : `/organizations/{organization_id}`

Request Type : `GET`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Sample Request
```bash
  curl --location --request GET 'https://api.zuri.chat/organizations/6145d3ff285e4a1840207454' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```json
    {
      "status": 200,
      "message": "organization retrieved successfully",
      "data": {
          "_id": "6145d3ff285e4a1840207454",
          "name": "Zuri Chat",
          "creator_email": "ejike@gmail.com",
          "creator_id": "6145d358285e4a184020744f",
          "plugins": null,
          "admins": null,
          "settings": null,
          "logo_url": "",
          "workspace_url": "zurichat-vbr2001.zurichat.com",
          "created_at": "2021-09-18T11:56:47.441936316Z",
          "updated_at": "0001-01-01T00:00:00Z"
      }
    }
```
---

## Create Organization

This is a request endpoint that creates an organizaion or workspace. It requires the creators email which will need to be a valid email.

Endpoint : `/organizations`

Request Type : `POST`

#### Body Params

Param | Required | Description
---------|----------|---------
 creator_email | yes | string

#### Sample Request

```json
	{
		"creator_email": "hng@test.com"
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