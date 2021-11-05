import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import './Assets/scss/style.scss';


//loader
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

//pages
const Login =React.lazy(()=>import('./pages/Auth/LoginPage') );
const SignUp =React.lazy(()=>import('./pages/Auth/SignUpPage'));

function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
       
        <Switch>
          <Route exact path="/login" name="Login Page" >
            <Login />
          </Route>
          <Route exact path="/signup" name="SignUp Page" >
            <SignUp />
          </Route>
        </Switch>
       
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
