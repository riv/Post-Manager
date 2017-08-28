import React from 'react';
import { connect } from 'react-redux';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }

  renderPost (post) {
    return(
      <li key={post.id}>
        <ul>
          <li>Id: {post.id}</li>
          <li>Message: {post.message}</li>
          <li>Create Time: {post.created_time}</li>
          <li>Updated Time: {post.updated_time}</li>
          <li>Unique Page Views: {post.insights ? post.insights.post_impressions_unique : 'less than 30'}</li>
        </ul>
      </li>
    );
  }

  render () {
    return(
      <div>
        <h2>Feed</h2>
        <ul>
          {this.props.posts.map(post => this.renderPost(post))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  posts: store.dashboard.feed
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
