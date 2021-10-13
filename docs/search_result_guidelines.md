## Guidelines On How To Serve Plugin Based Search Results


 All searches on Zuri chat are plugin base. Depending on the current active plugin, the current active user search 
 is filtered base on the resources available on that plugin.
 
 To serve search result, each plugin Backend must return their search result in the standerdized format detailed below
 
 
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
  "filters": {},
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
	 
}
  ],
  "filter_suggestions": {
    "in": [],
    "from": []
  },
  
}

```
The second attribute in the tree, ```pagination```, should provide pagination details.

| S/N | Attribute                             | Description                                                                               
| :-- | :------------------------------------ | :----------------------------------------------------------------------- | 
| 1   | status                                | status message                                                           |
| 2   | total_count                           | The total count of search result                                         |               |
| 3   | per_page                              | Number of search items per page                                          |
| 4   | query                                 | Query value or word                                                      |
| 5   | filters                               | Any query filter included in search                                      |
| 6   | plugin                                | Name of active plugin                                                    |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |
| 3   | status                                | Your status message                                                      |









