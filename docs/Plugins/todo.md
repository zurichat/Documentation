---
slug: /todo-plugin
sidebar_position: 1
title: To-Do Plugin
---

[#](#anchors-in-markdown)
# Getting Started #
Our API is organised around using HTTP verbs and REST. Our API accepts and returns JSON formatted payload

# Authorization #
User must be authenticated to use the API 

|  |  |
| ------ | ------ |
| Security Scheme Type | HTTP |
| HTTP Authorization Scheme | bearer |

# Fetch sidebar #
This endpoint is commonly used to retrieve a list of component on the sidebar.
|  |  |
| ------ | ------ |
| Request Type | ``` GET ``` |
| Endpoint |  ``` /sidebar ``` |
| Content Type |  ``` application/json ``` |

```php
curl --location --request GET 'https://todo.zuri.chat/api/v1/sidebar' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```
Sample Response
```json
{
    "name": "Todo Plugin",
    "description": "string",
      "plugin_id": "string",
      "organisation_id": "string",
      "user_id": "string",
      "group_name": "Tdo",
      "show_group": false,
      "joined_rooms": {
        "title": "Todo 2",
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
        "title": "Todo 2",
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
# Fetch Plugin info #
This endpoint is commonly used to retrieve a plugin information
|  |  |
| ------ | ------ |
| Request Type | ``` GET ``` |
| Endpoint |  ``` /info ``` |
| Content Type |  ``` application/json ``` |

```php
curl --location --request GET 'https://todo.zuri.chat/api/v1/info' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```
Sample Response
```json
{
      "name": "string",
      "description": "string",
      "scaffold_structure": "Monolith",
      "ping_url": "https://todo.zuri.chat/api/ping",
      "html_url": "https://todo.zuri.chat/#/main",
      "sidebar_url": "https://todo.zuri.chat/api/sidebar"
}
```   
# Fetch all Todo #
This endpoint is commonly used to retrieve a todo in a list
|  |  |
| ------ | ------ |
| Request Type | ``` GET ``` |
| Endpoint |  ``` /todo ``` |
| Content Type |  ``` application/json ``` |

```php
curl --location --request GET 'https://todo.zuri.chat/api/v1/todo' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```
Sample Response
```json
[
      {
            "type": "string",
            "user_id": "string",
            "title": "string",
            "status": "string"
      }
]
```
# Create a Todo #
This endpoint is commonly used to create a todo
|  |  |
| ------ | ------ |
| Request Type | ``` POST ``` |
| Endpoint |  ``` /todo ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| user_id |  yes | integer |
| type |  yes | string |
| title |  yes | string |
| status |  yes | string |
| description |  no | string |
Sample Request
```json
[
      {
            "type": "string",
            "user_id": 0,
            "title": "string",
            "status": "string"
      }
]
```
Sample Response
```json
[
      {
           "status": 200,
            "message": "Todo created",
            "data": {
              "_id": "6137a5af52efebbea2739c71"
            }
      }
]
```
# Fetch single Todo #
This endpoint is commonly used to retrieve a todo in a list
|  |  |
| ------ | ------ |
| Request Type | ``` GET ``` |
| Endpoint |  ``` /todo/{todo_Id} ``` |
| Content Type |  ``` application/json ``` |

```php
curl --location --request GET 'https://todo.zuri.chat/api/v1/todo/{todo_Id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```
Sample Response
```json
[
      {
            "type": "string",
            "user_id": "string",
            "title": "string",
            "task": {
                "title": "string",
                "type": "string",
                "description": "string",
                "status": integer,
            }
            "created_at": "string",
            "deleted_at": "string",
            "archived_at": "string",
            "collaborators": {
                "users_id": "string",
            }
      }
]
```
# Update a Todo #
This endpoint is commonly used to update a todo
|  |  |
| ------ | ------ |
| Request Type | ``` PUT ``` |
| Endpoint |  ``` /todo/{todo_id} ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| user_id |  yes | string |
Sample Request
```json
[
      {
            "type": "string",
            "title": "string",
            "status": "string"
            "description": "string"
      }
]
```
Sample Response
```json
[
      {
           "status": 200,
            "message": "Todo Updated",
            "data": {
                "MatchedCount": 1,
                "ModifiedCount": 1,
                "UpsertedCount": 0,
                "UpsertedID": null
            }
      }
]
```
# Delete a Todo #
This endpoint is commonly used to delete a todo
|  |  |
| ------ | ------ |
| Request Type | ``` DELETE ``` |
| Endpoint |  ``` /todo/{todo_id} ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| user_id |  yes | string |
Sample Response
```json
[
      {
           "status": 200,
            "message": "Todo Deleted",
            "data": {
                "MatchedCount": 1,
                "ModifiedCount": 1,
            }
      }
]
```


# Fetch all Task #
This endpoint is commonly used to retrieve a list of all task
|  |  |
| ------ | ------ |
| Request Type | ``` GET ``` |
| Endpoint |  ``` /task ``` |
| Content Type |  ``` application/json ``` |

```php
curl --location --request GET 'https://todo.zuri.chat/api/v1/task' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```
Sample Response
```json
    [
          {
                "_id": "string",
                "data": {
                    "_id": "string",
                    "title": "string",
                },
                "type": "string",
                "description": "string",
                "status": integer
          }
    ]
```

# Create a Task #
This endpoint is commonly used to create a task 
|  |  |
| ------ | ------ |
| Request Type | ``` POST ``` |
| Endpoint |  ``` /add-task ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| title |  yes | string |
| status |  yes | string |
| description |  no | string |
Sample Request
```json
[
      {
            "description": "string",
            "title": "string",
            "status": "string"
      }
]
```
Sample Response
```json
[
      {
           "status": 200,
            "message": "Task created",
            "data": {
              "_id": "6137a5af52efebbea2739c71"
            }
      }
]
```
# Fetch single Task #
This endpoint is commonly used to retrieve a single task 
|  |  |
| ------ | ------ |
| Request Type | ``` GET ``` |
| Endpoint |  ``` /task/{task_Id} ``` |
| Content Type |  ``` application/json ``` |

```php
curl --location --request GET 'https://todo.zuri.chat/api/v1/task/{task_Id}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```
Sample Response
```json
[
      {
            "status": 200,
            "message": successful,
            "data": {
                "title": "string",
                "type": "string",
                "description": "string",
                "status": integer,
            }
      }
]
```
# Fetch Latest Task #
This endpoint is commonly used to retrieve a latest task by the current datetime
|  |  |
| ------ | ------ |
| Request Type | ``` GET ``` |
| Endpoint |  ``` /getLatestTask ``` |
| Content Type |  ``` application/json ``` |

```php
curl --location --request GET 'https://todo.zuri.chat/api/v1/task \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {KEY}'
```
Sample Response
```json
[
      {
            "status": 200,
            "message": successful,
            "data": {
                "title": "string",
                "type": "string",
                "description": "string",
                "status": integer,
            }
      }
]
```
# Toggle Archive Status #
This endpoint is commonly used to toggle archive status
|  |  |
| ------ | ------ |
| Request Type | ``` PUT ``` |
| Endpoint |  ``` /task/{task_id} ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| task_id |  yes | string |
Sample Request
```json
[
      {
          "status": "int"
      }
]
```
Sample Response
```json
[
      {
           "status": 200,
            "message": "task Archieved",
            "data": {
                "MatchedCount": 1,
                "ModifiedCount": 1,
                "UpsertedCount": 0,
                "UpsertedID": null
            }
      }
]
```

# Update a Task #
This endpoint is commonly used to update a task
|  |  |
| ------ | ------ |
| Request Type | ``` PUT ``` |
| Endpoint |  ``` /task/{task_id} ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| task_id |  yes | string |
Sample Request
```json
[
      {
            "type": "string",
            "title": "string",
            "status": "string"
            "description": "string"
      }
]
```
Sample Response
```json
[
      {
           "status": 200,
            "message": "Todo Updated",
            "data": {
                "MatchedCount": 1,
                "ModifiedCount": 1,
                "UpsertedCount": 0,
                "UpsertedID": null
            }
      }
]
```
# Delete a Task #
This endpoint is commonly used to delete a task
|  |  |
| ------ | ------ |
| Request Type | ``` DELETE ``` |
| Endpoint |  ``` /task/{task_id} ``` |

Body Params
| Param	 | Required | Description |
| ------ | ------ | ------ |
| user_id |  yes | string |
Sample Response
```json
[
      {
           "status": 200,
            "message": "Todo Deleted",
            "data": {
                "MatchedCount": 1,
                "ModifiedCount": 1,
            }
      }
]
```

[Back to the top](#Getting-Started)