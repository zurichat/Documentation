---
slug: /users
sidebar_position: 3
title: Users
---

Represents a Zuri chat user and can perform some bulk actions.

---

## Fetch all users

This endpoint is commonly used to retrieve a list of all users.

Request Type : `GET`

Endpoint : `/users`

```bash

curl --location --request GET 'https://api.zuri.chat/users' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```

Sample Response:

```json
	{
		"status": 0,
		"message": "string",
		"data": [
			{
				"id": "61374b5e7ccea12370c5adec",
				"first_name": "Jane",
				"last_name": "Doe",
				"email": "janedoe@email.com",
				"password": "$2a$14$Nem0fMPQbLUOOcZgaLt/WOUoQDs/Cb9EhX71440ROLanZAom0Da5G",
				"phone": "0123456789",
				"settings": null,
				"time_zone": "",
				"created_at": "2021-09-07T11:22:06.932Z",
				"updated_at": "1901-01-01T00:00:00.000Z",
				"deleted_at": "1901-01-01T00:00:00.000Z",
				"workspaces": null,
				"workspace_profiles": null,
				"email_verification": {
					"expired_at": "1901-01-01T00:00:00.000Z",
					"token": null,
					"verified": false,
					"id": "61374b5e7ccea12370c5adec"
				},
				"password_resets": null
			}
		]
	}
```

---

## Create a new user

Creates a new user given a request body of required key-value pairs. Returns ID of created user.

Request Type : `POST`

Endpoint : `/users`


#### Body Params

| Param          | Required | Description |
| -------------- | -------- | ----------- |
| first_name     | yes      | string      |
| last_name      | yes      | string      |
| phone_number   | yes      | number      |
| password       | yes      | string      |
| email          | yes      | string      |
| email_verified | yes      | boolean     |

#### Sample Request

```json
	{
		"first_name": "string",
		"last_name": "string",
		"phone_number": 0,
		"password": "string",
		"email": "string",
		"email_verified": true
	}
```

#### Sample Response

```json
    {
        "status": 200,
        "message": "user created",
        "data": {
          "InsertedID": "6137a5af52efebbea2739c71"
        }
    }
```

---

## Update user details

This endpoint allows you update some existing user fields; 


Request Type : `PATCH`

Endpoint : `/users/{user_id}`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 user_id | yes | string

#### Request Body Params

| Param          | Required | Description |
| -------------- | -------- | ----------- |
| first_name     | -      | string      |
| last_name      | -      | string      |
| phone_number   | -      | number      |
| password       | -      | string      |
| email          | -      | string      |
| email_verified | -      | boolean     |


#### Request Body

```json
	{
		"first_name": "string",
		"last_name": "string",
		"phone_number": 0,
		"password": "string",
		"email": "string",
		"email_verified": true
	}
```

#### Sample Response

```json
	{
		"status": 200,
		"message": "user created",
		"data": {
			"MatchedCount": 1,
			"ModifiedCount": 1,
			"UpsertedCount": 0,
			"UpsertedID": null
		}
	}
```

---

## Fetch user details

This endpoint allows you retrieve information about a user.


Request Type : `GET`

Endpoint : `/users/{user_id}`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 user_id | yes | string


#### Sample Response

```json
	{
		"id": "61374b5e7ccea12370c5adec",
		"first_name": "Jane",
		"last_name": "Doe",
		"email": "janedoe@email.com",
		"password": "$2a$14$Nem0fMPQbLUOOcZgaLt/WOUoQDs/Cb9EhX71440ROLanZAom0Da5G",
		"phone": "0123456789",
		"settings": null,
		"time_zone": "",
		"created_at": "2021-09-07T11:22:06.932Z",
		"updated_at": "1901-01-01T00:00:00.000Z",
		"deleted_at": "1901-01-01T00:00:00.000Z",
		"workspaces": null,
		"workspace_profiles": null,
		"email_verification": {
			"expired_at": "1901-01-01T00:00:00.000Z",
			"token": null,
			"verified": false,
			"id": "61374b5e7ccea12370c5adec"
		},
		"password_resets": null
	}
```

## Deactivate user

This endpoint allows you deactivate a user account.


Request Type : `DELETE`

Endpoint : `/users/{user_id}`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 user_id | yes | string


#### Sample Response

```json
	{
		"status": 200,
		"message": "user deleted successfully",
		"data": null
	}
```

## Fetch users by query

This endpoint allows you retrieve all users that match the given query parameter.

Request Type : `GET`

Endpoint : `/users/search/{query}`

#### Path Parameters

Param | Required | Description
---------|----------|---------
 query | yes | object



#### Sample Response

```json
	{
		"status": 0,
		"message": "string",
		"data": [
			{
			"id": "61374b5e7ccea12370c5adec",
			"first_name": "Jane",
			"last_name": "Doe",
			"email": "janedoe@email.com",
			"password": "$2a$14$Nem0fMPQbLUOOcZgaLt/WOUoQDs/Cb9EhX71440ROLanZAom0Da5G",
			"phone": "0123456789",
			"settings": null,
			"time_zone": "",
			"created_at": "2021-09-07T11:22:06.932Z",
			"updated_at": "1901-01-01T00:00:00.000Z",
			"deleted_at": "1901-01-01T00:00:00.000Z",
			"workspaces": null,
			"workspace_profiles": null,
			"email_verification": {
				"expired_at": "1901-01-01T00:00:00.000Z",
				"token": null,
				"verified": false,
				"id": "61374b5e7ccea12370c5adec"
			},
			"password_resets": null
			}
		]
	}
```
