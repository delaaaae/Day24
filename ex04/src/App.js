import React, {Component} from 'react';


class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  };

  getLocalStorage = () => {
    var myLocalStorageData = localStorage.getItem('Arena');
  }


  render() {
    return (
    <div className="App">
      <button onClick={() => this.setLocalStorage()}>Cookie</button>
      <button onClick={() => this.getLocalStorage()}>Cookie2</button>
    </div>
    )  
}
}

export default App;