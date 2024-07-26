import './App.css';
import Login from './components/login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <div className='App'>

      <div>
          <h1> This is Register Page</h1>
          <Register />
        </div>

        <div>
          <h1> This is Login Page</h1>
          <Login />
        </div>

      </div>
    </div>
  );
}

export default App;
