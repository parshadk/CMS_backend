Here is the  Markdown document for testing the API endpoints:




## User Registration

- **Request Type**: POST
- **URL**: `http://localhost:3000/api/auth/register`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```


## Email Verification

- **Request Type**: GET
- **URL**: `/api/auth/verify/:token`
  - Replace `:token` with the actual token received in the verification email.

---

## User Login

- **Request Type**: POST
- **URL**: `http://localhost:3000/api/auth/login`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response**:
- You will receive a JWT token in the response.

---

## Forgot Password

- **Request Type**: POST
- **URL**: `http://localhost:3000/api/auth/forgot`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
  "email": "john.doe@example.com"
}
```

**Response**:
- Receive a reset token link in the email.

---

## Reset Password

- **Request Type**: POST
- **URL**: `http://localhost:3000/api/auth/reset`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
  "resetToken": "your_reset_token",
  "newPassword": "newpassword123"
}
```

---

## Get Content

- **Request Type**: GET
- **URL**: `http://localhost:3000/api/content/homepage`

---

## Update Content

- **Request Type**: PUT
- **URL**: `http://localhost:3000/api/content/homepage`
- **Content-Type**: `application/json`
- **Headers**:
  - `x-auth-token`: JWT token received from the login response

**Request Body**:
```json
{
  "your": "content",
  "fields": "here"
}
```

