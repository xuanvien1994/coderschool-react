import React, { Component } from 'react';
import LastSeen from './LastSeen'
import TimeAgo from 'react-timeago'
import en from 'javascript-time-ago/locale/en'
import defaultFormatter from './defaultFormatter'
import dateParser from './dateParser'

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
        <div class="box">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src={ require('./image/images.jpg') } alt="Image"/>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@VienTran</small> <small>{tweet.timestamp}</small>
                  <br/>
                  {tweet.text}
                </p>
              </div>
              <nav class="level is-mobile">
                <div class="level-left">
                  <a class="level-item" onClick={() => this.props.handleDeleteTweet(tweet)} aria-label="reply">
                    <span class="icon is-small">
                      <i class="fa fa-trash" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item"  onClick={() => this.props.handleRepost(tweet)}  aria-label="retweet">
                    <span class="icon is-small">
                      <i class="fa fa-retweet" aria-hidden="true"></i>
                    </span>
                  </a>
                  <a class="level-item" onClick={() => this.props.handleLike(tweet)} aria-label="like">
                    <span class="icon is-small">
                      <i className={tweet.liked ? "fa fa-heart" : "fa fa-heart-o"} aria-hidden="true"></i>
                    </span>
                  </a>
                </div>
                <br /> 
                <br />
                <TimeAgo date={tweet.timestamp} />
              </nav>
            </div>
          </article>
        </div>
        )
    }
}
export default Tweet;