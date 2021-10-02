---
slug: /plugin
sidebar_position: 6
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

Name | Data Type | Required | Description
------- | ------- | ------- | -------
description | string | True | describe the new plugin
developer_email | string | True | email of plugin developer 
developer_name | string | True | name of plugin developer
install_url | string | True | url to install the plugin
name | string | True | name of the plugin
sidebar_url | string | True | sidebar url
template_url | string | True | template url

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

 To register a new plugin on Zuri Chat, you will pass in your parameters as JSON on the base url:  https://api.zuri.chat/plugins/register

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

Code| Description 
---------|----------
 400 | Bad request e.g developer_email is missing
401 | Access token is missing or invalid 
500 | Internal server error