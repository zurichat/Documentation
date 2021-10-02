---
slug: /ZuriBlog
sidebar_position: 7
title: Zuri Blog

---

The Blog Resource return information about Zuri Chat's Blog.

You can create a new blog post, subscribe to zuri mail, make comment on a blog post and other endpoints available.

## Endpoints
- POST `/posts`
- GET `/posts/{post_id}/`
- GET `/posts`
- DELETE `/posts/{post_id}` 
- PUT `/posts/{post_id}`
- POST `/posts/{post_id}/comments`
- GET `/posts/{post_id}/comments`
- PATCH `/posts/{post_id}/like/{user_id}`
- POST `/posts/mail`

## Create a Blog Post

POST `/posts`

Create a new blog post 

REQUEST URL: `https://api.zuri.chat/posts`

#### Request Body
Name | Data Type | Required | Description
------- | ------- | ------- | -------
author | string | True | name of the person writing the  blog post
content | string | True | content of the blog post
image_url | string | True | link to an image describing the blog post
socials | string | True | social media account
tags | string | True | adds the blog post to a collection
title | string | True | title of the blog post

#### Sample Request

```sh

curl -X POST "https://api.zuri.chat/posts" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{
         \"author\":\"David Oluwatobi\",
         \"content\":\"One of the pros of HNG internship is that it teaches you to adapt fast....\",\"image_url\":\"string\",
         \"socials\":\"https://twitter.com/HNG\",
         \"tags\":\"Tech\",
         \"title\":\"The pros and cons of HNG internship\"
        }"
```

```sh
JSON
Content-Type: `application/json`
{
  "author": "David Oluwatobi",
  "content": "One of the pros of HNG internship is that it teaches you to adapt fast....",
  "image_url": "string",
  "socials": "https://twitter.com/HNG",
  "tags": "Tech",
  "title": "The pros and cons of HNG internship"
}

```

#### Sample Response

```sh
{
  "author": "David Oluwatobi",
  "content": "One of the pros of HNG internship is that it teaches you to adapt fast....",
  "created_at": "25 August 2021. 10:42:05",
  "edited_at": "25 August 2021. 10:42:05",
  "image_url": "string",
  "length": 5,
  "socials": "https://twitter.com/HNG",
  "tags": "Tech",
  "title": "The pros and cons of HNG internship"
}
```

#### Error Response
```sh
{
  "code": "400",
  "message": "Bad request",
  "metadata": {}
}
```

## Read a particular blog post
GET `/posts/{post_id}/`

You can read the contents of a blog post, identified by `post_id`. Returns an array containing details on the blog post.

REQUEST URL: `https://api.zuri.chat/posts/{post_id}/`

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{post_id} string | True | identifies the blog you want read

#### Sample Request

```sh
cURL
curl -X GET "https://api.zuri.chat/posts/6137d69b21d3c78fc9a84bdf" 
     -H "accept: application/json"
```

#### Sample Response
```sh
[
  {
    "author": "David Oluwatobi",
    "content": "One of the pros of HNG internship is that it teaches you to adapt fast....",
    "created_at": "25 August 2021. 10:42:05",
    "edited_at": "25 August 2021. 10:42:05",
    "image_url": "string",
    "length": 5,
    "socials": "https://twitter.com/HNG",
    "tags": "Tech",
    "title": "The pros and cons of HNG internship"
  }
]

```

#### Error Response
```sh

{
  "code": "400",
  "message": "Blog post not found",
  "metadata": {}
}

```

## Read all blog posts
GET `/posts`

Returns an array of all blog posts on Zuri Chat.  There are no parameters for this request.

REQUEST URL: https://api.zuri.chat/posts

#### Sample Request
```sh
cURL
curl -X GET "https://api.zuri.chat/posts" 
     -H "accept: application/json"

```

