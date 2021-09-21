---
slug: /chess
sidebar_position: 3
title: Chess Plugin
---

# Create New Game Endpoint

- Method: Post
- Description: Create a new game

#### If the number of ongoing games is less than 6, a new game room with a unique ID is created. There can’t be more than 6 games running concurrently. This also restarts a completed game.

##### REQUEST BODY SCHEMA: application/json

##### Required parameters;
| Name | Data type |
| ------ | ------ |
| User_ID | integer |
| User_name | string |
| User_ID | string |

> Once you click on Join as player 1, all parameters will be inputed automatically, then you recieve a response.
> 
### Responses with description
``` sh
Code: 200
Description: Success, return ID of created game
Code: 500
Description: Internal server error
{
  "message": "Unable to Create a Game: CustomError: Unable to Connect to Zuri Core DB [UPDATE]: Error: Request failed with status code 500",
  "data": null,
  "success": false
}
```

# Join a Game

- Method: Post
- Description: Enter a game as the second player

#### After a game is created, you can join as the second party to play against the creator. 
##### REQUEST BODY SCHEMA: application/json


##### Required parameters;
| Name | Data type |
| ------ | ------ |
| game_ID | string |
| User_ID | integer |
| User_name | string |
| User_ID | string |


> Once you click on Join as player 2, all parameters will be inputed automatically, then you recieve a response.
### Responses with description
``` sh
Code: 200
Description: Success, joined a created game
Code: 500
Description: Internal server error
{
  "message": "Unable to Create a Game: CustomError: Unable to Connect to Zuri Core DB [UPDATE]: Error: Request failed with status code 500",
  "data": null,
  "success": false
}
```

# Allows a user to watch existing game play

###### A user can join a game directly by registering on the Core API Auth as a spectator while a game is on. This places a player into a gaming room as spectator.

-------------------------------------------------------------------------------------------------------------------

Method: PATCH

``` sh
 // game spectators
    spectators: Joi.array()
      .items(
         Joi.object({
          user_id: Joi.string().required(),
          user_name: Joi.string().required(),
          image_url: Joi.string(),
         })
      )
        .allow(null),
```

Endpoint: /Watch

##### Request body

-	Application/json

##### Parameters

-	Accepts a integer as the user_id

-	Accepts a string as the user_name

-	Accepts a string as the image_url

```sh
{
    “user_id”: 2,
     “user_name”: "John Doe",
     "user_id": "string",
     "image_url": "string"
}
```

> Once you click on Watch game, It takes an array of spectators by recoding their user_id, user_name and image_url
> All parameters will be inputed and you receive a response.
> When spectators leave, they are automatically removed from the array of spectators. 
> 
### Responses with description

``` sh
Code: 200
Means you’ve been successfully registered as a spectator in the game.
Code: 500
Means an error has occured and your request to watch the game as a spectator failed.
{ 
    “message”: “Game not found”,
    “data”: null,
    “success”: false
}
```

## Message as a Spectator

This allows spectators to be able to drop comments/messages while watching an existing live game

``` sh
 \\messages
       messages: Joi.array()
       .items(
           Joi.object({
               user_name: Joi.string().required(),
               text: Joi.string().required(),
               image_url: Joi.string(),           
            })
       )
       .allow(null),
```

> Its accepts a user_id (in integer) text (in string) in JSON format



# Ends Game Based On Win: 
        
#### Links:
        No links (W.I.P)
#### Responses:
        200 – A successful response
		500 – An error message
#### Function
		Outright win; Not when the game is a draw or there’s a tie between players. 
		Checkmated win; the king is under attack and every move by the king will put it in check. Another example is when an opponent’s time Expired time duration before a complet required number of moves.
        Removes a spectator from a game room; Dismisses one or more spectators from a chess game room either before a match begins or whilst a match is in motion.

--------------------------------------------


`Method` : PATCH
- This method changes the existing amount of spectators to the new amount.

`Endpoint` : /unwatch


##### Request body
- application/json


#### Parameters
- Accepts an integer as the user_ID.
- Accepts a string as the game_ID.

```sh
{
  "user_id": 2,
  "game_id": "string"
}
```


#### Sample Request 
```bash
curl -X 'PATCH' \
  'https://chess.zuri.chat/api/v1/game/unwatch' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "user_id": 2,
  "game_id": "string"
}'
```

