# Guidelines On How To Serve Search Results


All searches on Zuri chat are plugin base. Depending on the current active plugin, a user search is filtered base on the resources available on the plugin.

URL Construct:  ```{base_url}/{Endpoint}/search?key={value}```

ENDPOINT: ```api/v1/{org_id)/{member_id}/search?```

METHOD: ```GET```

Here, the ```base_url``` is dependent on the current active plugin. Assumming the current active plugin is TODO, the construct will look like so ```https://todo.zuri.chat/api/v1/org/614679ee1a5607b13c00bcb7/members/61570590d56dd3c4d8a9643d/search?```

To search, the client makes a Http GET Request to the enpoint as detail above.  

### NOTE:
 ```org_id``` is a path parameter for the current orgazation.\
 ```member_id``` is a path parameter that holds the user id of the current user.\
 ```key``` is the key of the query search\
 ```{value}``` is the search query word.


 To serve search results, each plugin Backend must return result data in the standerdized format detailed in Sample Response.
 
 ### Sample Response
```
{
  "status": "ok",
  "pagination": {
    "total_count": 4,
    "current_page": 1,
    "per_page": 20,
    "page_count": 4,
    "first_page": 1,
    "last_page": 4
  },
  "query": "eric",
  "plugin": "Chess",
  "data":[
  	      {
	  "title":"name of resource item",
	  "email":"can be empty if it doesn't apply",
	  "description":"",
	  "Image_url":"if any",
	  "created_at":"",
	  "url":"resource item redirect url",
	
   },
	   {
	  "title":"name of resource item",
	  "email":"can be empty if it doesn't apply",
	  "description":"",
	  "Image_url":"if any",
	  "created_at":"",
	  "url":"resource item redirect url",
	 
   },

  ],
  
  "filter_suggestions": {
    "in": [],
    "from": []
  },
  
}

```
### Attributes Description.

The table gives context to some of the response attributes/fields.

| S/N | Attribute                             | Description                                                                               
| :-- | :------------------------------------ | :----------------------------------------------------------------------- | 
| 1   | status                                | status message                                                           |
| 2   | total_count                           | The total count of search result                                         |               
| 3   | per_page                              | Number of search items per page                                          |
| 4   | query                                 | Query value or word                                                      |


Depending on the active plugin, some of this attributes/fields are allowed to be empty in response body.





