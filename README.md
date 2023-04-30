# Assignment-DTR

Nudge Creation Page API Documentation

# TASK - 2

## Description
This API is used for creating nudges which are reminders about events. Users can tag an event, add a title and description to the nudge, upload a cover image, set a time to send the nudge, and add an icon and one-line invitation.

## Object Data Model

```
{
  "id": "string",
  "event": "string",
  "title": "string",
  "coverImage": "string",
  "sendTime": "string",
  "description": "string",
  "icon": "string",
  "invitation": "string"
}
```
## API Structure
Base URL: http://nudgecreationpageapi.com

## API Endpoints
1. Create Nudge

- URL: /nudges
- Method: POST
- Payload:
```
{
  "event": "string",
  "title": "string",
  "coverImage": "string",
  "sendTime": "string",
  "description": "string",
  "icon": "string",
  "invitation": "string"
}
```
2. Get Nudge:

- URL: /nudges/{id}
- Method: GET
- Description: Retrieves the details of the nudge with the given id.

3. Update Nudge:

- URL: /nudges/{id}
- Method: PUT
- Payload:
```
{
  "event": "string",
  "title": "string",
  "coverImage": "string",
  "sendTime": "string",
  "description": "string",
  "icon": "string",
  "invitation": "string"
}
```
- Description: Updates the details of the nudge with the given id.

4. Delete Nudge:

- URL: /nudges/{id}
- Method: DELETE
- Description: Deletes the nudge with the given id.

5. Get All Nudges:

- URL: /nudges
- Method: GET
- Description: Retrieves the details of all the nudges.

6. Get Nudges by Event:

- URL: /nudges?event={event}
- Method: GET
- Description: Retrieves the details of all the nudges for the given event.

- Payload:
```
{
  "event": "string"
}
```

7. Get Nudges by Time:

- URL: /nudges?time={time}
- Method: GET
- Description: Retrieves the details of all the nudges scheduled for the given time.
- Payload:
```
{
  "time": "string"
}
```
### Note: The payload for the Get Nudges by Event and Get Nudges by Time endpoints is optional. If not provided, all the nudges or all the nudges for the given event will be retrieved, respectively.


## CRUD Functionality
1. Create Nudge:

- To create a new nudge, send a POST request to the /nudges endpoint with the payload containing the details of the nudge.

#### POST : http://nudgecreationpageapi.com/nudges

#### Request

```

{
  "event": "Birthday Party",
  "title": "Reminder: John's Birthday Party",
  "coverImage": "https://example.com/images/birthday.jpg",
  "sendTime": "2023-05-15 14:00:00",
  "description": "Don't forget to bring a gift for John's birthday!",
  "icon": "https://example.com/images/birthday-icon.jpg",
  "invitation": "Join us in celebrating John's special day!"
}


```
#### Response

```
HTTP/1.1 201 Created

{
  "id": "123",
  "event": "Birthday Party",
  "title": "Reminder: John's Birthday Party",
  "coverImage": "https://example.com/images/birthday.jpg",
  "sendTime": "2023-05-15 14:00:00",
  "description": "Don't forget to bring a gift for John's birthday!",
  "icon": "https://example.com/images/birthday-icon.jpg",
  "invitation": "Join us in celebrating John's special day!"
}
```

2. Get Nudge:

- To retrieve the details of a nudge, send a GET request to the /nudges/{id} endpoint with the id of the nudge.

#### Request : 

```
GET http://nudgecreationpageapi.com/nudges/123

```

#### Response :

```
HTTP/1.1 200 OK

{
  "id": "123",
  "event": "Birthday Party",
  "title": "Reminder: John's Birthday Party",
  "coverImage": "https://example.com/images/birthday.jpg",
  "sendTime": "2023-05-15 14:00:00",
  "description": "Don't forget to bring a gift for John's birthday!",
  "icon": "https://example.com/images/birthday-icon.jpg",
  "invitation": "Join us in celebrating John's special day!"
}

```

3. Update Nudge:

- To update the details of a nudge, send a PUT request to the /nudges/{id} endpoint with the id of the nudge.

#### Request : 

#### PUT http://nudgecreationpageapi.com/nudges/123

```
{
  "event": "Birthday Party",
  "title": "Reminder: John's Birthday Party",
  "coverImage": "https://example.com/images/birthday.jpg",
  "sendTime": "2023-05-15 15:00:00",
  "description": "Don't forget to bring a gift for John's birthday! We'll be playing games and having cake.",
  "icon": "https://example.com/images/birthday-icon.jpg",
  "invitation": "Join us in celebrating John's special day!"
}

```
#### Response : 

```
HTTP/1.1 200 OK

{
  "id": "123",
  "event": "Birthday Party",
  "title": "Reminder: John's Birthday Party",
  "coverImage": "https://example.com/images/birthday.jpg",
  "sendTime": "2023-05-15 15:00:00",
  "description": "Don't forget to bring a gift for John's birthday! We'll be playing games and having cake.",
  "icon": "https://example.com

```







