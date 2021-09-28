---
slug: /calendar
sidebar_position: 2
title: Calendar Plugin
---

# API Calender plugin  (1.0.0)

**Description**
Holiday-Calendar-Plugin; helps you and your team to stay organized with a jsonared calendar, from viewing your company monthly events in one screen to receiving up-to-the-minute reminders. The company holiday calendar has everything you need to create and manage events.

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

```json
{
  "message": "string",
  "data": null
}
```


