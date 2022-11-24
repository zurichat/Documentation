---
sidebar_position: 3
slug: /core-api/users
title: Users
---

The Users Resource allows you to create a new user account, update user's details, retrieve user's details, get all users in an organization and more.

## Endpoints

- POST `/users`
- GET `/users/{user_id}`
- GET `/users`
- GET `/users/{email}/organizations`
- PATCH `/users/{user_id}`
- DELETE `/users/{user_id}`

## Authentication

A valid authentication token must be included in all the requests for the `User` resource except `Post /users` as follows:

In the Authorization Header: add `Authorization: Bearer {KEY}`

## Create a new user

POST `/users`

Create a new user account. Accepts a request with a body of email, etc. Returns the user ID.

REQUEST URL: https://api.zuri.chat/users

#### Body Request

| Name           | Data Type | Required | Description                                         |
| -------------- | --------- | -------- | --------------------------------------------------- |
| first_name     | string    | True     | user's first name                                   |
| last_name      | string    | True     | user's last name                                    |
| phone_number   | string    | True     | user's phone number                                 |
| password       | string    | True     | password; no sharing                                |
| email          | string    | True     | user's email                                        |
| email_verified | boolean   | False    | checks if user's email is verified. Default:`false` |

#### Sample Request

```sh
curl -X POST "https://api.zuri.chat/users"
     -H "accept: application/json"
	 -H "Content-Type: application/json"
	 -d "{\
	    	"email\":\"ape@gmail.com\",
			\"email_verified\":false,
			\"first_name\":\"ape\",
			\"last_name\":\"animal\",
			\"password\":\"Apeanimal\",
			\"phone_number\":\"09011223456\"
		}"
```

```sh
JSON
Content-Type: application/json
{
  "email": "ape@gmail.com",
  "email_verified": false,
  "first_name": "ape",
  "last_name": "animal",
  "password": "Apeanimal",
  "phone_number": "09011223456"
}
```

#### Sample Response

```sh
{
  "status": 200,
  "message": "user created",
  "data": {
    "user_id": "615840f887540d8d01ffc88d",
    "verification_code": "602569"
  }
}
```

#### Error Response

```sh
{
  "message": "bad request",
  "status": "400"
}
```

## Get information about a user

GET `/users/{user_id}`

Get all details of a user, identified by `user_id`

REQUEST URL:https://api.zuri.chat/users/{user_id}

#### Request Headers

Authorization: `cookieAuth` or `bearerAuth`

#### Path Parameters

| Name      | Data Type | Required | Description |
| --------- | --------- | -------- | ----------- |
| {user_id} | string    | True     | User ID     |

#### Sample Request

```sh
curl -X GET "https://api.zuri.chat/users/615840f887540d8d01ffc88d"
     -H "accept: application/json"
```

#### Sample Response

```sh
{
  "created_at": "2021-09-07 11:22:06.932180",
  "deleted_at": "0001-01-01 00:00:00",
  "email": "janedoe@email.com",
  "email_verification": {
    "expired_at": "0001-01-01 00:00:00",
    "id": "61374b5e7ccea12370c5adec",
    "token": null,
    "verified": false
  },
  "first_name": "Jane",
  "id": "61374b5e7ccea12370c5adec",
  "last_name": "Doe",
  "password": "$2a$14$Nem0fMPQbLUOOcZgaLt/WOUoQDs/Cb9EhX71440ROLanZAom0Da5G",
  "password_resets": null,
  "phone": "0123456789",
  "settings": null,
  "time_zone": "",
  "updated_at": "0001-01-01 00:00:00",
  "workspace_profiles": null,
  "workspaces": null
}
```

#### Error Response

```sh
{
  "status": "401",
  "message": "unauthorized access"
}
```

## Get all users

GET `/users`

Returns a list of all users.

REQUEST URL: https://api.zuri.chat/users

#### Request Headers

