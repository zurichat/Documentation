# Guidelines On How To Serve Search Results


All searches on Zuri chat are plugin base. Depending on the current active plugin, a user search is filtered base on the resources available on the plugin. 
Plugins providing a search endpoint are to ensure conformity to the following specifications:

```
URL Construct: {base_url}/api/v1/search/{org_id)/{member_id} 
   
ENDPOINT: api/v1/search/{org_id}/{member_id}?key=value&filter=value&org_id={value}&member_id={value}  
   
REQUEST TYPE: GET 

```

Depending on the active plugin, the base_url switches with respect to the active plugin url. Assumming the current active plugin is TODO, the url construct will look like so:

```  
https://todo.zuri.chat/api/v1/search/614679ee1a5607b13c00bcb7/61570590d56dd3c4d8a9643d?q=eric&filter=234five$org_id=33344&member_id=value 
```

Other Examples:
```
    Channels Plugin:
    https://channels.zuri.chat/api/v1/search/614679ee1a5607b13c00bcb7/61570590d56dd3c4d8a9643d?q=hello&filter=announccementpage=1
 
    DM Plugin:
    https://dm.zuri.chat/api/v1/search/614679ee1a5607b13c00bcb7/61570590d56dd3c4d8a9643d?q=hi&filter=431&page=2
 
    Goals
    https://goals.chat/api/v1/search/614679ee1a5607b13c00bcb7/61570590d56dd3c4d8a9643d?q=Debug&filter=431&page=3

```

To search, the client makes a Http GET Request to the enpoint as detail above.  

### Path Parameters:

  “org_id” : is a path parameter holding the current orgazation.

  "member_id" : is a path parameter that holds the user id of the current user.

### Query Parameters
 1. q: This refers to the text being searched for.
 2. filter: This varies for plugins to pluins. For DM it could mean the member id of a user  where the search is streamlined to. For channels it could mean the id of a channel where the search  would be streamlined. For goals it could be a category etc. Also note multiple id can also exist, and the search would be streamlined to those ids.

 
 ### Sample Response
 To serve search results, the Backend of each plugin must return result data in the format below:

```
{
  "status": "ok", 
  “title”:”search title”,
  “description”: ”descrption of searched result”,
  "pagination": {
    "total_results": 20,   
    "page_size": 20, 
    "current_page": 1,      
    "first_page": 1,    
    "last_page": 4 ,
    “next”: <url to next page>,
    “previous”: <url to previous page>
  },

 “search_parameters”: {
  	“query”: ”text being searched for”,
  	“filters”: [list of attributes used to filter],
	  “plugin”: ”name of current active pluin”
},

“results”: { 
    “entity”: “entity type, can be ”,
    “data”: [
	      {searched_ite_object},
        {searched_item_object},
      ]
  }

}

```
### Entities.

There are three search entity types; User, Message and Others. The entity to be rendered in the data array of searched_item_object is dependent on the plugin, but the plugin can only render one of the three defined entity types. The schema below gives context to the three entity types.

```
 - User: 
     For user entity, the following attribute should be defined
       {
         "_id': "member Id of the user",
         "username":  "username of the user",
         "email": "email of the user",
         "images_url": [list of image urls],
         "created_at": "date time of creation of resource",
         "destination_url": "url to route to profile"
     }

- Message: 
     message entity should follow the schema below
       {
         "_id": "message id"
         "room_name": "name of room where message was sent"
         "content": "message text"
         "created_by": "message creator"
         "images_url": [list of image urls],
         "created_at": "date and time of creation of resource"
         "destination_url": "url to route to conversation"
     }

- Others:
      {
        "_id" : "id of resource in db",
        "title": "title of resource in db",
        "content": "description text of resource",
        "created_by": "username of creator of message",
        "images_url": [list of image urls],
        "created_at": "date time of creation of resource",
        "destination_url": "url to route to plugin resource"
      }

```

### Search Suggestions
To fetch search suggestion related to an active plugin, the client should make a request as follows;

``` ENDPOINT :  api/v1/search-suggestions/{org_id}/{member_id}  ```

``` URL CONSTRUCT :  {Base_URL}/{Enpoint}?org_id=value&member_id=value ```

``` RREQUEST TYPE : GET ```

Base_URL, as used here, referes to the base url of the plugin that is currently active on zuri chat. An example url construct for fetching search suggestions would look like so;

```
  https://todo.zuri.chat/api/v1/search-suggestions/614679ee1a5607b13c00bcb7/61570590d56dd3c4d8a9643d

```

### Suggestion Response 

```
{
	"status":"ok",
	"type":"suggestions",
	"data":[
		"Joeboy dey come":"Joeboy dey come", 
		"Amara in the hood":"Amara in the hood", 
		"Slow Down":"Slow Down",
	]
}

```
Depedending on the plugin, eaach item in the data array can be a key pair of the same exact word(s), or different word(s). However the case, the value of the pair is to be rendered on the search UI, while the key is to be passed as query params when the suggestion is selected by the user.

