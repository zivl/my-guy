import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    text: ''
  }
  
  render() {
    return (
      <div className="App">
        <input ref={input => this.textInput = input} type="text" onKeyDown={evt => this.onKeyDown(evt)} />
        <span className="chars">{this.state.text}</span>
      </div>
    );
  }

  componentDidMount() {
    this.focusTextInput();
  }
  componentDidUpdate() {
    this.focusTextInput();
  }

  focusTextInput() {
    this.textInput.focus();
  }

  onKeyDown(event) {
    this.setState({ text: event.key })
  }
}

export default App;
