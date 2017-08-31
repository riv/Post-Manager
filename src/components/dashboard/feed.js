import React from 'react';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import './feed.css'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }

  renderPost (post) {
    const readifyDate = (dateStr) => ((new Date(dateStr)).toLocaleString());
    return(
      <div key={post.id} className="postBox">
        <Media>
         <Media.Left>
           <p>Post Id: {post.id}</p>
           <p>Updated Time: {readifyDate(post.updated_time)}</p>
           <p>Create Time: {readifyDate(post.created_time)}</p>
           <p>Unique Page Views: {post.insights ? post.insights.post_impressions_unique : 'less than 30'}</p>
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
      <div className='feedContainer'>
        {this.props.posts.map(post => this.renderPost(post))}
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
