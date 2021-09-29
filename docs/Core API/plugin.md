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