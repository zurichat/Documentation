# Guidelines on How to List Users in a Room
To list users in a room (a room can be a channel, a chess game, a todo, a music playlist, DMs, noticeboard, deals and prospects, which has one or more users) you'll need to format your data in this form

### Sample Response
```sh
{
    "status":"success",
    "data":{
            "is_admin": false,
            "is_email_confirmed": true,
            "is_owner": false,
            "profile":{
                "_id":"61408b3e009d394a85088ba3",
                "image_url": "https://s3-us-west-2.amazonaws.com/zuri-chat-files/avatars/2021-10-04/2566250100772_68d40fb61b6cf9a43e3c_original.jpg",
                "real_name":"John Doe",
                "email": "hey@mail.com",
                "phone_number":"08090426532",
                "display_name":"mista_cee",
                "time_zone": "Africa/Angola",
                "time_zone_label": "Central African Time",
                "time_zone_offset":3600,
                "status_emoji": ":eight",
                "title": "Backend Developer (PHP Laravel)",
                "status_text": "This is the status",
                "pronouns": "him/he"
                }
           	  }          
}
```
### The **data** collection should contain
 - `is_admin` which is either `true` or `false`
 - `is_email_confirmed` which reflect whether the user has confirmed his/her email. 
 - `is_owner` which shows whether or not the user is part of the workspace admins or owners

The **profile** collection contains more details about the user as shown above.

