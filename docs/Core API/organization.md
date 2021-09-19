
# List Organizations Endpoint

## Enpoint path
```/organizations```
## Request Type
```GET```

**curl**

```
curl -X 'GET' \
  'https://api.zuri.chat/v1/organizations/6137d69b21d3c78fc9a84bdf/members' \
  -H 'accept: application/json'
 ```

 
 
 ## Responses with Code Description Examples
**Response for a successful returned list of members in this format**
```sh
{
code*	integer($int32)
example: 200
message*	string
data	[...
}
 ```

**Example**

```sh
200
Successfully returned list of members in an organization, including an empty array if there are no members
{
  "code": 200,
  "message": "string",
  "data": [
    {
      "_id": "6137d69b21d3c78fc9a84bdf",
      "orgId": "6137d69b21d3c78fc9a84bdf",
      "files": {},
      "image_url": "https://image.location/image.png",
      "name": "string",
      "email": "user@example.com",
      "display_name": "string",
      "bio": "string",
      "pronouns": "string",
      "phone": "string",
      "time_zone": "string",
      "joined_at": "2021-09-14"
    }
  ]
}
```
**Response when access token is missing or invalid**
```sh
{
code*	integer($int32)
example: 401
message*	string
}
 ```
**Example**
```sh
401
Access token is missing or invalid
{
  "code": 401,
  "message": "string"
}
```
**Response when internal server error occurs during operation**
```sh
{
code*	integer($int32)
example: 500
message*	string
}
 ```
**Example**
```sh
{
  "code": 500,
  "message": "string"
}
```


