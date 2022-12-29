import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, Account, Pricing, SignIn } from './components';
import './style.css';
//import { firebaseConfig } from './firebaseConfig';
//import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

let myTitle = "Weather Check - WXCHECK"

ReactDOM.render(       
  <React.StrictMode>
  {/*<FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>*/}
  <Provider store={store}>
    <Router>
      <Switch>

        <Route exact path="/">
          <Home title={myTitle} />
        </Route>
        <Route path='/pricing'>
          <Pricing></Pricing>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/account'>
          <Account></Account>
        </Route>
        <Route path='/about'>
          <About title={''}></About>
        </Route>
        <Route path='/signin'>
            <SignIn></SignIn> 
        </Route>


      </Switch>
    </Router>
    </Provider>
    {/*</FirebaseAppProvider>*/}
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);


