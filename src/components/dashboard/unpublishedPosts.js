import React from 'react';
import { connect } from 'react-redux';

class UnpublishedPosts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }

  renderPost (post) {
    const scheduledPublishTime = new Date(post.scheduled_publish_time * 1000)
    return(
      <li key={post.id}>
        <ul>
          <li>Id: {post.id}</li>
          <li>Message: {post.message}</li>
          <li>Create Time: {post.created_time}</li>
          <li>Scheduled Publish Time: {scheduledPublishTime.toLocaleString()}</li>
        </ul>
      </li>
    );
  }

  render () {
    return(
      <div>
        <h2>Unpublished Posts</h2>
        <ul>
          {this.props.posts.map(post => this.renderPost(post))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  posts: store.dashboard.unpublishedPosts
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnpublishedPosts);
