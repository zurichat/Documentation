---
slug: /organizations/members
sidebar_position: 2
title: Members
---


## Retrieve Organization Member List

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
    "status": 200,
    "message": "Members retrieved successfully",
    "data": [
        {
            "_id": "6145d3ff285e4a1840207455",
            "bio": "",
            "deleted": false,
            "deleted_at": "0001-01-01T00:00:00Z",
            "display_name": "",
            "email": "ejike@gmail.com",
            "files": null,
            "first_name": "",
            "image_url": "",
            "joined_at": "0001-01-01T00:00:00Z",
            "last_name": "",
            "org_id": "6145d3ff285e4a1840207454",
            "phone": "",
            "presence": "true",
            "pronouns": "",
            "role": "owner",
            "settings": null,
            "socials": null,
            "status": "",
            "time_zone": "",
            "user_name": "ejike"
        },
    ]
}
```
---