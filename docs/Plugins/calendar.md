---
slug: /calendar
sidebar_position: 2
title: Calendar Plugin
---

# API Calender plugin  (1.0.0)

**Description**
Holiday-Calendar-Plugin; helps you and your team to stay organized with a shared calendar, from viewing your company monthly events in one screen to receiving up-to-the-minute reminders. The company holiday calendar has everything you need to create and manage events.

## Endpoints Under Zuri Calendar Plugin
|  |  |
| ------ | ------ |
| GET: | Fetch List Of Events |
| GET: | Fetch List Of Reminders |
| GET: | Search Reminders |
| GET: | Event Details |
| GET: | Reminder Details |
| POST: | Create Event |
| POST: | Create Reminder |
| PATCH: | Update Event |
| PATCH: | Update Reminder |
| DEL: | Delete Event |
| DEL: | Delete Reminder |

## CREATE REMINDER: 	
Create reminder is an endpoint in the zuri calender plugin feature, it helps the user create and set reminders for events at a particular time in a calender widget. It is not unique to any event, you can decide to set it or not to set it on an event. This endpoint do not display an error
	@@ -181,4 +196,388 @@ Summary of how the end point is being set up.
  "message": "string",
  "data": null
}
```

## EVENT DETAILS

**Description**:

Event details endpoint fetches the details of an event. The event id must be present in this request.

```sh
PATH PARAMETERS: event_id(required)
```

### How it works

This endpoint is called when there is a request(GET) made to a particular event_id to get the event linked to the event_id.

### HOW TO SET UP REMINDER ENDPOINT
These steps are used for remider endpoint set up:

- With the help of python set up django framework
- Create all necessary files like ( url.py ,serializer.py, views.py)
- Import all needed modules
- It is important you set up your database with models.py
- Copy the URL for the fetch event request
- ‘GET'\https://calender.zuri.chat/api/v1/event-detail/{id}
- Paste it where it is needed in the code which is the url.py

### Endpoint Path

<details>
  <summary> GET/event-detail/{id} </summary>
Zuri Calender Plugin

https://calender.zuri.chat/api/v1/event-detail/{id}

 </details>

### RESPONSES;

#### **200** Event Fetched Successfully <br>

```sh
{
  "status": 200,
  "message": "string",
  "data": {...}
}
```

#### **404** The event is not found on the database <br>

```sh
{
  "status": 404,
  "message": "string",
  "data": null
} (edited)
```

#### Response Sample

**Content type** <br>
application/json

```
{
"code": 200,
"message": "string",
"data": {...}
}
```
## FETCH LIST OF EVENTS

**Description**:

This endpoint fetches a list of all events.

```sh
PATH PARAMETERS: null
```

Request Body schema: application/json

### How it works

A (get request) is made to the events Endpoint, which then generates the list of events.

### How to set up Fetch list Endpoint
Steps for setting up the fetch list endpoint :

- With the help of python set up django framework
- Create all necessary files like ( url.py ,serializer.py, views.py)
- Import all needed modules
- It is important you set up your database with models.py
- Copy the URL for the fetch list of events request
- ‘GET'\https://calender.zuri.chat/api/v1/event-list
- Paste it where it is needed in the code which is the url.py

### Endpoint Path

<details>
  <summary> GET/event-list </summary>
Zuri Calender Plugin

https://calender.zuri.chat/api/v1/event-list

 </details>

### RESPONSES;

#### **200** Events Fetched Successfully <br>

```sh
{
  "status": 200,
  "message": "string",
  "data": [
      {...}
  ]
}
```

#### **404** The event is not found on the database <br>

**Content type** <br>
application/json

```sh
{
  "status": 404,
  "message": "string",
  "data": null
}
```

#### Response Sample

**Content type** <br>
application/json

```
{
"code": 200,
"message": "string",
"data": [
  {...}
]
}
```
## SEARCH REMINDER
 Searches a particular reminder from thr list of reminders creaeted.

### HOW IT WORKS:
 It searches a reminder linked to a particular reminder_id.

### HOW TO SET UP SEARCH REMINDER ENDPOINT:
-With the help of pythn set up django frame work.
-Create all necessary files like (url.py,serializers.py,views.py)
-Import all needed modules 
-It is important you set your database in set up your database with models.py
-Copy the URL https://calendar.zuri.chat/api/v1/search/reminder_id 
-Paste the URL where the end point is needed in the code which is the url.py

### STEPS ON HOW TO USE THE SEARCH REMINDER ENDPOINT:
- A reminder_id to be searched
- Using the URL https://calendar.zuri.chat/api/v1/search/reminder_id
- Replace reminder_id with the reminder_id to be searched.

The path for the search reminder endpoint in the URL pattern should be coded in this form ;
```
path('search/', ReminderSearch.as_view(), name="ReminderSearch")
```
All reminder_id should be defined in the serializers.py

## SEARCH EVENT:
Searches a particular event from the list of events creaeted.

### HOW IT WORKS:
 It searches for an event linked to a particular event_id.

### HOW TO SET UP SEARCH EVENT ENDPOINT:
-With the help of pythOn set up django frame work.
-Create all necessary files like (url.py,serializers.py,views.py)
-Import all needed modules 
-It is important you set your database in set up your database with models.py
-Copy the URL https://calendar.zuri.chat/api/v1/search/event_id 
-Paste the URL where the end point is needed in the code which is the url.py

### STEPS ON HOW TO USE SEARCH EVENT FEATURE:
- Must have the event_id to be searched
- Then using the URL https://calendar.zuri.chat/api/v1/search/event_id
- Replace event_id with the event_id to be searched.

The path for the search reminder endpoint in the URL pattern should be coded in this form ;
```
path('search/', EventSearch.as_view(), name="EventSearch")
```
All event_id should be defined in the serializers.py


## UPDATE EVENT
**Description**:
This endpoint updates list of all events.

```sh
PATH PARAMETERS: null
```
Request Body schema: application/json

### How it works
When there is a (patch request) made to the events Endpoint, it generates the list of events.

### HOW TO SET UP UPDATE EVENT ENDPOINT 
These ways to set up the end point to function properly:

- With the help of python set up django framework
- Create all necessary files like ( url.py  ,serializer.py, views.py)
- Import all needed modules
- It is important you set your database in set up ur database with models.py
- Copy the URL for the fetch list of events request
-   ‘GET'\https://calender.zuri.chat/api/v1/event-list
- Paste it where it is needed in the code which is  the url.py
That is a summary of how the end point is being set up.

### Endpoint
<details>
  <summary> PATCH/event-list </summary>
Zuri Calender Plugin

https://calender.zuri.chat/api/v1/update-event
 </details>

### RESPONSES;
#### **200** Events updated Successfully <br>
```sh
{
  "status": 200,
  "message": "string",
  "data": [
      {...}
  ]
}
```
#### **404** The event is not found on the database <br>

**Content type** <br>
application/json

```sh
{
  "status": 404,
  "message": "string",
  "data": null
}
```
#### Response Sample
**Content type** <br>
application/json

````
{
"code": 200,
"message": "string",
"data": [
  {...}
]
}
````




## UPDATE LIST OF REMINDERS

**EVENT DETAILS**
**Description**: 
This endpoint fetches the details of an event. The event id must be present in the request

```sh
PATH PARAMETERS: event_id(required)
```

### How it works
A request(PATCH) is made to a particular event_id to get the event linked to the event_id.

### HOW TO SET UP EVENT DETAILS ENDPOINT
These ways to set up the end point to function properly:

- With the help of python set up django framework
- Create all necessary files like ( url.py  ,serializer.py, views.py)
- Import all needed modules
- It is important you set your database in set up ur database with models.py
- Copy the URL for the fetch event request
-   ‘GET'\https://calender.zuri.chat/api/v1/event-detail/{id}
- Paste it where it is needed in the code which is  the url.py
That is a summary of how the end point is being set up.

### Endpoint
<details>
  <summary> PATCH/event-detail/{id} </summary>
Zuri Calender Plugin

https://calender.zuri.chat/api/v1/event-detail/{id}
 </details>

### RESPONSES;
#### **200** Event UPDATED Successfully <br>
```sh
{
  "status": 200,
  "message": "string",
  "data": {...}
}
```
#### **404** The event is not found on the database <br>
```sh
{
  "status": 404,
  "message": "string",
  "data": null
} (edited) 
```

#### Response Sample
**Content type** <br>
application/json

````
{
"code": 200,
"message": "string",
"data": {...}
}
````

## UPDATE EVENTS
 **Description**:
This Endpoint creates a new event given a request body of required key-value pairs, it returns ID of the created event.

Request Body schema: application/json

### Parameters
|   Name                |   Data type
---------------------------------------
 	Event title         |   string
 	Start and end date  |   string
 	Start  and end time |   string
 	Time zone           |   string
 	Description         |   string
 	All day             |   Boolean
    Event tag           |   string
 	Event color         |   string
 	Reminder            |   string


### Endpoint
<details>
  <summary> GET/delete_reminder/{reminder_id} </summary>
Zuri Calender Plugin

https://calender.zuri.chat/api/v1/delete_reminder/{reminder_id}
 </details>


### Response
```sh
201
```
- The resource is successfully updated.


### how to update an event
- Click on Add Event
- Enter event title
- Enter start date
- Enter end date
- Enter start time
- Enter end time
- Select time zone
- All day, True or False
- Enter event tag
- Select event color
- Set reminder date and time
- select enter(update)

### The endpoint is setup using django REST framework