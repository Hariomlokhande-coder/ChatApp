# ChatApp

Production-style real-time chat application built with ASP.NET Core 8, SignalR, Entity Framework Core, SQL Server, JWT authentication, refresh tokens, and an integrated browser UI.

This project supports:

- Private one-to-one messaging
- Group chat and member management
- Real-time delivery over SignalR
- JWT authentication with refresh tokens
- Cookie-backed browser auth support
- Notifications and read tracking
- User online/offline presence
- Basic rate limiting and message throttling
- Localization support for English and Japanese

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Core Features](#core-features)
- [How It Works](#how-it-works)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Database and Migrations](#database-and-migrations)
- [API Reference](#api-reference)
- [SignalR Hub Reference](#signalr-hub-reference)
- [Authentication Flow](#authentication-flow)
- [Security Notes](#security-notes)
- [Localization](#localization)
- [Frontend Notes](#frontend-notes)
- [Health Checks and Swagger](#health-checks-and-swagger)
- [Troubleshooting](#troubleshooting)
- [Future Improvements](#future-improvements)

## Overview

`ChatApp` is a layered .NET 8 solution for building a chat system with both REST APIs and real-time messaging. The application uses:

- `ChatApp.API` for controllers, SignalR hub, middleware, MVC view, and static assets
- `ChatApp.Application` for DTOs and shared services
- `ChatApp.Infrastructure` for Entity Framework Core and SQL Server persistence
- `ChatApp.Domain` for core entities

The app exposes REST APIs for auth, users, conversations, groups, notifications, and history, while live messages are sent and received through SignalR.

## Tech Stack

- `.NET 8`
- `ASP.NET Core MVC + Web API`
- `SignalR`
- `Entity Framework Core 8`
- `SQL Server / LocalDB`
- `JWT Bearer Authentication`
- `BCrypt` password hashing
- `Swagger / OpenAPI`
- `Vanilla JavaScript frontend`

NuGet packages used in the API include:

- `BCrypt.Net-Next`
- `Microsoft.AspNetCore.Authentication.JwtBearer`
- `Microsoft.EntityFrameworkCore.SqlServer`
- `Swashbuckle.AspNetCore`

## Architecture

This solution follows a clean layered structure:

### 1. Domain Layer

Contains business entities such as:

- `User`
- `Message`
- `Group`
- `GroupMember`
- `MessageReadStatus`
- `Notification`
- `RefreshToken`

### 2. Application Layer

Contains DTOs and services shared by the API:

- request/response contracts for auth, chat, group, user, notifications, pagination
- `ConnectionManager` for tracking online users and active SignalR connections
- `InputSanitizer` for sanitizing user input

### 3. Infrastructure Layer

Contains persistence code:

- `AppDbContext`
- EF Core entity configuration
- migrations
- SQL Server connection wiring

### 4. API Layer

Contains the app entry point and delivery mechanisms:

- `Program.cs`
- REST controllers
- `ChatHub`
- rate-limiting middleware
- MVC view and static frontend assets

## Project Structure

```text
ChatApp/
|-- ChatApp.slnx
|-- ChatApp.API/
|   |-- controllers/
|   |-- Hubs/
|   |-- Middleware/
|   |-- Properties/
|   |-- Resources/
|   |-- Views/
|   |-- wwwroot/
|   |-- Program.cs
|   |-- appsettings.json
|-- ChatApp.Application/
|   |-- DTOs/
|   |-- Services/
|-- ChatApp.Domain/
|   |-- Entities/
|-- ChatApp.Infrastructure/
|   |-- Data/
|   |-- Migrations/
```

## Core Features

### Real-time chat

- Private messaging
- Group messaging
- Delivery acknowledgements
- Read receipts
- Typing indicators
- Reconnect support for missed messages

### Authentication

- User registration and login
- JWT access token creation
- refresh token issuance
- cookie-based auth support for browser clients
- logout, logout-all, token verification, token revocation

### Presence

- Tracks active SignalR connections per user
- broadcasts online/offline events
- restores group room membership when a user reconnects

### Collaboration

- Create groups
- Add/remove members
- Add members by email
- group details and membership listing

### User experience

- Browser chat UI at `/`
- personal and group conversations
- notifications API
- localization resources for `en` and `ja`

## How It Works

### App startup

On startup the application:

1. Configures SQL Server with retry support
2. Registers `ConnectionManager` as a singleton
3. Registers `InputSanitizer`
4. Configures SignalR limits and timeouts
5. Configures CORS using `AllowedOrigins`
6. Configures JWT bearer authentication
7. Reads JWT from header, query string, or `chat_token` cookie
8. Enables session state
9. Enables Swagger in development
10. Applies custom API rate limiting middleware
11. Maps MVC routes, controllers, SignalR hub, and health checks
12. Marks leftover online users as offline during startup cleanup

### Message persistence

Messages are stored in SQL Server and include:

- sender and receiver or group
- request id for idempotency
- content
- timestamps
- delivery status

### Online presence

`ConnectionManager` stores:

- `UserId -> active connection IDs`
- `ConnectionId -> UserId`

This allows:

- multiple browser tabs per user
- accurate online/offline tracking
- targeted delivery to all active client connections

### Notifications and reads

When a message is saved, the app also creates:

- `MessageReadStatus`
- `Notification`

When the receiver marks messages as read:

- message read status is updated
- notifications are marked read
- sender receives a `MessageRead` SignalR event

## Configuration

Main configuration lives in [`ChatApp.API/appsettings.json`](/e:/ChatApp/ChatApp/ChatApp.API/appsettings.json).

### Default database connection

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=(localdb)\\MSSQLLocalDB;Database=ChatAppDB;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

### JWT settings

```json
"Jwt": {
  "Key": "...",
  "Issuer": "ChatAppAPI",
  "Audience": "ChatAppUsers",
  "DurationInMinutes": 60
}
```

### Session settings

```json
"Session": {
  "TimeoutInMinutes": 60,
  "CookieName": ".ChatApp.Session"
}
```

### CORS allowed origins

Configured for local development, including:

- `http://localhost:5103`
- `https://localhost:7229`
- `http://localhost:3000`
- `http://localhost:5173`

### Security settings

```json
"Security": {
  "MinPasswordLength": 6,
  "RequireUppercase": true,
  "RequireLowercase": true,
  "RequireDigit": true,
  "RequireSpecialCharacter": true,
  "MaxMessageRatePerSecond": 5
}
```

### API rate limit settings

```json
"RateLimit": {
  "RequestsPerMinute": 60,
  "WindowSizeSeconds": 60
}
```

### SignalR settings

```json
"SignalR": {
  "MaxMessageSizeKB": 64
}
```

## Getting Started

### Prerequisites

- `Visual Studio 2022` or `VS Code`
- `.NET 8 SDK`
- `SQL Server LocalDB` or another SQL Server instance

### 1. Clone the repository

```powershell
git clone <your-repo-url>
cd ChatApp
```

### 2. Update the connection string if needed

Edit [`ChatApp.API/appsettings.json`](/e:/ChatApp/ChatApp/ChatApp.API/appsettings.json) and change `ConnectionStrings:DefaultConnection` if you are not using LocalDB.

### 3. Restore dependencies

```powershell
dotnet restore ChatApp.slnx
```

### 4. Apply database migrations

From the repository root:

```powershell
dotnet ef database update --project .\ChatApp.Infrastructure\ChatApp.Infrastructure.csproj --startup-project .\ChatApp.API\ChatApp.API.csproj
```

### 5. Run the application

```powershell
dotnet run --project .\ChatApp.API\ChatApp.API.csproj
```

By default, launch settings include:

- `http://localhost:5103`
- `https://localhost:7229`

### 6. Open the app

- Chat UI: `http://localhost:5103/`
- Swagger in development: `http://localhost:5103/swagger`
- Health check: `http://localhost:5103/health`

## Database and Migrations

The project already contains EF Core migrations under:

- [`ChatApp.Infrastructure/Migrations`](/e:/ChatApp/ChatApp/ChatApp.Infrastructure/Migrations)

Current migration files include:

- `20260327115139_Init`
- `20260401120000_AddRefreshToken`

### Common EF commands

Create a new migration:

```powershell
dotnet ef migrations add <MigrationName> --project .\ChatApp.Infrastructure\ChatApp.Infrastructure.csproj --startup-project .\ChatApp.API\ChatApp.API.csproj
```

Update the database:

```powershell
dotnet ef database update --project .\ChatApp.Infrastructure\ChatApp.Infrastructure.csproj --startup-project .\ChatApp.API\ChatApp.API.csproj
```

## API Reference

All secured endpoints require authentication unless noted otherwise.

### Auth

Base route: `/api/auth`

- `POST /register`
  Creates a new user with password policy validation.
- `POST /login`
  Verifies credentials, returns JWT + refresh token, sets `chat_token` cookie, and creates a session.
- `POST /logout`
  Clears the auth cookie and session.
- `GET /verify`
  Checks whether the access token is valid.
- `POST /refresh`
  Exchanges a refresh token for a new access token and new refresh token.
- `POST /revoke`
  Revokes a refresh token for the authenticated user.
- `POST /logout-all`
  Revokes all active refresh tokens for the authenticated user.

### Users

Base route: `/api/users`

- `GET /`
  Returns all users except the current user.
- `GET /{targetUserId}`
  Returns a specific user profile.
- `GET /search?query=...`
  Searches users by username or email.
- `PUT /profile`
  Updates current user profile data.
- `GET /notifications?page=1&pageSize=20`
  Returns paginated notifications.
- `POST /notifications/read`
  Marks selected notifications as read.

### Chat

Base route: `/api/chat`

- `GET /private/{otherUserId}?page=1&pageSize=50`
  Returns paginated private chat history.
- `GET /group/{groupId}?page=1&pageSize=50`
  Returns paginated group chat history.
- `GET /conversations`
  Returns conversation summary data for private chats and groups.

### Groups

Base route: `/api/groups`

- `POST /`
  Creates a group and adds the creator as admin.
- `GET /`
  Returns groups for the current user.
- `GET /{groupId}`
  Returns group details and member list.
- `PUT /{groupId}`
  Updates group metadata.
- `DELETE /{groupId}`
  Soft deletes a group.
- `GET /{groupId}/members`
  Returns all members of a group.
- `POST /{groupId}/members`
  Adds a member by user ID.
- `POST /{groupId}/members/add-by-email`
  Adds a member by email and pushes a live notification if the user is online.
- `DELETE /{groupId}/members/{mid}`
  Removes a member from the group.

## SignalR Hub Reference

Hub endpoint:

- `/chatHub`

Authentication is required. JWT can be supplied through the bearer token flow, query string, or the `chat_token` cookie.

### Client-to-server hub methods

- `SendPrivateMessage(SendPrivateMessageRequest)`
- `SendGroupMessage(SendGroupMessageRequest)`
- `MessageDelivered(Guid messageId)`
- `FetchMissedMessages(DateTime lastMessageTimestamp)`
- `MarkMessagesRead(List<Guid> messageIds)`
- `SendTyping(Guid targetId, bool isGroup)`
- `StopTyping(Guid targetId, bool isGroup)`

### Server-to-client events

- `OnlineUsers`
- `UserOnline`
- `UserOffline`
- `ReceivePrivateMessage`
- `ReceiveGroupMessage`
- `MessageSent`
- `MessageDelivered`
- `MessageRead`
- `UserTyping`
- `UserStoppedTyping`
- `AddedToGroup`

### Notes about delivery behavior

- Private messages are persisted first, then sent to receiver and sender.
- Group messages are broadcast through SignalR group rooms.
- Undelivered private messages are pushed on reconnect.
- Users are automatically rejoined to their group rooms on reconnect.
- `RequestId` is used for idempotency and duplicate-send protection.

## Authentication Flow

### Register

The register endpoint validates:

- email presence and basic format
- unique email
- unique username
- password complexity rules from configuration

Passwords are hashed with `BCrypt`.

### Login

On successful login the backend:

1. Creates an access token
2. Creates a refresh token record in the database
3. Stores the access token in the `chat_token` HTTP-only cookie
4. Stores the current user id in session
5. Updates the user's last seen timestamp

### Refresh token flow

When the access token expires:

1. Client calls `/api/auth/refresh`
2. Backend validates the refresh token
3. Backend creates a new access token
4. Backend creates a new refresh token
5. Backend updates the cookie with the new access token

## Security Notes

This project includes several important protections:

- `BCrypt` password hashing
- JWT validation for issuer, audience, lifetime, and signing key
- HTTP-only auth cookie support
- soft-delete query filters on major entities
- request rate limiting middleware
- per-user message rate limiting inside the SignalR hub
- HTML encoding for message content in the hub
- startup cleanup that resets stale online state

Important production note:

- The JWT signing key in `appsettings.json` should be replaced with a secure secret managed through user secrets, environment variables, or a secret vault.

## Localization

Localization is configured with resource files in:

- [`ChatApp.API/Resources`](/e:/ChatApp/ChatApp/ChatApp.API/Resources)

Supported cultures:

- `en`
- `ja`

The chat UI lets users switch language using query parameters:

- `?culture=en&ui-culture=en`
- `?culture=ja&ui-culture=ja`

## Frontend Notes

The browser UI is served from the API project itself.

Key frontend files:

- [`Views/Home/Chat.cshtml`](/e:/ChatApp/ChatApp/ChatApp.API/Views/Home/Chat.cshtml)
- [`wwwroot/js/main.js`](/e:/ChatApp/ChatApp/ChatApp.API/wwwroot/js/main.js)
- [`wwwroot/js/chat-core.js`](/e:/ChatApp/ChatApp/ChatApp.API/wwwroot/js/chat-core.js)
- [`wwwroot/js/chat-ui.js`](/e:/ChatApp/ChatApp/ChatApp.API/wwwroot/js/chat-ui.js)
- [`wwwroot/js/auth.js`](/e:/ChatApp/ChatApp/ChatApp.API/wwwroot/js/auth.js)
- [`wwwroot/css/chat.css`](/e:/ChatApp/ChatApp/ChatApp.API/wwwroot/css/chat.css)

The default route points to:

- `/Home/Chat`

which is also mapped as the app root `/`.

## Health Checks and Swagger

### Health check

- `GET /health`

Useful for:

- load balancer probes
- container readiness checks
- uptime monitoring

### Swagger

Swagger is enabled in development only.

- `GET /swagger`

Use it to inspect and test the REST API surface.

## Troubleshooting

### LocalDB not found

If LocalDB is unavailable:

- install SQL Server Express LocalDB, or
- point `DefaultConnection` to a different SQL Server instance

### CORS errors

If you run a separate frontend or different local port:

- add the origin to `AllowedOrigins` in `appsettings.json`

### SignalR auth issues

If the hub connection fails with `401`:

- verify the user is logged in
- verify the JWT cookie is present or token is attached correctly
- confirm `Issuer`, `Audience`, and `Key` values match

### Token refresh issues

If refresh stops working:

- confirm the refresh token still exists in the database
- confirm it is not expired
- confirm it has not been revoked

### Swagger not visible

Swagger is only enabled for the `Development` environment.

## Future Improvements

Possible next enhancements:

- move secrets out of `appsettings.json`
- add role policies and finer authorization rules
- add Redis backplane for scaled SignalR deployment
- add media/file upload support
- add message edit/delete endpoints
- add unit and integration test projects
- improve search and unread count APIs
- add Docker support and CI/CD pipeline

## Summary

`ChatApp` is a strong base for a real-time messaging system in .NET. It combines MVC, REST APIs, SignalR, EF Core, authentication, notifications, group management, and localization in a single solution that is straightforward to run locally and extend for larger deployments.
