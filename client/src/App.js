import { useQuery, gql } from "@apollo/client";
import "./App.css";

const GET_TODOS_WITH_USERS = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_TODOS_WITH_USERS);

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h2>Loading todos...</h2>
    </div>
  );

  if (error) return (
    <div className="error-container">
      <h2>Error ⚠️</h2>
      <p>{error.message}</p>
    </div>
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📝 GraphQL Todo List</h1>
        <p>A simple todo list application with user details</p>
      </header>
      
      <main className="content">
        <div className="table-container">
          <table className="todos-table">
            <thead>
              <tr>
                <th>Status</th>
                <th>Todo</th>
                <th>Assigned To</th>
              </tr>
            </thead>
            <tbody>
              {data.getTodos.map((todo) => (
                <tr key={todo.id} className={todo.completed ? "completed" : ""}>
                  <td>
                    <span className={`status-dot ${todo.completed ? "completed" : "pending"}`}>
                      {todo.completed ? "✓" : "○"}
                    </span>
                  </td>
                  <td>{todo.title}</td>
                  <td>{todo?.user?.name || "Unassigned"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
