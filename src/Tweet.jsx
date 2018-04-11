import React, { Component } from 'react';
import { TimeAgo }  from 'javascript-time-ago'
import LastSeen from './LastSeen'
import en from 'javascript-time-ago/locale/en'


class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div>
                {tweet.text}
                <br/>
                <a href='#' onClick={() => this.props.handleLike(tweet)}> {tweet.liked ? 'Unlike' : 'Like'}  Post</a>
                <a href='#' onClick={() => this.props.handleDeleteTweet(tweet)}>Delete</a>
                <a href='#' onClick={() => this.props.handleRepost(tweet)}>Repost</a>
                <LastSeen />
            </div>
        )
    }
}
export default Tweet;