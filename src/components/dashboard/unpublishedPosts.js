import React from 'react';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';

class UnpublishedPosts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }

  renderPost (post) {
    const scheduledPublishTime = new Date(post.scheduled_publish_time * 1000);
    const readifyDate = (dateStr) => ((new Date(dateStr)).toLocaleString());
    return(
      <div key={post.id} className="postBox">
        <Media>
         <Media.Left>
           <p>Post Id: {post.id}</p>
           <p>Create Time: {readifyDate(post.created_time)}</p>
           <p>Scheduled Publish Time: {scheduledPublishTime.toLocaleString()}</p>
          </Media.Left>
          <Media.Body>
            <Media.Heading>{post.message}</Media.Heading>
          </Media.Body>
        </Media>
      </div>
    );
  }

  render () {
    return(
      <div>
        {this.props.posts.map(post => this.renderPost(post))}
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
