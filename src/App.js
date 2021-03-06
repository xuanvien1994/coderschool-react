import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './image/images.jpg'
import TweetBox from './TweetBox';
import Tweet from './Tweet';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import './App.css';

TimeAgo.locale(en)

class App extends Component {
  constructor(props){
    super(props);

     var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://my.api.mockaroo.com/tweetsapischema.json?key=04840390", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);

    this.state = {
      tweets: [ {}]
    }
     this.state.tweets = (response);
  }

  handleTweet (tweetText){
    var options = {    weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" ,second: "2-digit"}; 
    var id = (this.state.tweets == "") ? 0 : this.state.tweets[this.state.tweets.length-1].id+ 1 ;
    let tweetObj = {
      id: id,
      text: tweetText,
      liked: false,
      timestamp:  new Date(Date.now()).toLocaleDateString("en-US",options)
    }

    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }
  handleLike(tweet) {
    let tweets = this.state.tweets.map( (t) => {
      if (t.text === tweet.text && t.id === tweet.id) {
        return {
          id: t.id,
          text: t.text,
          liked: !t.liked,
          timestamp: t.timestamp
        } 
      }
      return t;
    });

    this.setState({
      tweets
    })
    
  }
   handleDeleteTweet(tweet) {
    var tweets = this.state.tweets.filter(function(t)
    {
        return t.id !==tweet.id;
    });
    this.setState({
      tweets
    })
  }
  handleRepostTweet(tweet) {
    var options = {    weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",second: "2-digit"  }; 
    var id = this.state.tweets[this.state.tweets.length-1].id + 1;
    var RepostTweet =[ {
        id: id,
        text: tweet.text,
        liked: false,
        timestamp: new Date(Date.now()).toLocaleDateString("en-US", options)}]
    this.setState({
      tweets: this.state.tweets.concat(RepostTweet)
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="ProfileCanopy-header">
          <div class="AppContainer">
          <div class="ProfileCanopy-avatar">
            <div class="ProfileAvatar">
              <a class="ProfileAvatar-container">
                <img class="ProfileAvatar-image" src={avatar} alt="AVATAR"/>
              </a>
            </div>
          </div>
        </div>

        <div class="ProfileCanopy-navBar">
          <div class="AppContainer">
            <div class="Grid Grid--withGutter">
              <div class="Grid-cell u-lg-size1of4">
                <div class="ProfileCanopy-card"></div>
              </div>
              <div class="Grid-cell u-lg-size3of4">
                <div class="ProfileCanopy-nav">
                  <div class="ProfileNav">
                    <ul class="ProfileNav-list">
                      <li class="ProfileNav-item.is-active, .ProfileNav-item.is-active:hover">
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        <div class="tweet">
          <div class="Grid Grid--withGutter">
            <div class="Grid-cell u-size1of3 u-lg-size1of4"></div>
            <div class="Grid-cell u-lg-size2of3">
              <div class="stream-container"></div>
              { this.state.tweets.map( (tweet) => (
                  <Tweet  key={tweet.id}
                          tweet={tweet} 
                          handleLike={this.handleLike.bind(this)} 
                          handleDeleteTweet={this.handleDeleteTweet.bind(this)}
                          handleRepost={this.handleRepostTweet.bind(this)}
                  />
                ))}
                  <br />
            </div>
          </div>
        </div>
        <div  class="Grid Grid--withGutter">
        <div class="Grid-cell u-size1of3 u-lg-size1of4"></div>
         <div class="Grid-cell u-lg-size2of3">
          <TweetBox  class="input" type="text" prompt="What's your status?" onTweet={this.handleTweet.bind(this)}/>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
