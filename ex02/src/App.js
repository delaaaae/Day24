import React, {Component} from 'react';

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  };

  getMyStorage = () => {
    document.cookie = "Year=2021";
    var myCookieData = document.cookie;
    localStorage.getItem('Paragon', 'yes, but Arena first');
    var myLocalStorageData = localStorage.getItem;
    sessionStorage.getItem('frontend', 'React');
    var mySessionStorage = sessionStorage.getItem;
  };
  
  render() {
    return (
      <div className="App">
          <button onClick={() => this.setMyStorage()}>Click</button>
          <button onClick={() => this.getMyStorage()}>Click</button>
      </div>
    );
  }
}

export default App;