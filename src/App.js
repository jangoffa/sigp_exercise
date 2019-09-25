import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import SearchPage from '../src/components/SearchPage';
import DetailPage from '../src/components/DetailPage';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Movie management application</p>
      </header>
      <body className="App-body">
      <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Movie search</Link>
              </li>
              <li>
                <Link to="/detail">Movie detail</Link>
              </li>
              <li>
                <Link to="/contact">My favourite movies</Link>
              </li>
            </ul>
            <Route exact path="/" component={SearchPage}></Route>
            <Route path="/detail" component={DetailPage}></Route>
            {/* <Route exact path="/" component={SearchPage}></Route> */}
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;
