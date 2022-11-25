---
sidebar_position: 6
slug: /core-api/plugin
title: Plugin
---

## Register plugin

POST `/plugins/register`

This endpoint allows you to register a new plugin. You need to be authorized via `cookieAuth` or `bearerAuth` to make this request.

REQUEST URL: https://api.zuri.chat/plugins/register

#### Request Headers

Content-Type: `application/json`

Authorization: `cookieAuth` or `bearerAuth`

#### Request Body

| Name            | Data Type | Required | Description               |
| --------------- | --------- | -------- | ------------------------- |
| description     | string    | True     | describe the new plugin   |
| developer_email | string    | True     | email of plugin developer |
| developer_name  | string    | True     | name of plugin developer  |
| install_url     | string    | True     | url to install the plugin |
| name            | string    | True     | name of the plugin        |
| sidebar_url     | string    | True     | sidebar url               |
| template_url    | string    | True     | template url              |

#### Sample request

```sh
JSON
Content-Type: applicaation/json
{
  "description": "This is my plugin",
  "developer_email": "janedoe@mail.com",
  "developer_name": "Jane Doe",
  "install_url": "plugin.zuri.chat/install",
  "name": "MyPlugin",
  "sidebar_url": "plugin.zuri.chat/mysidebar",
  "template_url": "plugin.zuri.chat/myplugin"
}
```

#### Sample Response

```sh
{
  "status": 200,
  "message": "success",
  "data": {
    "plugin_id": "615382a0627d729efec46b69"
  }
}

```

#### Error Response

```sh
{
  "status": 400,
  "message": "bad request"
}
```

## Tutorial - How to Register a Plugin

To register a new plugin on Zuri Chat, you will pass in your parameters as JSON on the base url: https://api.zuri.chat/plugins/register

#### POST Body

- You must set Content-type HTTP header to application/json
- You must pass in your token as a `bearer` or `cookie` token in the `Authorization` HTTP Header

Here is how to send a POST request to register a new plugin with a JSON body

```
  POST api.zuri.chat/plugins/register
  Content-type: `application/json`
  Authorization: Bearer zzz6g-vhron-juo
  {
  "description": "This is my plugin",
  "developer_email": "janedoe@mail.com",
  "developer_name": "Jane Doe",
  "install_url": "plugin.zuri.chat/install",
  "name": "MyPlugin",
  "sidebar_url": "plugin.zuri.chat/mysidebar",
  "template_url": "plugin.zuri.chat/myplugin"
}
```

Here's how to register a plugin with cURL:

```
curl -X POST "https://api.zuri.chat/plugins/register"
-H "accept: application/json"
-H "Content-Type: application/json"
-d "{
  \"description\":\"This is my plugin\",
  \"developer_email\":\"janedoe@mail.com\",
  \"developer_name\":\"Jane Doe\",
  \"install_url\":\"plugin.zuri.chat/install\",
  \"name\":\"MyPlugin\",
  \"sidebar_url\":\"plugin.zuri.chat/mysidebar\",
  \"template_url\":\"plugin.zuri.chat/myplugin\"
}"

```

Response

```
{
    "status": 200,
    "message": "success",
    "data": {
        "plugin_id": "61540e7ea999ef8386e80886"
    }
}
```

## Likely Errors

| Code | Description                                |
| ---- | ------------------------------------------ |
| 400  | Bad request e.g developer_email is missing |
| 401  | Access token is missing or invalid         |
| 500  | Internal server error                      |

## Plugin Communication with Zuri Core API

To facilitate communication with the zuri core, zuri core provides a sync_request_url that allows a plugin to be pinged each time there is new data to be written.

PATCH `/plugins/{PLUGIN_ID}`

This endpoint would allow you to update the plugin sync_request_url. The sync_request url accepts a post request with no data.

REQUEST URL: https://api.zuri.chat/plugins/{PLUGIN_ID}

#### Request Headers

Content-Type: `application/json`

#### Request Body

| Name             | Data Type | Required | Description                                   |
| ---------------- | --------- | -------- | --------------------------------------------- |
| sync_request_url | string    | True     | provide a ping endpoint for Zuri Core updates |

#### Sample request

```sh
JSON
Content-Type: applicaation/json
{
  "sync_request_url": "https://plugin.zuri.chat/api/v1/sync"
}
```

#### Sample Response

```sh
{
  "status": 200,
  "message": "Updated plugin successfully",
  "data": null
}

```

### Synchronizing your database

On a successful post request to the endpoint provided, it is expected that you make a GET request to `https://api.zuri.chat/marketplace/plugins/{plugin_id}` to obtain the queue data. This queue data has the format shown below:

```sh
"queue": [{
    "id": 63,
    "event": "enter_organization",
    "message": {
        "member_id": "616ab35313b7d802d5027702",
        "organization_id": "616986c5fbc5b28d42170c64"
        }
    },
    {
    "id": 64
    "event": "leave_organization",
    "message": {
        "member_id": "616ab35313b7d802d5027702",
        "organization_id": "616986c5fbc5b28d42170c64"
        }
    }]
```

The possible events available for now are `enter_organization` and `leave_organization`. It is expected that these events propose he changes to be made to the plugins databases.
After the plugin has pulled this data and updated their local database, it will be expected that the plugin send a PATCH request to `https://api.zuri.chat/plugins/{PLUGIN_ID}/sync` with the id of the last element in the queue so the queue data can be updated. A sample request is shown below:

REQUEST URL: https://api.zuri.chat/plugins/{PLUGIN_ID}/sync

#### Request Headers

Content-Type: `application/json`

#### Request Body

| Name | Data Type | Required | Description                             |
| ---- | --------- | -------- | --------------------------------------- |
| id   | Integer   | True     | The id of the last element in the queue |

#### Sample request

```sh
JSON
Content-Type: applicaation/json
{
  "id": 20
}
```

#### Sample Response

```sh
{
  "status": 200,
  "message": "Synchronization updated successfully.",
  "data": null
}

```

After this requestis completed Zuri core and eachn plugin are both completely in sync.
