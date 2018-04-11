import React, { Component } from 'react';
import LastSeen from './LastSeen'
import en from 'javascript-time-ago/locale/en'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(frenchStrings)
class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div>
                <br />
                {tweet.text}
                <br/>
                <a href='#' onClick={() => this.props.handleLike(tweet)}> {tweet.liked ? 'Unlike' : 'Like'}  Post</a>
                <a href='#' onClick={() => this.props.handleDeleteTweet(tweet)}>Delete</a>
                <a href='#' onClick={() => this.props.handleRepost(tweet)}>Repost</a>
                <br />
                <br />
                <TimeAgo date={tweet.timestamp} formatter={formatter} />

            </div>
        )
    }
}
export default Tweet;