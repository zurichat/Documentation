# Guidelines On How To Serve Search Results


All searches on Zuri chat are plugin base. Depending on the current active plugin, a user search is filtered base on the resources available on the plugin. All plugins providing a search endpoint are to ensure conformity to the following specifications:

URL Construct:  
    ```  {base_url}/api/v1/search/{org_id)/{member_id} 
    ```

ENDPOINT: 
    ```  api/v1/search/{org_id}/{member_id}?key=value&filter=value&org_id={value}&member_id={value}  
    ```

REQUEST TYPE:
    ```  GET  
    ```


Depending on the active plugin, the base_url switches with respect to the active plugin url. Assumming the current active plugin is TODO, the url construct will look like so:

```  
https://todo.zuri.chat/api/v1/search/614679ee1a5607b13c00bcb7/61570590d56dd3c4d8a9643d?q=eric&filter=234five$org_id=33344&member_id=value 
```

Other Examples are:
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
 1. q: This refers to the a text being searched for.
 2. filter: This varies for plugins to pluins. For DM it could mean the member id of a user  where the search is streamlined to. For channels it could mean the id of a channel where the search  would be streamlined. For goals it could be a category etc. Also note multiple id can also exist, and the search would be streamlined to those ids.

 
 
 ### Sample Response
 To serve search results, each plugin Backend must return result data in the format detailed below:

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
	      {“object_of_data_to_match_entity},
        {“object_of_data_to_match_entity},
      ]
  }

}

```
### Attributes Description.

The table gives cotext to some of the response attributes.

| S/N | Attribute                             | Description                                                                               
| :-- | :------------------------------------ | :----------------------------------------------------------------------- | 
| 1   | status                                | status message                                                           |
| 2   | total_count                           | The total count of search result                                         |               
| 3   | per_page                              | Number of search items per page                                          |
| 4   | url                                   | The url to direct users to the searched item when clicked                |



Depending on the active plugin, some of this attributes/fields are allowed to be empty in response body.





