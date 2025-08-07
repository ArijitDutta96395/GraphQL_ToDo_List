# GraphQL Todo List Application

A modern, full-stack todo list application built with React, Apollo Client, Node.js, and GraphQL. This application demonstrates the power of GraphQL by efficiently fetching todos and their associated user data in a single query.

![GraphQL Todo List](https://img.shields.io/badge/GraphQL-Todo%20List-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Project Previews

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/ArijitDutta96395/GraphQL_ToDo_List/blob/main/pic1.png?raw=true" alt="Project 1" width="200" style="border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.2);" />
      <br/><br/>
      <b>GraphQL ToDo List</b>
    </td>
    <td align="center">
      <img src="https://github.com/ArijitDutta96395/Another-Repo/blob/main/image2.png?raw=true" alt="Project 2" width="200" style="border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.2);" />
      <br/><br/>
      <b>Second Project Name</b>
    </td>
    <td align="center">
      <img src="https://github.com/ArijitDutta96395/Third-Repo/blob/main/image3.png?raw=true" alt="Project 3" width="200" style="border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.2);" />
      <br/><br/>
      <b>Third Project Name</b>
    </td>
  </tr>
</table>

## 🚀 Features

- **Real-time Todo Management**: View and manage todos with their completion status
- **User Assignment**: Each todo is linked to a user
- **Efficient Data Loading**: Uses GraphQL to minimize over-fetching and under-fetching of data
- **Modern UI/UX**: Clean and responsive interface with loading states and error handling
- **GraphQL Integration**: Demonstrates GraphQL queries and data relationships

## 🛠️ Tech Stack

### Frontend
- React.js
- Apollo Client
- GraphQL
- CSS3 for styling

### Backend
- Node.js
- Express
- Apollo Server
- GraphQL

## 📦 Dependencies

### Client Dependencies
```json
{
  "@apollo/client": "^3.x.x",
  "graphql": "^16.x.x",
  "react": "^18.x.x",
  "react-dom": "^18.x.x"
}
```

### Server Dependencies
```json
{
  "@apollo/server": "^4.x.x",
  "express": "^4.x.x",
  "graphql": "^16.x.x",
  "cors": "^2.x.x",
  "body-parser": "^1.x.x"
}
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArijitDutta96395/GraphQL_ToDo_List.git
   cd GraphQL_ToDo_List
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Start the servers**
   ```bash
   # Start the backend server (from the server directory)
   npm start
   # The server will run on http://localhost:8000

   # Start the frontend development server (from the client directory)
   npm start
   # The client will run on http://localhost:3000
   ```

## 📊 Project Structure

```
graphql_todo_list/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── App.js         # Main application component
│   │   └── App.css        # Styles
│   └── package.json
│
└── server/                 # Backend Node.js server
    ├── index.js           # Server entry point
    └── package.json
```

## 🔍 GraphQL Schema

```graphql
type User {
    id: ID!
    username: String!
    name: String!
    email: String!
    phone: String!
    website: String!
}

type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    user: User
}

type Query {
    getTodos: [Todo]
    getAllUsers: [User]
    getUserById(id: ID!): User
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing the mock API
- [Apollo GraphQL](https://www.apollographql.com/) for the excellent GraphQL tools
- [React](https://reactjs.org/) for the frontend framework

## 📧 Contact

Arijit Dutta - [@ArijitDutta96395](https://github.com/ArijitDutta96395)

Project Link: [https://github.com/ArijitDutta96395/GraphQL_ToDo_List](https://github.com/ArijitDutta96395/GraphQL_ToDo_List)
