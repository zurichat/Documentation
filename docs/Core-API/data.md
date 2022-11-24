---
sidebar_position: 4
slug: /core-api/data
title: Data
---

## Data

Plugins and integrations with Zuri Chat is the way to go to empower users interaction in the application. With this resource, plugins can write, read, delete and update data into the database.

## Endpoints

- POST `/data/write`
- PUT `/data/write/`
- POST `/data/read/`
- GET `/data/read/{plugin_id}/{coll_name}/{org_id}`
- POST `/data/delete/`

## Write Data

POST `/data/write`

A plugin will add new data to the database. `organization_id`, `plugin_id`, `collection_name` must be included in the request. There are no parameters for this endpoint

REQUEST URL:

#### Request Body

| Name            | Data Type | Required | Description                                                                  |
| --------------- | --------- | -------- | ---------------------------------------------------------------------------- |
| bulk_write      | boolean   | False    | the value indicates whether many documents will be written or not            |
| collection_name | string    | True     | the name of the collection to insert data inside                             |
| filter          | object    | False    | query to be matched                                                          |
| object_id       | string    | False    | ID of the inserted data                                                      |
| organization_ID | string    | True     | organization ID                                                              |
| payload         | object    | True     | contains `description` with the actual data to be inserted into the database |
| plugin_ID       | string    | True     | the Plugin ID                                                                |

#### Sample Request

```sh
cURL
curl -X PUT "https://api.zuri.chat/data/write"
     -H "accept: application/json"
     -H "Content-Type: application/json"
     -d "{\"bulk_write\":true,
         \"collection_name\":\"mycollection\",
         \"filter\":{},
         \"object_id\":\"string\",
         \"organization_id\":\"string\",
         \"payload\":{},
         \"plugin_id\":\"string\"}"
```

```sh
JSON
Content-Type: `application/json`
{
 "plugin_id": "xxx",
 "organization_id": "xxx",
 "collection_name": "mycollection",
 "bulk_write": false,
 "object_id": "xxxx",
 "filter": {},
 "payload": {}
}
```

#### Sample Response

```sh
{
  "data": {
    "insert_count": 0,
    "object_id": "string"
  },
  "message": "data inserted successfully",
  "status": "201"
}
```

#### Error Response

You will get an error if one or more of the required fields is missing or incorrect.

```sh
{
    "status":404,
    "message":"plugin with this id does not exist"
    }
```

## Update data

PUT `/data/write/`

With this endpoint, you can update data as needed for a plugin in a collection in a particuar organization. This endpoint does not require parameters.

REQUEST URL:

#### Request Body

| Name            | Data Type | Required | Description                                                                  |
| --------------- | --------- | -------- | ---------------------------------------------------------------------------- |
| bulk_write      | boolean   | False    | the value indicates whether many documents will be written or not            |
| collection_name | string    | True     | the name of the collection to insert data inside                             |
| filter          | object    | False    | query to be matched                                                          |
| object_id       | string    | False    | ID of the inserted data                                                      |
| organization_ID | string    | True     | the organization ID                                                          |
| payload         | object    | True     | contains `description` with the actual data to be inserted into the database |
| plugin_ID       | string    | True     | the Plugin ID                                                                |

#### Sample Request

```sh
cURL
curl -X PUT "https://api.zuri.chat/data/write"
     -H "accept: application/json"
     -H "Content-Type: application/json"
     -d "{\"bulk_write\":true,
         \"collection_name\":\"mycollection\",
         \"filter\":{},
         \"object_id\":\"string\",
         \"organization_id\":\"string\",
         \"payload\":{},
         \"plugin_id\":\"string\"}"
```

```sh
JSON
Content-Type: `application/json`
{
 "plugin_id": "xxx",
 "organization_id": "xxx",
 "collection_name": "mycollection",
 "bulk_write": false,
 "object_id": "xxxx",
 "filter": {},
 "payload": {}
}
```

#### Sample Response

```sh
{
  "data": {
    "matched_documents": 0,
    "modified_documents": "string"
  },
  "message": "data updated successfully",
  "status": "201"
}
```

#### Error Response

You will get an error if one or more of the required fields is missing or incorrect.

```sh
{
    "status":404,
    "message":"plugin with this id does not exist"
    }
```

## Read Data

POST `/data/read/`

