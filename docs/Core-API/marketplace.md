---
sidebar_position: 5
slug: /core-api/marketplace
title: Marketplace
---

The Marketplace resource allows you add, delete and get information about plugins in the marketplace, which can be installed by users in their organizations.

## Endpoints

- GET `/marketplace/plugins`
- GET `/marketplace/plugins/{id}`
- DELETE `/marketplace/plugins/{id}`

## Get all plugins in the marketplace

GET `/marketplace/plugins`
Returns a list of avalaible plugins that can be integrated into your organization. There are no parameters for this request.

REQUEST URL: https://api.zuri.chat/marketplace/plugins

#### Sample Request

```sh
curl -X GET "https://api.zuri.chat/marketplace/plugins"
     -H "accept: application/json"
```

#### Sample Response

```sh
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "id": "613b677d41f5856617552f1e",
      "name": "sales_prospects",
      "description": "A Sales Prospects Plugin",
      "developer_name": "Elijah Soladoye",
      "developer_email": "shodown96@gmail.com",
      "template_url": "https://sales.zuri.chat",
      "sidebar_url": "https://sales.zuri.chat/sidebar",
      "install_url": "https://sales.zuri.chat/install",
      "icon_url": "icon.png",
      "approved": true,
      "deleted": false,
      "version": "",
      "category": "",
      "approved_at": "2021-09-10 16:11:19.788734956 +0200 CEST m=+8417.562674390",
      "created_at": "2021-09-10 16:11:09.672268819 +0200 CEST m=+8407.446208225",
      "updated_at": "2021-09-10 16:11:09.672277579 +0200 CEST m=+8407.446216983",
      "deleted_at": ""
    },
    {
      "id": "613e32a115fb2424261b6621",
      "name": "Music room",
      "description": "This is a plugin that provides the music video functionality",
      "developer_name": "Music devs",
      "developer_email": "team_music_plugin@gmail.com",
      "template_url": "https://music.zuri.chat/",
      "sidebar_url": "https://music.zuri.chat/sidebar/",
      "install_url": "https://music.zuri.chat/",
      "icon_url": "https://drive.google.com/file/d/1KB9uSWqg0rM21ohsPxGnG8_1xbcdReio/view?usp=drivesdk",
      "approved": true,
      "deleted": false,
      "version": "",
      "category": "",
      "approved_at": "2021-09-12 19:02:35.211227165 +0200 CEST m=+980.587314655",
      "created_at": "2021-09-12 19:02:25.099449107 +0200 CEST m=+970.475536597",
      "updated_at": "2021-09-12 19:02:25.099458485 +0200 CEST m=+970.475545935",
      "deleted_at": ""
    },
    {
      "id": "613ec51c15fb2424261b6658",
      "name": "DM PLUGIN",
      "description": "This is the Direct Messaging plugin built for Zuri Chat. It facilitates the sending of messages between users",
      "developer_name": "Delight",
      "developer_email": "dfelastevesocial@gmail.com",
      "template_url": "https://dm.zuri.chat",
      "sidebar_url": "https://dm.zuri.chat/api/v1/sidebar",
      "install_url": "https://dm.zuri.chat/api/v1/install",
      "icon_url": "",
      "approved": true,
      "deleted": false,
      "version": "",
      "category": "",
      "approved_at": "2021-09-13 05:27:34.177502087 +0200 CEST m=+38479.553589576",
      "created_at": "2021-09-13 05:27:24.066067273 +0200 CEST m=+38469.442154759",
      "updated_at": "2021-09-13 05:27:24.066076185 +0200 CEST m=+38469.442163637",
      "deleted_at": ""
    },
    {
      "id": "6156c5e6d56dd3c4d8a962b5",
      "name": "Contribution Tracker",
      "description": "Plugin developed to ease workflow and contribution process to open source projects.",
      "developer_name": "Joshua Monyei",
      "developer_email": "ct@zuri.chat",
      "template_url": "http://ct.zuri.chat/",
      "sidebar_url": "http://ct.zuri.chat/api/v1/sidebar",
      "install_url": "http://ct.zuri.chat/install",
      "icon_url": "https://www.svgrepo.com/show/291854/add.svg",
      "approved": true,
      "deleted": false,
      "version": "v1",
      "category": "Productivity",
      "approved_at": "2021-10-01 10:25:20.523134321 +0200 CEST m=+1588.629825156",
      "created_at": "2021-10-01 10:25:10.391700665 +0200 CEST m=+1578.498391479",
      "updated_at": "2021-10-01 10:25:10.391706938 +0200 CEST m=+1578.498397721",
      "deleted_at": ""
    }
  ]
}
```

#### Error Message

```sh
{
  "code": "404",
  "message": "plugins not found"
}
```

## Get a plugin details

GET `/marketplace/plugins/{id}`

Returns unique details about a plugin in the market. Requires the `id` parameter for the request.

REQUEST URL: https://api.zuri.chat/marketplace/plugins/{id}

#### Path Parameters

| Name | Data Type | Required | Description |
| ---- | --------- | -------- | ----------- |
| {id} | string    | True     | plugin ID   |

#### Sample Request

```sh
curl -X GET "https://api.zuri.chat/marketplace/plugins/614105b66173056af01b4cca"
     -H "accept: application/json"
```

#### Sample Response

```sh
{
  "status": 200,
  "message": "success",
  "data": {
    "id": "614105b66173056af01b4cca",
    "name": "Company sales prospects",
    "description": "Sales Prospects Plugin",
    "developer_name": "Alashi Muyiwa",
    "developer_email": "alashimuyiwa@gmail.com",
    "template_url": "https://sales.zuri.chat",
    "sidebar_url": "https://sales.zuri.chat/sidebar",
    "install_url": "https://sales.zuri.chat/install",
    "icon_url": "icon.png",
    "approved": true,
    "deleted": false,
    "version": "",
    "category": "",
    "approved_at": "2021-09-14 22:27:45.076423995 +0200 CEST m=+121830.416043838",
    "created_at": "2021-09-14 22:27:34.91226525 +0200 CEST m=+121820.251885085",
    "updated_at": "2021-09-14 22:27:34.91227424 +0200 CEST m=+121820.251894057",
    "deleted_at": ""
  }
}
```

#### Error Response

```sh
{
  "code": "400",
  "message": "plugin not found"
}
```

## Delete a plugin

DELETE `/marketplace/plugins/{id}`

Removes a plugin from the marketplace.

REQUEST URL: https://api.zuri.chat/marketplace/plugins/{id}

#### Path Parameters

| Name | Data Type | Required | Description |
| ---- | --------- | -------- | ----------- |
| {id} | string    | True     | plugin ID   |

#### Sample Request

```sh
curl -X DELETE "https://api.zuri.chat/marketplace/plugins/614117a96173056af01b4cf8"
     -H "accept: application/json"
```

#### Sample Response

```sh
{
  "status": 200,
  "message": "plugin removed",
  "data": null
}
```

#### Error Response

````sh
```sh
{
  "status": 400,
  "message": "plugin not found",
  "data": null
}
````
