import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';

 class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      onClick: async () => {
        const response = await fetch('http://localhost:3000/assistant',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
    "command": "toggle the main light",
    "converse": false,
    "user": "Angus"
})
  })
        console.log(response);
        return response;
      }
    }
  }
  render() {
      return (
    <div className="App">
      <Button onClick={this.state.onClick}> Toggle Lights </Button>
    </div>
  );
  }
}

export default App;
