import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import axios from 'axios';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://your-api-endpoint/register', { name, email, password });
//       console.log(response.data);
//       // handle success, such as redirecting to profile page
//     } catch (error) {
//       console.error(error);
//       // handle error, such as displaying an error message
//     }
//   };

  return (
    <form >
      <h2>Register</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

function UserProfile({ match }) {
  const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(`http://your-api-endpoint/user/${match.params.id}`);
//         setUser(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUserProfile();
//   }, [match.params.id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user details */}
    </div>
  );
}

function UserApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <h1>Welcome to the User Profile App</h1>
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/user/:id" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default UserApp;
