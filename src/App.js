import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import './Assets/scss/style.scss';


//loader
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
//CContainer
const DefaultLayout =React.lazy(()=>import('./components/layouts/DefaultLayout'));
//pages
const Login =React.lazy(()=>import('./pages/Auth/LoginPage') );
const SignUp =React.lazy(()=>import('./pages/Auth/SignUpPage'));
const Page404 =React.lazy(()=>import('./pages/Error/Page404'));
const Page505 =React.lazy(()=>import('./pages/Error/Page505'));
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
          <Route exact path="/404" name="Page 404" >
            <Page404 />
          </Route>
          <Route exact path="/505" name="Page 505" >
            <Page505 />
          </Route>
          <Route  path="/" name="Home" >
            <DefaultLayout />
          </Route>
        </Switch>
       
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
