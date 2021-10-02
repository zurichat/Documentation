---
slug: /Contact
sidebar_position: 8
title: Contact Us

---


## Contact Zuri Chat

POST `/contact`

Through this endpoint, you can make enquiries or complaints on Zuri Chat. You will fill a form that contains the following details: your email, subject(why you are reaching out), content describing the issue and file upload to support your request.

There are no parameters required for this endpoint.

REQUEST URL: `"https://api.zuri.chat/contact"`

#### Request Body
Name| Description | Data Type |  Required 
---------|----------|--------- | ------- 
content | a short explanation on your enquiry/complaint. It accepts a max of 500 characters | string | True
email | you will be reached via your email, email should be of max length of 254 characters | string| True 
file | a visual representation of your request.  You can attach a max of 5 files capped at a size of 2MB | jpg, png, pdf, doc, docx  | False |
subject| brief summary about your enquiry/complaint. A max of 100 characters | string | False

#### Sample Request
```sh
cURL
curl -X POST "https://api.zuri.chat/contact" 
     -H "accept: application/json" 
     -H "Content-Type: multipart/form-data" 
     -F "content=I would love to know the pricng tiers for Zuri chat." 
     -F "email=hng.user1@gmail.con" 
     -F "file=" 
     -F "subject=Pricing"
```

```sh
JSON
Content-Type: multipart/form-data
{
   "content":"I would love to know the pricng tiers for Zuri chat." 
   "email":"hng.user1@gmail.com"  
   "subject":"Pricing" 
}
```

#### Sample Response
```sh
{
  "data": {
    "InsertedID": "614cd3091df928467cc56253"
  },
  "message": "contact information sent successfully",
  "status": "201"
}
```

#### Error Response
You will get this response if you are omitting the required fields.
```sh
{
  "data": {
    "content": "field cannot be empty",
    "email": "invalid email",
    "file": "invalid file type",
    "subject": "field cannot be empty"
  },
  "message": "Bad request",
  "status": "400"
}
```