#### Sample Response
```sh
{
  "status": 200,
  "message": "success",
  "data": [
    {
      "_id": "61464f251a5607b13c00bc48",
      "author": "david oluwatobi peter",
      "comments": 70,
      "content": "Jesus is the best, yeah. hfjff hhffj fjjfujf kkskks fhfhfh hdhhddj jfjffkf bhffjff jdjkdldldlld",
      "created_at": "2021-09-18T20:42:13+02:00",
      "deleted": false,
      "deleted_at": "0001-01-01T00:00:00Z",
      "edited_at": "0001-01-01T00:00:00Z",
      "id": "000000000000000000000000",
      "image_url": "",
      "length": 0,
      "likes": 0,
      "socials": null,
      "tags": null,
      "title": "TALO NI IGBALA ATI IYANU"
    },
    {
      "_id": "6147335ff41cb684cc531fcb",
      "author": "HOD",
      "comments": 0,
      "content": "test content. nothing really sensible here",
      "created_at": "2021-09-19T12:55:59+02:00",
      "deleted": false,
      "deleted_at": "0001-01-01T00:00:00Z",
      "edited_at": "0001-01-01T00:00:00Z",
      "id": "000000000000000000000000",
      "image_url": "",
      "length": 0,
      "likes": 0,
      "socials": null,
      "tags": null,
      "title": "TEST POST"
    },
    {
      "_id": "61473662f41cb684cc532004",
      "author": "HOD",
      "comments": 0,
      "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
      "created_at": "2021-09-19T13:08:50+02:00",
      "deleted": false,
      "deleted_at": "0001-01-01T00:00:00Z",
      "edited_at": "0001-01-01T00:00:00Z",
      "id": "000000000000000000000000",
      "image_url": "",
      "length": 0,
      "likes": 0,
      "socials": null,
      "tags": null,
      "title": "TEST POST II"
    },
    {
      "_id": "614736b0f41cb684cc532006",
      "author": "HOD",
      "comments": 2,
      "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis",
      "created_at": "2021-09-19T13:10:08+02:00",
      "deleted": false,
      "deleted_at": "0001-01-01T00:00:00Z",
      "edited_at": "0001-01-01T00:00:00Z",
      "id": "000000000000000000000000",
      "image_url": "",
      "length": 2,
      "likes": 1,
      "socials": null,
      "tags": null,
      "title": "TEST POST AGAIN"
    }
  ]
}

```

#### Error Response

```sh
{
  "code": "500",
  "message": "internal server error",
  "metadata": {}
}
```


## Delete a blog post
DELETE `/posts/{post_id}` 

Delete a blog post on Zuri Chat. You must provide the `post_id` of the post to be deleted

REQUEST URL: https://api.zuri.chat/posts/{post_id}

#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
{post_id} string | True | identifies the blog to be deleted

#### Sample Request
```sh
curl -X DELETE "https://api.zuri.chat/posts/6137d69b21d3c78fc9a84bdf" 
     -H "accept: application/json"
```

#### Sample Response
```sh
{
  "status": "200",
  "message": "blog post deleted successfully"
}
```

#### Error Response

```sh
{
  "status": "404",
  "message": "blog post does not exist"
}

```

## Update a blog post
PUT `/posts/{post_id}`

Update an exisiting blog on Zuri Chat with this endpoint.

REQUEST URL: https://api.zuri.chat/posts/{post_id}

#### Path Parameters
Name | Data Type | Required | Description
------- | ------- | ------- | -------
{post_id} string | True | identifies the blog to be updated

#### Request Body

Name | Data Type | Required | Description
------- | ------- | ------- | -------
author | string | True | name of the person writing the  blog post
content | string | True | content of the blog post
image_url | string | True | link to an image describing the blog post
socials | string | True | social media account
tags | string | True | adds the blog post to a collection
title | string | True | title of the blog post

#### Sample Request
```sh
curl -X PUT "https://api.zuri.chat/posts/6137d69b21d3c78fc9a84bdf" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{
         \"author\":\"David Oluwatobi\",
         \"content\":\"One of the pros of HNG internship is that it teaches you to adapt fast....\",\"image_url\":\"string\",
         \"socials\":\"https://twitter.com/HNG\",
         \"tags\":\"Tech\",
         \"title\":\"The pros and cons of HNG internship\"
        }"
```


```sh
JSON
Content-Type : application/json
{
  "author": "David Oluwatobi",
  "content": "One of the pros of HNG internship is that it teaches you to adapt fast....",
  "image_url": "string",
  "socials": "https://twitter.com/HNG",
  "tags": "Tech",
  "title": "The pros and cons of HNG internship"
}
```

#### Sample Response
```sh
{
  "code": "200",
  "message": "blog post updated",
  "metadata": {}
}
```

#### Error Response
```sh
{
  "code": "404",
  "message": "blog post not found",
  "metadata": {}
}
```