#### Sample Response 
Code: **200**
- Returns Success. This implies that a specific amount of spectators has been removed.

Code: **400**
- Returns Bad Request. This implies that the server will not process a request due to an error.


**Response Body**
```sh
{
  "message": "Game not found",
  "data": null,
  "success": false
}
```


**Response Headers**
```sh
connection: keep-alive
content-length: 56
content-type: application/json; charset=utf-8
date: Fri,17 Sep 2021 08:56:45 GMT
etag: W/"38-nkixhbZddBxAWkLZwxpwHeHi6bc"
server: nginx/1.21.1
vary: Origin
x-powered-by: Express
```

Code: **500**
- Returns Error Occurred. This implies an internal server error and something has gone wrong with the server of the website.



# End game by forfeiting an ongoing game

This basically end game and choose the winner based on the user who forfeit the game against user that did not forfeit the game.

## Features

1. By ending a game through forfeiting an ongoing making a PATCH request enables you to make changes as part of the resourses at that location

2. It accepts a user_ID (In Integer) and game_ID (In string) in JSON format.

 ```sh
 {
  "user_id": 3,
  "game_id": "string"
 }
 ```

3. If the request is successful it gives a code 200 for successful response

4. It wil give 404 response for game not found request if the request doesn't match the game already

Response body

```sh
{
  "message": "Game does not exist",
  "data": null,
  "success": false
}
```

Response header

```sh
 connection: keep-alive 
 content-length: 61 
 content-type: application/json; charset=utf-8 
 date: Wed,15 Sep 2021 18:22:48 GMT 
 etag: W/"3d-geJitolmACn5u3T7flRgtvCftcM" 
 server: nginx/1.21.1 
 vary: Origin 
 x-powered-by: Express
```


Response header

```sh
{
  "message": "Cannot read property '1' of null",
  "data": null,
  "success": false
}
```

Response header

```sh
 connection: keep-alive 
 content-length: 74 
 content-type: application/json; charset=utf-8 
 date: Wed,15 Sep 2021 18:27:28 GMT 
 etag: W/"4a-eWv+OPszuwPpMTVFsrnpMBXLWhw" 
 server: nginx/1.21.1 
 vary: Origin 
 x-powered-by: Express 
 ```

 # Queries DB to fetch a single game

- Method: Get
- Description: Uses the id of a created game to get its details

##### REQUEST BODY SCHEMA: application/json

##### Response header

```sh
{
  "message": string"
  "data": null,
  "success": boolean
}
```


##### Required parameters;
| Name | Data type |
| ------ | ------ |
| game_ID | string |


# Queries DB to fetch games by user id

- Method: Get
- Description: Uses the id of a user to get all games a user has been involved in



##### REQUEST BODY SCHEMA: application/json

##### Response header

```sh
{
  "message": string"
  "data": null,
  "success": boolean
}
```


##### Required parameters;
| Name | Data type |
| ------ | ------ |
| user_ID | integer |


# ZURI CHESS DOCUMENTATION
- GET GENERAL PLUGIN INFORMATION
- GET SIDEBAR INFORMATION


## ZURI CHESS DOCUMENTATION - GET GENERAL PLUGIN INFORMATION

Documentation for Zuri chess plugin on getting general plugin information

###  This Endpoint returns all the information for this plugin about zuri.chess plugin

- Method : GET
- Description: Return all the information for zuri.chess plugin


### Required Parameters: 
  None

### Responses
``` sh
Code : 200
Description: Success, return list of plugin information in JSON object format
{
  "message":"Plugin Information Retrieved",
  "data": <Object>,
  "success": true
}
Code : 500
Description: Server Error, Could not fetch plugin information
{
  "message":"",
  "data":null,
  "success": false
}
```

# GET SIDEBAR INFORMATION


	@@ -19,26 +58,11 @@ Zuri chess plugin on getting sidebar information

### Responses
``` sh
Code : 200,
Description: Success, return list of sidebar information in JSON object format
{
  "message":"Fetched sidebar data",
  "data": <Object>,
  "success": true
}
	@@ -51,7 +75,7 @@ Description:Server Error, Data not available
}
Code : 500
Description: Internal Server Error occurred
{
  "message":"",
  "data":null,
```

### Responses with description
``` sh

200:
Description: A successful response

404:   
Description: Game does not exist

500:
Description: An error occurred
```
##### Url link [https://chess.zuri.chat/api/v1/game/{gameId}]
