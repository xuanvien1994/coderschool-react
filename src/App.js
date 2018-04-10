import React, { Component } from 'react';
import logo from './logo.svg';
import TweetBox from './TweetBox';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweets: ['Hello world', "Coderschool is good"]
    }
  }
  handleTweet (tweet){
    this.setState({
      tweets: this.state.tweets.concat(tweet)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <TweetBox prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
        </div>  
        <div>
          {this.state.tweets.map( tweet =>
            <p>{tweet}</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
