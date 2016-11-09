import React from 'react';
import FeedItem from './feeditem';
import StatusUpdateEntry from './statusupdateentry';
import {getFeedData} from '../server';

export default class Feed extends React.Component {

  componentDidMount() {
    getFeedData(this.props.user, (feedData) => {
      this.setState(feedData);
    });
  }

  constructor(props) {
  super(props);
  this.state = {
  // Empty feed.
  contents: []
  };
}
  render() {
    return (
      <div>
        <StatusUpdateEntry />
        {this.state.contents.map((feedItem) => {
          return (
            <FeedItem key={feedItem._id} data={feedItem} />
          );
        })}
      </div>
    )
  }
}