Read data from the database. Returns the data object that includes the description of the data.

REQUEST URL: `https://api.zuri.chat/data/read`

#### Request Body

| Name            | Data Type | Required | Description                                      |
| --------------- | --------- | -------- | ------------------------------------------------ |
| collection_name | string    | True     | the name of the collection to insert data inside |
| filter          | object    | False    | query to be matched                              |
| object_id       | string    | False    | ID of the inserted data                          |
| organization_ID | string    | True     | the organization ID                              |
| plugin_ID       | string    | True     | the Plugin ID                                    |

##### Sample Request

```sh
cURL
curl -X PUT "https://api.zuri.chat/data/write"
     -H "accept: application/json"
     -H "Content-Type: application/json"
     -d "{
         \"collection_name\":\"mycollection\",
         \"filter\":{},
         \"object_id\":\"string\",
         \"organization_id\":\"string\",
         \"plugin_id\":\"string\"}"
```

```sh
JSON
Content-Type: `application/json`
{
 "plugin_id": "xxx",
 "organization_id": "xxx",
 "collection_name": "mycollection",
 "object_id": "xxxx",
 "filter": {},
}
```

#### Sample Response

```sh
{
  "data": [
    {}
  ],
  "message": "successful query",
  "status": "200"
}
```

#### Error Response

```sh
 {
    "status":404,
    "message":"not found"
}
```

## Read Data about a plugin

GET `/data/read/{plugin_id}/{coll_name}/{org_id}`

Get information about a unique plugin from a collection in an organization

REQUEST URL: `https://api.zuri.chat/data/{plugin_id}/{coll_name}/{org_id}`

#### Path Parameters

| Name        | Data Type | Required | Description                                    |
| ----------- | --------- | -------- | ---------------------------------------------- |
| {plugin_id} | string    | True     | plugin ID to retrieve data from.               |
| {coll_name} | string    | True     | name of the collection that the plugin belongs |
| {org_id}    | string    | True     | organization ID to which the plugin belongs    |

#### Sample Request

```sh
curl -X GET "https://api.zuri.chat/data/read/145/messages/5745" -H "accept: application/json"

```

#### Sample Response

```sh
{
  "data": [
    {}
  ],
  "message": "data retrieved successfully",
  "status": "200"
}
```

#### Error Response

```sh
{
    "status":404,
    "message":"collection not found"
}
```

## Delete Data

POST `/data/delete/`

Remove data about a plugin from the database. The bulk_delete and filter properties are used to delete multiple records. filter will contain the query to be matched and bulk_delete must be set to true to use this filter property.

There are no parameters for this endpoint.

REQUEST URL:

#### Request Body

| Name            | Data Type | Required | Description                                                                  |
| --------------- | --------- | -------- | ---------------------------------------------------------------------------- |
| bulk_delete     | boolean   | False    | the value indicates whether many documents will be deleted or not            |
| collection_name | string    | True     | the name of the collection to insert data inside                             |
| filter          | object    | False    | query to be matched                                                          |
| object_id       | string    | False    | ID of the inserted data                                                      |
| organization_ID | string    | True     | organization ID                                                              |
| payload         | object    | True     | contains `description` with the actual data to be inserted into the database |
| plugin_ID       | string    | True     | the Plugin ID                                                                |

#### Sample Request

```sh
cURL
curl -X PUT "https://api.zuri.chat/data/write"
     -H "accept: application/json"
     -H "Content-Type: application/json"
     -d "{\"bulk_delete\":false,
         \"collection_name\":\"mycollection\",
         \"filter\":{},
         \"object_id\":\"string\",
         \"organization_id\":\"string\",
         \"payload\":{},
         \"plugin_id\":\"string\"}"
```

```sh
JSON
Content-Type: `application/json`
{
 "plugin_id": "xxx",
 "organization_id": "xxx",
 "collection_name": "mycollection",
 "bulk_delete": false,
 "object_id": "xxxx",
 "filter": {},
 "payload": {}
}
```

#### Sample Response

```sh
{
  "data": {
    "deleted_count": "0"
  },
  "message": "data deleted successfully",
  "status": "200"
}
```

#### Error Response

You will get an error if one or more of the required fields is missing or incorrect.

```sh
{
    "status":404,
    "message":"not found"
}
```
