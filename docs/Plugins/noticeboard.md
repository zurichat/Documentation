# Zuri Chat NoticeBoard Plugin Resource 
This resource contains several endpoints 

Zuri Chat is an open source slack clone. However, it offers a lot more functionality via a plugin system where each room can be provided by a different plugin provider.

```
Base URL: noticeboard.zuri.chat/api/
```


## Install Endpoint

**Summary**
This endpoint is called when an organisation wants to install the Noticeboard plugin for their workspace.

### Endpoint path
```
GET  {{baseurl}}/v1/install
```
**Description**

```
curl -X GET "{{baseurl}}/v1/install" -H  "accept: application/json"
```

**Responses**

**200 
Response Description: success**
```
Response body
{
  "name": "Noticeboard Plugin",
  "description": "Creates Notice",
  "plugin_id": "613fc3ea6173056af01b4b3e"
}
```

## Organisation Endpoints

```
/v1​/organisation​/{org_id}​/attachfile
```
**GET**

**Summary**
Retrieve all attached files in an organisation.This endpoint uses form data the file must be passed in with the key "file"

**Description** 
```
curl -X GET "{{baseUrl}}/v1//organisation/{org_id}/attachfile" -H  "accept: application/json"
```

**Parameters**

|  |  |  |  |  |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| Name | Located in | Description | Required | Schema  |
| org_id | path	|  | Yes | string |
|  |  |  |  |  |

**Responses**


|  |  | 
| ----------- | ----------- |
| code | Description |
| 200 | |
| 500 | Internal Server Error |
|  |  |


**POST**

**Summary**
Adds a new file to that organisation.  

**Description** 
```
curl -X POST "{{baseUrl}}/v1/organisation/{{org_id}}/attachfile" -H  "accept: application/json"
```

**Parameters**

|  |  |  |  |  |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| Name | Located in | Description | Required | Schema  |
| org_id | path	|  | Yes | string |
|  |  |  |  |  |

**Responses**

|  |  | 
| ----------- | ----------- |
| code | Description |
| 200 | No file attached |
| 201 | |
|  |  |



**DELETE**

**Summary**
Delete an attached file from an organisation

**Description**
```
curl -X DELETE "{{baseUrl}}/v1/organisation/{{org_id}}/attachfile" -H  "accept: application/json"
```


**Parameters**

|  |  |  |  |  |
| ----------- | ----------- | ----------- | ----------- | ----------- | 
| Name | Located in | Description | Required | Schema  |
| org_id | path	|  | Yes | string |
|  |  |  |  |  |

**Responses**

|  |  | 
| ----------- | ----------- |
| code | Description |
| 204 | |
| 404| File not found |
|  |  |



















