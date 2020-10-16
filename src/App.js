import React from 'react';
import './App.css';
import { Content } from './components/content'; // importing component "Content"
import { Footer } from './components/footer'; // importing component "Footer"
import { Header } from './components/header'; // importing component "Header"
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing bootstrap
import { Navbar, Nav } from 'react-bootstrap'; // Importing navbar/nav

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// changed function "App" to a class
// inherits from react.component
// Main component "App"
class App extends React.Component {

  // Render passes in template
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          {/*  Switching in and out components  */}
          {/* Home page, "exact" used to only see home, otherwise would show Content component for all URL's */}
          <Route path='/' component ={Content} exact></Route> 
          <Route path='/read' component={Header}></Route>
          <Route path='/create' component={Footer}></Route>
        </Switch>






        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
      </div> 
      </Router>
    ); // end of return
  } // end of render 
} // end of class

export default App;
