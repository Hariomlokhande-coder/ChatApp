<div align="center">
  <h1>💬 ConnectSphere - Modern Real-Time ChatApp</h1>
  <p>
    <strong>A highly scalable, multi-language, and real-time chat application built on ASP.NET Core & SignalR utilizing Clean Architecture principles.</strong>
  </p>
  <p>
    <a href="#-about-the-project">About The Project</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-technology-stack">Tech Stack</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-getting-started">Getting Started</a>
  </p>
</div>

---

## 📖 About The Project

ConnectSphere (ChatApp) is a comprehensive, production-ready real-time communication platform. Designed with enterprise-level architecture in mind, the application delivers lightning-fast messaging capabilities while maintaining a robust and maintainable codebase.

The user interface draws inspiration from modern messaging giants like WhatsApp, offering a fully responsive, mobile-first experience that flawlessly transitions between desktop, tablet, and mobile devices without sacrificing functionality or aesthetics.

## ✨ Key Features

### 🚀 Real-Time Communication
- **Instant Messaging**: Powered by ASP.NET Core SignalR via WebSockets with automatic fallback (Server-Sent Events, Long Polling).
- **Online/Offline Presence**: Real-time tracking of users' connection states, instantly broadcasting when a user comes online or goes offline.
- **Read Receipts & Notifications**: Accurate read status tracking, message consumption logs, and dynamic unread message batching upon user login.
- **Typing Indicators** *(Extensible)*: Built-in hooks to quickly integrate user typing events.

### 🛡️ Security & Authentication
- **JWT (JSON Web Tokens)**: Stateless, highly secure token-based authentication and authorization for securing API endpoints and SignalR Hub connections.
- **Password Hashing**: Industry-standard cryptographic hashing for user credentials.

### 🌍 Localization (Multi-Language)
- **Dynamic Language Switching**: Seamlessly toggle between English (`en-US`) and Japanese (`ja-JP`) via query parameters.
- **IStringLocalizer**: Fully integrated ASP.NET Core localization for all UI components, including dynamic buttons (e.g., "Get Started") and language selection dropdowns.

### 📱 Responsive UI/UX Design
- **Mobile-First Approach**: A beautifully crafted interface using Vanilla CSS media queries to adapt to any screen size.
- **Adaptive Navigation**: Touch-friendly controls, sliding chat lists, and fluid transitions that prevent overlapping elements on smaller screens.
- **State Management**: Robust Vanilla JavaScript (`state.js`, `main.js`) handling complex DOM manipulations without the overhead of heavy SPA frameworks.

---

## 🏗️ Architecture

The backend strictly adheres to **Clean Architecture** and **Domain-Driven Design (DDD)** principles, ensuring separation of concerns:

1. **`ChatApp.Domain`**: The absolute core. Contains enterprise logic, Entities (e.g., `User`, `Message`, `ChatRoom`), Value Objects, and Domain Interfaces. It has zero dependencies on other layers.
2. **`ChatApp.Application`**: The orchestrator. Contains Business Logic, Use Cases, DTOs, Mapping profiles, and interfaces for Infrastructure services (e.g., `IChatRepository`). Often heavily utilizes CQRS patterns and MediatR.
3. **`ChatApp.Infrastructure`**: The implementation layer. Houses Entity Framework Core DbContext (`AppDbContext`), database migrations, third-party integrations, and Repository implementations.
4. **`ChatApp.API`**: The presentation layer. Exposes RESTful API Controllers (`ChatController`, `UserController`), SignalR Hubs, Middleware for Exception Handling, JWT configuration, and serves the frontend Razor Pages (`Chat.cshtml`) and static assets (`wwwroot`).

---

## 🛠️ Technology Stack

### Backend
- **Framework**: .NET 8 / ASP.NET Core Web API
- **Real-time Engine**: SignalR
- **ORM**: Entity Framework Core (EF Core)
- **Database**: Microsoft SQL Server
- **Authentication**: JWT Bearer Tokens

### Frontend
- **Markup**: ASP.NET Core Razor Views (`.cshtml`)
- **Styling**: Vanilla CSS (Custom Properties/Variables, Flexbox, Grid)
- **Scripting**: Vanilla JavaScript (ES6+ Modules, Fetch API for HTTP requests)
- **Real-Time Client**: `@microsoft/signalr` JS client

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:
* [Visual Studio 2022](https://visualstudio.microsoft.com/) or [VS Code](https://code.visualstudio.com/)
* [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
* [SQL Server Express](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) or standard SQL Server
* [Git](https://git-scm.com/)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hariom123-lokhande/ChatApp.git
   cd ChatApp
   ```

2. **Configure Environment Variables / AppSettings:**
   Open `ChatApp.API/appsettings.json` and configure your Database Connection String and JWT Secrets:
   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=ChatAppDb;Trusted_Connection=True;MultipleActiveResultSets=true"
     },
     "JwtSettings": {
       "Secret": "YOUR_SUPER_SECRET_KEY_MAKE_SURE_ITS_LONG_ENOUGH",
       "Issuer": "ChatAppAPI",
       "Audience": "ChatAppClients",
       "ExpiryMinutes": 60
     }
   }
   ```

3. **Apply Database Migrations:**
   Ensure Entity Framework Core CLI is installed globally. Open a terminal in the solution root:
   ```bash
   dotnet ef database update --project ChatApp.Infrastructure --startup-project ChatApp.API
   ```

4. **Run the Application:**
   Using the .NET CLI:
   ```bash
   cd ChatApp.API
   dotnet run
   ```
   Or simply hit `F5` in Visual Studio.
   The application will usually be available at `https://localhost:5001`.

---

## 🔌 API Endpoints (Overview)

While SignalR handles real-time data, REST APIs are used for standard operations:

* **Authentication API** (`/api/user`):
  * `POST /login` - Authenticate user and receive JWT.
  * `POST /register` - Register a new user account.
* **Chat API** (`/api/chat`):
  * `GET /history/{userId}` - Fetch message history between current user and specified user.
  * `PUT /mark-read/{messageId}` - Manually mark a specific message as read.

---

## 🛣️ Roadmap / Future Enhancements

- [ ] Add Group Chat capabilities.
- [ ] Implement Media/File sharing within chats.
- [ ] Add Voice and Video Call support using WebRTC.
- [ ] Implement end-to-end encryption (E2EE) for messages.
- [ ] Add push notifications via Service Workers/PWA capabilities.

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with ❤️ by [Hariom Lokhande](https://github.com/Hariom123-lokhande)*
