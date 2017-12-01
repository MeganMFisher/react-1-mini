import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updateState(key, value) {
    this.setState({
      [key]: value
    })
  }

  addFriend() {
    const {friends, picture, name} = this.state;
    this.setState({
      friends: [...friends, { picture, name }],
      picture: '',
      name: ''
    })
  }


  render() {

    const friends = this.state.friends.map((e, i) => {
      return (
        <div key={i}>
          <img width='100px' src={e.picture} alt={e.name}/>
          <span>{e.name}</span>
        </div>
      )
    })

    return (
      <div>
        <span>Picture:</span>
        <input onChange={ e => this.updateState('picture', e.target.value) } value={ this.state.picture }/>

        <span>Name:</span>
        <input onChange={ e => this.updateState('name', e.target.value) } value={ this.state.name }/>

        <button onClick={ e => this.addFriend() }>Add Friend</button>

        {friends}

      </div>
    );
  }
}

export default App;