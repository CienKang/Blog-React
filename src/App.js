import React from'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import BlogDetails from './components/blogs/blogDetails';
import CreateBlog from './components/blogs/createblog';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/layout/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateBlog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