Authorization: `bearerAuth`

#### Sample Request

```sh

curl --location --request GET 'https://api.zuri.chat/users' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```

#### Sample Response

```sh
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

#### Error Response

```sh
{
  "status": "401",
  "message": "unauthorized access"
}
```

## Update user details

PATCH `/users/{user_id}`

This endpoint allows you update some existing user fields like first name, last name and others. Returns an updated user details.
REQUEST URL:

#### Request Headers

Authorization: `bearerAuth`

#### Path Parameters

| Parameter | Required | Description |
| --------- | -------- | ----------- |
| user_id   | yes      | string      |

#### Request Body

| Name           | Data Type | Required | Description                                         |
| -------------- | --------- | -------- | --------------------------------------------------- |
| first_name     | string    | True     | user's first name                                   |
| last_name      | string    | True     | user's last name                                    |
| phone_number   | string    | True     | user's phone number                                 |
| password       | string    | True     | password; no sharing                                |
| email          | string    | True     | user's email                                        |
| email_verified | boolean   | False    | checks if user's email is verified. Default:`false` |

#### Sample Request

```sh
curl -X PATCH "https://api.zuri.chat/users/615840f887540d8d01ffc88d"
     -H "accept: application/json"
	 -H "Content-Type: application/json"
	 -d "{\
	    	"email\":\"ape@gmail.com\",
			\"email_verified\":false,
			\"first_name\":\"ape\",
			\"last_name\":\"animal\",
			\"password\":\"Apeanimal\",
			\"phone_number\":\"09011223456\"
		}"
```

```sh
PATCH https://api.zuri.chat/users/615840f887540d8d01ffc88d
JSON
Content-Type: application/json
{
  "email": "ape@gmail.com",
  "email_verified": "false",
  "first_name": "ape",
  "last_name": "animal",
  "password": "Apeanimal",
  "phone_number": "09011223456"
}
```

#### Sample Response

```sh
	{
		"status": 200,
		"message": "user was updated successfully",
		"data": {
			"MatchedCount": 1,
			"ModifiedCount": 1,
			"UpsertedCount": 0,
			"UpsertedID": null
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

## Get user organizations

GET `/users/{email}/organizations`

This endpoint returns all organizations a user belongs to.

REQUEST URL: https://api.zuri.chat/users/{email}/organizations

#### Request Headers

Authorization: `bearerAuth`

#### Path Parameters

| Name      | Data Type | Required | Description |
| --------- | --------- | -------- | ----------- |
| {user_id} | string    | True     | User ID     |

#### Sample Request

```sh
curl -X GET "https://api.zuri.chat/users/ape%40gmail.com/organizations" -H "accept: application/json"
```

#### Sample Response

```sh
{
  "data": {
    "id": "61408b3e009d394a85088ba3",
    "img": [
      "https://imagelocation.com/image.png",
      "https://imagelocation.com/image.png"
    ],
    "isOwner": false,
    "logo_url": "https://imagelocation.com/image.png",
    "name": "ZuriHNG",
    "workspace_url": "zurichat-ssr9730.zurichat.com"
  },
  "message": "user organizations retrieved successfully",
  "status": 200
}
```

## Deactivate user

DELETE `/users/{user_id}`
This endpoint allows you deactivate a user account.

REQUEST URL: https://api.zuri.chat/users/{user_id}

#### Request Headers

Authorization: `bearerAuth`

#### Path Parameters

| Name      | Data Type | Required | Description |
| --------- | --------- | -------- | ----------- |
| {user_id} | string    | True     | User ID     |

#### Sample Request

```sh
curl -X DELETE "https://api.zuri.chat/users/32wdf" -H "accept: application/json"
```

#### Sample Response

```sh
	{
		"status": 200,
		"message": "user deleted successfully",
		"data": null
	}
```

#### Error Response

```sh
{
  "status": 401,
  "message": "No Authorization or session expired."
}
```
