import TodoList from './components/TodoList';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <h1>USERS LIST</h1>
      <UserList />
      <br />
      <h1>TODO LIST:</h1>
      <TodoList />
    </div>
  );
};

export default App;