## Comment on a blog post
POST `/posts/{post_id}/comments`

Add a comment to a unique blog post. For this request, you need the `post_id`

REQUEST URL: https://api.zuri.chat/posts/{post_id}/comments

#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
{post_id} string | True | identifies the blog post which a comment will be added

#### Request Body
Name | Data Type | Required | Description
------- | ------- | ------- | -------
comment_at | date | True | Date-Time format at which the comment was made
comment_author | string | name of the user adding a comment
comment_author | string | content of the comment

#### Sample Request
```sh
cURL
curl -X POST "https://api.zuri.chat/posts/6137d69b21d3c78fc9a84bdf/comments" 
     -H "accept: application/json" -H "Content-Type: application/json" 
     -d "{
         \"comment_at\":\"25 August 2021. 10:42:05\",
         \"comment_author\":\"David Oluwatobi\",
         \"comment_content\":\"HNG builds an excellent spirit in you...\"
        }"
```

```sh
JSON
Content-Type: application/json
{
  "comment_at": "25 August 2021. 10:42:05",
  "comment_author": "David Oluwatobi",
  "comment_content": "HNG builds an excellent spirit in you..."
}
```
#### Sample Response
```sh
{
  "code": "200",
  "message": "comment added to post successfully",
  "metadata": {}
}
```

#### Error Response

```sh
{
  "code": "400",
  "message": "bad request",
  "metadata": {}
}
```

## Read all comments of a blog post
GET `/posts/{post_id}/comments`

Returns an array of all comments associated with a single blog post. 

REQUEST URL: https://api.zuri.chat/posts/{post_id}/comments

#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
{post_id} string | True | identifies the blog post which a comment will be added

#### Sample Request
```sh
curl -X GET "https://api.zuri.chat/posts/6137d69b21d3c78fc9a84bdf/comments" 
     -H "accept: application/json"
```

#### Sample Response
```sh
{
  "author": "David Oluwatobi",
  "content": "One of the pros of HNG internship is that it teaches you to adapt fast....",
  "created_at": "25 August 2021. 10:42:05",
  "edited_at": "25 August 2021. 10:42:05",
  "image_url": "string",
  "length": 5,
  "socials": "https://twitter.com/HNG",
  "tags": "Tech",
  "title": "The pros and cons of HNG internship"
}
```

#### Error Response
```sh
{
  "status": 404,
  "message": "blog post comments does not exist"
}
```

## Like/Unlike a blog posr
PATCH `/posts/{post_id}/like/{user_id}`

Allows you like or unlike a blog post as a registered user in Zuri Chat. For the request, you will provide `post_id` and `user_id` as parameters.

REQUEST URL: https://api.zuri.chat/posts{post_id}/like/{user_id}

#### Path Parameters

Name | Data Type | Required | Description
------- | ------- | ------- | -------
{post_id} string | True | identifies the blog post which a comment will be added
{user_id} | string | True | identifies the unique user in Zuri Chat liking/unliking a post.


#### Sample Request
```sh
curl -X PATCH "https://api.zuri.chat/posts/6137d69b21d3c78fc9a84bdf/like/6137d69b21d3c78fc9a84bdf" 
     -H "accept: application/json"
```

#### Sample Response
```sh
{
  "status": "200",
  "message": "blog post liked successfully"
}
```

#### Error Response
```sh
{
  "status": "400",
  "message": "blog post doesn't exist"
}
```

## Subscribe to Zuri mail

POST `/posts/mail`

Allows you subscribe to Zuri mail, get regular updates on Zuri Chat. You need a valid email for the request body.

REQUEST URL: https://api.zuri.chat/posts/mail

#### Request Body
Name | Data Type | Required | Description
------- | ------- | ------- | -------
email | string | True | email address you will receive updates on


#### Sample Request
```sh
cURL
curl -X POST "https://api.zuri.chat/posts/mail" 
     -H "accept: application/json" 
     -H "Content-Type: application/json" 
     -d "{\"email\":\"subscriber@gmail.com\"
    }"
```
```sh
JSON
Content-Type: application/json

{
  "email": "subscriber@gmail.com"
}
```

#### Sample Response
```sh
{
  "status": "200",
  "message": "subscription successfull"
}
```

#### Error Response
```sh
{
  "status": "400",
  "message": "you already subscribed"
}
```




