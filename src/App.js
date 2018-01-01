import React, { Component } from 'react';
import './App.css';

function randomPos() {
  let rand = Math.random() * 100;
  while (rand > 90 || rand < 10) {
    rand = Math.random() * 100;
  }

  return `${Math.floor(rand)}%`;
}


class App extends Component {
  state = {
    text: []
  }

  render() {
    return (
      <div className="App">
        <input
          ref={input => (this.textInput = input)}
          type="text"
          onKeyDown={evt => this.onKeyDown(evt)}
        />
        {this.state.text.map((t, i) => (
          <span
            className="chars"
            key={i}
            style={{
              top: randomPos(),
              left: randomPos(),
              visibility: this.state.visibility
            }}
          >
            {t}
          </span>
        ))}
      </div>
    )
  }

  componentDidMount() {
    this.focusTextInput()
  }
  componentDidUpdate() {
    this.focusTextInput()
  }

  focusTextInput() {
    this.textInput.focus()
  }

  onKeyDown(event) {
    this.setState({ text: this.state.text.concat(event.key) })
    console.log(this.state.text)
    setTimeout(() => {
      const newText = [].concat(this.state.text)
      newText.shift()
      this.setState({ text: newText })
    }, 5000)
  }
}

export default App;
