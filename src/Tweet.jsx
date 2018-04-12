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
            <div class="content">
                <div class="item-header">
                    <a  href="" class="account-group">
                        <img class="avatar js-action-profile-avatar" src={ require('./image/images.jpg') } />
                        <span class="FullNameGroup"></span>
                    </a>
                    <small class="time"></small>
                </div>
                <div class="js-tweet-text-container">
                    <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text">{tweet.text}</p>
                </div>
                <div class="stream-item-footer">
                    
                </div>

                <a href='#' onClick={() => this.props.handleLike(tweet)}> {tweet.liked ? 'Unlike' : 'Like'}  Post</a>
                <a href='#' onClick={() => this.props.handleDeleteTweet(tweet)}>Delete</a>
                <a href='#' onClick={() => this.props.handleRepost(tweet)}>Repost</a>
                <br /> 
                <br />
                <TimeAgo date={tweet.timestamp} />
            </div>
        )
    }
}
export default Tweet;