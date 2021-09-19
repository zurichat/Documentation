

# **Documentation on Api**


---


## **Function: get a single marketplace plugin_**

Below is the format from explanation on PAYLOAD:



* _Request Payloads_
    * Customize Request
    * Header structure(Method, content-Type, link)
    * Parameter Data type
* _Response payloads_
    * Header Structure(Content-Type of Response, with response Code)
    * DataTypes of each request
* Example


---


## **Request Payloads**


### **Customize Request**

The request is customized as https://api.zuri.chat/marketplace/plugins/{id}


### **Header structure**

 


|      |       |       |
| -----| ----- | ---- |
| Method |                Api                             | Content type |
| GET    | https://api.zuri.chat/marketplace/plugins/{id}  | application/json  |
| | |

### **Parameter Datatype**


## **Response Payloads**

The Response data from the server will be determined by the Response Code


### **Header structure**


 | Response Code | Content-type | Datatype of returned result |

 
 | ---- | ----- | ------ |


 | 200    | application/json | object |


 | 404   | application/json | object  |


 | 500  | application/json | object  |


 | 403  | application/json | object |




### **Datatypes of Fields in Result**


#### **For Response Code 200**

_Note:_ The return data type is an instance of  objects


```


 | Field Name      | DataType |


 | ----------------| -------- |


 | id              | string   |


 | name            | string   |


 | description     | string   |


 | developer_name  | string   |


 | developer_email | string   |


 | template_url    | string   |


 | sidebar_url     | string   |


 | install_url     | string   |


 | icon_url        | string   |


 | approved        | boolean  |


 | deleted         | boolean  |


 | approved_at     | string   |


 | created_at      | string   |


 | updated_at      | string   |


 | deleted_at      | string   |
```



#### **For Response Code 404**

_Note:_The return data type is an instance of Object


```


 | Field Name | Datatype       |


 | ---------- | -------------- |


 | code       | integer<int32> |


 | message    | string         |
```



#### **For Response Code 403**

_Note:_The return data type is an instance of Object


```


 | Field Name | Datatype       |


 | ---------- | -------------- |


 | code       | integer<int32> |


 | message    | string         |
```



#### **For Response Code 500**

_Note:_The return data type is an instance of Object


```
| Field Name | Datatype       |
| ---------- | -------------- |
| code       | integer<int32> |
| message    | string         |


---
```



## **Example**


### **Request Example**

[https://api.zuri.chat/marketplace/plugins/613b677d41f5856617552f1e](https://api.zuri.chat/marketplace/plugins/613b677d41f5856617552f1e)


### **Response Example**

_With Response Code 200_

This example returns the  object data

    {

{    

"status": 200,

    "message": "success",

    "data": {

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

        "approved_at": "2021-09-10 16:11:19.788734956 +0200 CEST m=+8417.562674390",

        "created_at": "2021-09-10 16:11:09.672268819 +0200 CEST m=+8407.446208225",

        "updated_at": "2021-09-10 16:11:09.672277579 +0200 CEST m=+8407.446216983",

        "deleted_at": ""

    }

}

_With Response Code 404_

Plugin not found

{    

"status": 404,

 "message": "success"

}

_With Response Code 500_

Internal server error

{    

"status": 500,

  "message": "success"

}

# Removes a single plugin from the marketplace


This is the endpoint that needs to be called to remove a single plugin from the marketplace
https://api.zuri.chat/marketplace/plugins/{id}
Below is how the id should look like:

Id -- 6137d69b21d3c78fc9a84bdf

The id is to be placed in a path with the previous link like this

https://api.zuri.chat/marketplace/plugins/613ba9de41f5856617552f51

 > It should be placed after the/plugins/ and it shouldn’t be with { }


The method to be passed is DELETE method
The DELETE method is used to remove data from a specified resource  

## **Errors**
When an error occurs, you will receive an error object. Most of these error objects contain an error code and an error description so that your applications can more efficiently identify the problem.


If you get a **4xx** response code, then you can assume that the plugin does not exist or plugin removal failed. 
For **5xx** if you get a response if means Internal server error.
In this case, 
check the [Standard Error Responses](#standard-error-responses) for more context.
### RESPONSE 

| RESPONSE SCHEMA:  |  application/json |
| ----------- | ----------- |
| id | string |
| name | string |
| description | string |
| developerName | string |
| developerEmail | string |
| metadata |  object |
| templateUrl  | string |
| sideUrl |  string |
| iconUrl | string |
| approved | string |
|||

 ### If you get a response **200**
 It means SUCCESSFUL.


```sh
{
    "_id": "6137d69b21d3c78fc9a84bdf",
    "name": "Google Drive",
    "description": "string",
    "developerName": "string",
    "developerEmail": "developer@zuri.chat",
    "metadata": {},
    "templateUrl": "string",
    "sidebarUrl": "string",
    "iconUrl": "string",
    "approved": true
  }
 ```
 
 
 ### Response for 4xx and 5xx requires an integer error code and string message. <br>
  For example


```sh
{
  "code": 0,
  "message": "string"
}
```


 ## Standard error responses
  **400** Plugin does not exist or plugin removal failed
   RESPONSE SCHEMA:  |  application/json |
| ----------- | ----------- |
| code required | interger <int32>|
| message required | string |
|||

**404** Plugin not found
   RESPONSE SCHEMA:  |  application/json |
| ----------- | ----------- |
| code required | interger <int32>|
| message required | string |
|||

 **500** internal server error
   RESPONSE SCHEMA:  |  application/json |
| ----------- | ----------- |
| code required | interger <int32> |
| message required | string |
|||