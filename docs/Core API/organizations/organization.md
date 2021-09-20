---
slug: /organizations/
sidebar_position: 1
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
## Delete Organization

This endpoint allows you to delete an existing organization.

Endpoint : `/organizations`

Request Type : `POST`

#### Body Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Sample Request

```json
	{
		"organization_id": "6137d69b21d3c78fc9a84bdf"
	}
```

#### Sample Response

```json
{
"code": 200,
"message": "resource deleted successfully",
  
}
```
---

## Update Organization Url
Enables an authenticated organization owner to update the organization's url.

Endpoint : `{organization_id}/url`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Body Params

Param | Required | Description
---------|----------|---------
 url | yes | string

#### Sample Request

```json
	{
		"url": "https://hngworkspace.zuri.chat"
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
## Retrieve Organization by URL

This endpoint is used to retrieve an organization with the given `full` URL.

Endpoint : `/organizations/url/{workspace_url}`

Request Type : `GET`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 workspace_url | yes | string

#### Sample Request
```bash
  curl --location --request GET 'https://api.zuri.chat/organizations/url/zurichat-vbr2001.zurichat.com' \
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
            "created_at": "2021-09-18T13:56:47.441936316+02:00",
            "updated_at": "0001-01-01T00:00:00Z"
      }
    }
```
---

## Fetch Organization Plugins

This endpoint returns a list of plugins from an organization including an empty array if there are no plugins.

Endpoint : `organizations/{organization_id}/plugins`

Request Type : `GET`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Sample Request
```bash
  curl --location --request GET 'https://api.zuri.chat/organizations/6145d3ff285e4a1840207454/plugins' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```json
    {
      "status": 200,
      "message": "Plugins Retrived successfully",
      "data": null
    }
```
---
## Add Plugin to Organization

Installs (add) a plugin to an organization's workspace.

Endpoint : `organizations/{organization_id}/plugins`

Request Type : `POST`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 organization_id | yes | string


#### Body Params

Param | Required | Description
---------|----------|---------
 plugin_id | yes | string
 user_id | yes | This is the ID of the user adding a plugin to the organization.

#### Sample Request

```json
	{
      "plugin_id" : "23456784ert67",
    "user_id" : "6145d358285e4a184020744f"
	}
```

#### Sample Response

```json
{
  "code": 201,
  "message": "string"
  "data": {
        "InsertedID": "6137d69b21d3c78fc9a84bdf"
  }
  
}
```
---
## Update Organization Name
This endpoint enables you to add or change a verified organization's name.

Endpoint : `organizations/{organization_id}/name`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Body Params

Param | Required | Description
---------|----------|---------
 organization_name | yes | string

#### Sample Request

```json
	{
		"organization_name": "hngworkspace"
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

## Update Organization Logo

This endpoint enables you to add or change a verified organization's logo.

Endpoint : `organizations/{organization_id}/logo`

Request Type : `PATCH`

#### Path Params

Param | Required | Description
---------|----------|---------
 organization_id | yes | string

#### Body Params

Param | Required | Description
---------|----------|---------
 url | yes | string

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

