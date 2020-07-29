import React from 'react';
import { Button } from '@material-ui/core';
import { Statement1, Statement2, Form, Alert } from './style.js';
import firebase from './config/fbConfig.js';
import logo from './logo.png';
import './style.css';
import image from './dummy.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  checkSubmit(e) {
    if (e && e.keyCode === 13) {
      this.handleClick(e);
    }
  }
  handleChange(e) {
    this.setState({ value: e.target.value });

    document.getElementById('Alert').innerHTML = '';
  }
  handleClick(e) {
    if (
      this.state.value.includes('@') &&
      this.state.value[0] !== '@' &&
      this.state.value[this.state.value.length - 1] !== '@'
    ) {
      firebase.db
        .collection('emails')
        .doc(this.state.value)
        .set({ email: this.state.value });
      document.getElementById('Form').style.display = 'none';
      document.getElementById('submitted').innerHTML = 'Thank you!';
    } else {
      document.getElementById('Alert').innerHTML =
        'Wrong Email Form, Can you recheck?';
    }
  }

  render() {
    return (
      <div className="App" onKeyDown={this.checkSubmit}>
        <img className="logo" src={logo} alt="Fanchise"></img>
        <div className="button">
          <Button variant="outlined" href="mailto:krmishra@stanford.edu" size="large">
            CONTACT
          </Button>
        </div>
        <div className="clearfloat"></div>
        <div className="Wrap1">
          <Statement1>We Are Launching Soon</Statement1>
          <Statement2>
            Stay in touch and be the first to hear about the future of
            interactive entertainment !
          </Statement2>
          <Form>
            <div id="Form">
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Email Address"
                value={this.state.value}
              ></input>
              <button onClick={this.handleClick}>Keep Me Updated</button>
            </div>
            <div id="submitted"></div>
          </Form>

          <Alert>
            <div id="Alert"></div>
          </Alert>
        </div>
        <div className="mockUp">
          <img src={image} alt="" style={{ width: '100%' }}></img>
        </div>
      </div>
    );
  }
}

export default App;
