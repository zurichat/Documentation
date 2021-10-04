---
slug: /organizations/
sidebar_position: 1
title: Organization
---
The Organization API gives access and control for Zuri workspace management. You can also add plugins to your workspace.

## Endpoints
- POST  `/organizations`
- GET  `/organizations/{organization_id}`
- GET `/organizations/url/{workspace_url}`
- GET  `/organizations`
- DELETE `organizations/{organization_id}`
- PATCH /organizations /`{organization_id}` /url
- PATCH /organizations /`{organization_id}` /name
- PATCH /organizations /`{organization_id}` /logo


## Authorization

 `cookieAuth` or `bearerAuth`

 [Refer to the Authentication Guide](https://docs.zuri.chat/authorization)

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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="nodejs" label="NodeJS">

  ```javascript
    var request = require('request');
    var data = {
              "creator_email": "hng@test.com"
            };
    var options = {
    'method': 'POST',
    'url': 'https://api.zuri.chat/organizations',
    'headers': {
      'Content-Type': ['application/json', 'application/json']
    },
    body: JSON.stringify(data)

    };
    request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
    });
  ```
  </TabItem>
  <TabItem value="python" label="Python" default>

  ```python
     import requests
      url = "https://api.zuri.chat/organizations"
      payload = {
                "creator_email":"hng@test.com"
      }
      headers = {
      'Content-Type': 'application/json',
      }
      response = requests.request("POST", url, headers=headers, json=payload)
      print(response.text)
  ```

  </TabItem>
</Tabs>

---

## Get organization
GET `/organizations/{organization_id}`

Returns an organization identified by `organization_id` from the list of organizations. 

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{organization_id} | string | True | Organization ID

#### Sample Request
```bash
  curl --location --request GET 'https://api.zuri.chat/organizations/6145d3ff285e4a1840207454' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```sh
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

#### Error Response

```sh
{
  "status": "401",
  "message": "unauthorized access"
}
```
---

## Get organization by url

GET `/organizations/url/{workspace_url}`

Returns an organization identified by `workspace_url` as a path parameter.

REQUEST URL: `https://api.zuri.chat/organizations/url//{workspace_url}`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
workspace_url | string | True | organzation url


#### Sample Request
```sh
  curl --location --request GET 'https://api.zuri.chat/organizations/url/zurichat-vbr2001.zurichat.com' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```sh
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
            "created_at": "2021-09-18T13:56:47.441936316+02:00",
            "updated_at": "0001-01-01T00:00:00Z"
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
---

## Get all organizations
Returns a list of all the organizations.

GET `/organizations`

REQUEST URL: `https://api.zuri.chat/organizations`

#### Sample Request
```sh
curl -X GET "https://api.zuri.chat/organizations" 
     -H "accept: application/json"
```
#### Sample Response
```sh
{
  "code": 200,
  "data": [
    {
      "_id": "6137d69b21d3c78fc9a84bdf",
      "created_at": "2021-10-03",
      "creator_email": "hng@email.com",
      "creator_id": "6137d69b21d3c78fc9a84bdf",
      "deleted_at": "2021-10-03",
      "logo_url": "hng.zuri.chat",
      "name": "HNG",
      "organization_settings": {
        "global_settings": {
          "allow_only_admin_invite": true,
          "allow_user_add_plugins": true
        },
        "plugin_settings": {
          "chess_plugin": {
            "allow_in_every_channel": false
          }
        }
      }
    }
  ],
  "message": "string"
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

## Update organization url
PATCH `{organization_id}/url`

Update organization's url as the owner, authorized by `bearerToken`. Requires the `organization_id` as path parameter.

REQUEST URL: `https://api.zuri.chat/{organization_id}/url`


#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
 organization_id | string | True | organization ID

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
url | string | True | new url for the organization


#### Sample Request
```sh
curl -X PATCH "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/url" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"url\":\"https://hngworkspace.zuri.chat\"}"
```

```sh
JSON
Content-Type: application/json

	{
		"url": "https://hngworkspace.zuri.chat"
	}
```

#### Sample Response

```sh
{
"code": 200,
"message": "resource updated successfully"
  
}
```
#### Error Response
```sh
{
  "status": "401",
  "message": "No Authorization or session expired."
}
```

## Update organization name
PATCH `organizations/{organization_id}/name`

This endpoint allows you to update an organization's name.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/name`

#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
 organization_id | string | True | organization ID

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
organization_name | string | True | new name for the organization

#### Sample Request
```sh
curl -X PATCH "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/name" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"organization_name\":\"hngworkspace\"}"
```

```sh
JSON
Content-Type: application/json
	{
		"organization_name": "hngworkspace"
	}
```

#### Sample Response

```sh
{
  "code": 200,
  "message": "resource updated successfully"
}
```
#### Error Response
```sh
{
  "status": "400",
  "message": "bad request"
}
```

---

## Update organization logo

PATCH `organizations/{organization_id}/logo`

Update organization's logo.

REQUEST URL: `https://api.zuri.chat/{organization_id}/logo`


#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
 organization_id | string | True | organization ID

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
url | string | True | logo url

#### Sample Request

```sh
curl -X PATCH "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/logo" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"url\":\"https://image.storage/image.png\"}"
```

```sh
JSON
Content-Type: application/json
	{
		"url": "https://image.storage/image.png"
	}
```

#### Sample Response

```sh
{
  "code": "200",
  "message": "resource updated successfully"
}
```

#### Error Response
```sh
{
  "status": "400",
  "message": "bad request"
}
```
---

## Add plugin to organization

POST  `organizations/{organization_id}/plugins`

Installs (add) a plugin to an organization's workspace identified by `organization_id`.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/plugins`


#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
plugin_id | string | True | plugin ID
user_id | string | True | This is the ID of the user adding a plugin to the organization


#### Sample Request
```sh
cURL
curl -X POST "https://api.zuri.chat/organizations/6137d69b21d3c78fc9a84bdf/plugins" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{
          \"plugin_id\":\"6137d69b21d3c78fc9a84bdf\",
          \"user_id\":\"6137d69b21d3c78fc9a84bdf\"
        }"
```

```sh
JSON
Content-Type: application/json
	{
    "plugin_id" : "23456784ert67",
    "user_id" : "6145d358285e4a184020744f"
	}
```

#### Sample Response

```sh
{
  "code": 201,
  "message": "string"
  "data": {
        "InsertedID": "6137d69b21d3c78fc9a84bdf"
  } 
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




## Fetch organization plugins
GET `organizations/{organization_id}/plugins`

This endpoint returns a list of plugins from an organization including an empty array if there are no plugins.

REQUEST URL: `https://api.zuri.chat/organizations/{organization_id}/plugins`

#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
organization_id | string | True | organization ID


#### Sample Request
```bash
  curl --location --request GET 'https://api.zuri.chat/organizations/6145d3ff285e4a1840207454/plugins' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```sh
    {
      "status": 200,
      "message": "Plugins Retrived successfully",
      "data": null
    }
```
---



