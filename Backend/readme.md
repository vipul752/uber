<!-- filepath: /Users/vipulkumar/Desktop/fullstack/uber/Backend/README.md -->

# API Documentation

## `/user/register`

### Description

Registers a new user with the provided details.

### Method

`POST`

### Request Body

The request body should be a JSON object containing the following fields:

- `fullName`:
  - `firstName` (required): string, minimum 3 characters.
  - `lastName` (optional): string, minimum 3 characters.
- `email` (required): string, must be a valid email address.
- `password` (required): string, minimum 6 characters.

**Example:**

```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

{
"user": {
"\_id": "user_id",
"email": "john.doe@example.com",
"fullName": {
"firstName": "John",
"lastName": "Doe"
}
},
"token": "jwt_token"
}

## `/user/login`

### Description

Authenticates a user using their email and password.

### Method

`POST`

### Request Body

The request body should be a JSON object containing the following fields:

- `email` (required): string, must be a valid email address.
- `password` (required): string, minimum 6 characters.

**Example:**

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

{
  "message": "Login successful",
  "token": "jwt_token"
}

## `/user/profile`

### Description

Retrieves the profile information of the authenticated user.

### Method

`GET`

### Headers

- `Authorization` (required): Bearer token obtained after login.

### Responses

- **200 OK**
- **Description**: User profile retrieved successfully.
- **Content**: JSON object containing user details.

  ```json
  {
    "_id": "user_id",
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    // ... other user fields ...
  }
  ```

- **401 Unauthorized**
- **Description**: Authentication failed due to missing or invalid token.
- **Content**: JSON object with an error message.

  ```json
  {
    "error": "Authentication failed"
  }
  ```

- **500 Internal Server Error**
- **Description**: An unexpected error occurred on the server.

### Notes

- This endpoint requires authentication.
- Include the JWT token in the `Authorization` header as shown above.


## `/user/logout`

### Description

Logs out the authenticated user by invalidating the current authentication token.

### Method

`POST`

### Headers

- `Authorization` (required): Bearer token obtained after login.



### Responses

- **200 OK**
- **Description**: Logout successful.
- **Content**: JSON object with a success message.

  ```json
  {
    "message": "Logged out successfully"
  }
  ```

- **401 Unauthorized**
- **Description**: Authentication failed due to missing or invalid token.
- **Content**: JSON object with an error message.

  ```json
  {
    "error": "Authentication failed"
  }
  ```

- **500 Internal Server Error**
- **Description**: An unexpected error occurred on the server.

### Notes

- This endpoint requires authentication.
- Include the JWT token in the `Authorization` header as shown above.
- The token will be added to a blacklist to prevent further use.

