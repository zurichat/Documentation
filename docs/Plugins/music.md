---
slug: /plugins/music
sidebar_position: 6
title: Music Plugin
---

# Zuri Chat Music Plugin Endpoints Documentation

(http://music.zuri.chat)
version: 1.0.0
host: music.zuri.chat
basePath: /api/v1

# Getting Started

Our API is organised around using HTTP verbs and REST. Our API accepts and returns JSON formatted payload

# Authorization

User must be authenticated to use the Api

|                           |        |
| ------------------------- | ------ |
| Security Scheme Type      | HTTP   |
| HTTP Authorization Scheme | bearer |

# Fetch sidebar

This endpoint is commonly used to retrieve a list of component on the sidebar.
| | |
| ------ | ------ |
| Request Type | `GET` |
| Endpoint | `/sidebar` |
| Content Type | `application/json` |

```php
curl --location --request GET 'https://music.zuri.chat/api/v1/sidebar' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```

Sample Response

```json
{
  "name": "Music Plugin",
  "description": "string",
  "plugin_id": "string",
  "organisation_id": "string",
  "user_id": "string",
  "group_name": "Music",
  "show_group": false,
  "joined_rooms": {
    "title": "Music",
    "id": "string",
    "unread": null,
    "members": null,
    "icon": "string",
    "action": "open",
    "organisation_id": "string",
    "owner": "string",
    "user_id": "string"
  },
  "public_rooms": {
    "title": "Music",
    "id": "string",
    "unread": null,
    "members": null,
    "icon": "string",
    "action": "open",
    "organisation_id": "string",
    "owner": "string",
    "user_id": "string"
  }
}
```
