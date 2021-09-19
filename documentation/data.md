# Zuri Chat Core API (Data write Endpoint)
​
Getting started with the write endpoint is easy, all you need to do is to get parameters and arrange them in proper order as shown below. You then make a POST request to the endpoint and you should receive a status code of 200 showing your write request was successful. <br>
​

### Request Body Schema 
|  |  |
| ---------- | --------- |
| **Plugin:**   |  **README** |
| Plugin_ID* | String: The Plugin ID |
| Organization_ID* | String: The ID of the organization the plugin belongs to |
| Collection_name* | String: The name of the collection plugin wants to add data to or remove data from|
| Bulk_write | Boolean: The value indicates whether many documents are to be written or not |
| Bulk_delete | Boolean: The value indicates wether many documents are to be deleted or not |
| Object_id | String: The ID of previously inserted data at the server side |
| Filter | Query to be matched |
| Payload* | Actual data the plugin wants to add to the database |
​
### Things to note:
- There are no parameters in the url, everything required is going to be part of the payload.
- The required values are starred in the schema.
- Only valid id's, collection name and payloads will be accepted. If not provided 400 status errors will be raised.


​
## **Write** 
### POST /data/write
​
```sh
https://api.zuri.chat/v1/data/write
```
Let's the plugin make a write request to the data endpoint.


​
## Request Headers
**Content-Type:** application/json
​
## Body
Format type : raw(json)
```sh
{
    "plugin_id": "string",
    "organization_id": "string",
    "collection_name": "string",
    "payload": {},
    "bulk_write": true,
    "object_id": "string",
    "filter": {}
}
```
## Examples
​ For a successful write request
​
### Request:
```sh
curl --location --request POST 'https://api.zuri.chat/v1/data/write' \
--header 'Content-Type: application/json' \
--data-raw '{
    "plugin_id": "string",
    "organization_id": "string",
    "collection_name": "string",
    "payload": {},
    "bulk_write": true,
    "object_id": "string",
    "filter": {}
}'
```
​
### Response:
```sh
{
 "status": "204",
 "message": "resource successfully written",
 "data": {
  "written_count": 0
 }
}
```
​
### For an unexpected error
​
### Request:
```sh
curl --location --request POST 'https://api.zuri.chat/v1/data/write' \
--header 'Content-Type: application/json' \
--data-raw '{
    "plugin_id": "string",
    "organization_id": "string",
    "collection_name": "string",
    "payload": {},
    "bulk_write": true,
    "object_id": "string",
    "filter": {}
}'
```
​
### Response:
```sh
{
 "status": "400",
 "message": "there was an unexpected error",
}
```

# **READ**

## **How it Works:**

The function of this endpoint is to retrieve data from the database. Data like username, email or phone number and some other writable data, they all can be retrieved with this endpoint.

## **How to make use of this endpoint:**

**GET** request to this URL `(https://api.zuri.chat/data/read/{plugin_id}/{coll_name}/{org_id)}`,

`for java`

```java
URL url = new URL("http://api.zuri.chat/data/read/{plugin_id}/{coll_name}/{org_id}"); HttpURLConnection con = (HttpURLConnection) url.openConnection(); con.setRequestMethod("GET");
```

`for flutter`

```dart
Future<http.Response> fetchData() {
  return http.get(Uri.parse('https://api.zuri.chat/data/read/{plugin_id}/{coll_name}/{org_id}'));
}
```

**Ensure the following required parameters have been filled:**

> `plugin_id` (required)	 provide the ID of the plugin retrieving data e.g. DM Plugin
>
> `coll_name`(required)	  provide the name of the collection to be read from e.g. DM Rooms
>
> `org_id`(required)		   provide the ID of the organization which the plugin belongs to e.g. HNGi8

## Responses

Below are the expected responses after making the `get` request. You can either get a successful retrieval or an unexpected error. Below are the formats in which the responses will come.

- 200: Data Retrieved Successfully

> { <br>
> "status": "string", <br>
> "message": "string", <br>
> "data": [
>  {}
> ] <br>
> }

- default: Unexpected Error

  > { <br>
  > "status": "string", <br>
  > "message": "string" <br>
  > }

# **Delete**

Getting started with the delete endpoint is easy, all you need to do is to get the required values for your payload and arrange them in proper order as shown below. 


## **Delete Endpoint**
#### Method: Post

```sh
https://api.zuri.chat/v1/data/delete
```
 This endpoint lets the plugin make a delete request to the data endpoint.

## Request Headers
**Content-Type:** application/json

## Body of the initial request
**Format type:** raw(json)
```sh
{
    "plugin_id": "string",
    "organization_id": "string",
    "collection_name": "string",
    "payload": {},
    "bulk_delete": true,
    "object_id": "string",
    "filter": {}
}
```
##  Request
### For a successful delete request

```sh
curl --location --request POST 'https://api.zuri.chat/v1/data/delete' \
--header 'Content-Type: application/json' \
--data-raw '{
    "plugin_id": "string",
    "organization_id": "string",
    "collection_name": "string",
    "payload": {},
    "bulk_delete": true,
    "object_id": "string",
    "filter": {}
}'
```

### Response:
```sh
{
 "status": "204",
 "message": "resource successfully deleted",
 "data": {
  "deleted_count": 0
 }
}
```

### For an unexpected error

### Request:
```sh
curl --location --request POST 'https://api.zuri.chat/v1/data/delete' \
--header 'Content-Type: application/json' \
--data-raw '{
    "plugin_id": "string",
    "organization_id": "string",
    "collection_name": "string",
    "payload": {},
    "bulk_delete": true,
    "object_id": "string",
    "filter": {}
}'
```

### Response:
```sh
{
 "status": "400",
 "message": "there was an unexpected error",
}
```

### List of Most Likely `4xx` Errors
- **400** Bad Request
- **401** Unauthorized
- **403** Forbidden
- **404** Not Found


### List of Most Likely `5xx` Errors
- **500** Internal Server Error
- **502** Bad Gateway
- **503** Service Unavailable









