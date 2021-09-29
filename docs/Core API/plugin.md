---
slug: /plugin
sidebar_position: 6
title: Plugin
---

# Register plugin

This endpoint allows you to register a new plugin.


Request Type: `POST`

Endpoint: `/plugins/register`

## Request Headers
    
Content-Type: `application/json`

Authorization: `cookieAuth` or `bearerAuth`

    
## Request Body Params
Params| Description | Required
---------|----------|---------
 description | string | yes
developer_email | string | yes
developer_name | string | yes
install_url | string | yes
name | string | yes
sidebar_url | string | yes
template_url | string | yes


## Sample request

```sh
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

## Sample Response

### **200** Plugin successfully registered

```
RESPONSE SCHEMA: application/json

code required      integer <int32>
message required   string 
data required      object
```

```sh

{
  "status": 200,
  "message": "success",
  "data": {
    "plugin_id": "615382a0627d729efec46b69"
  }
}

```

### **404** Bad Request 

```sh
{
  "status": 400,
  "message": ""
}
```

# Tutorial - How to Register a Plugin

 To register a new plugin on Zuri Chat, you will pass in your parameters as JSON on the base url:  https://api.zuri.chat/plugins/register

  ## POST Body

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