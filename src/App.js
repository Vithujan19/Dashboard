import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import History from './components/History';
import AddExpense from './components/AddExpense';
// import Dash from './components/Dash';
// import Login from './components/login';
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './components/landing';
import Login from './components/Login/login';

function App() {
  return (
    <div className="App">
      <React.Fragment>
      <BrowserRouter>
      {/* <Login/> */}
      {/* <Dashboard/> */}
      <Route exact path="/" render={() => <Dashboard posts={Dashboard}/>}/>
      {/* <Route path="/receipt/:id" render={props => <Receipt {...props} posts={posts}/>}/>
      <Route path="/update/:id" render={props => <EditReceipt {...props} posts={posts}/>}/> */}
      {/* <Route path="/" component={Dashboard}/> */}
      <Route path="/Report" component={Report}/>
      <Route path="/History" component={History}/>
      <Route path="/AddExpense" component={AddExpense}/>
      <Route path="/Landing" component={Landing}/>
      <Route path="/Login" component={Login}/>
      </BrowserRouter>
    </React.Fragment>
    </div>
  );
}

export default App;
