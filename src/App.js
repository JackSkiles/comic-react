import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comic from './components/Comic'
import Search from './components/Search'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Comic of the day</h1>
          </div>
          <div>
          </div>
        </header>
          <Search />
          <Comic />
      </div>
    );
  }
}

export default App;
