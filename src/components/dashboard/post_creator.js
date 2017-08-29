import React from 'react';
import { connect } from 'react-redux';
import Datetime from 'react-datetime';
import { Button } from 'react-bootstrap';
import { createPost, createScheduledPost } from '../../actions/dashboard_actions';
import './react-datetime.css';

class PostCreator extends React.Component {
  constructor(props) {
    super(props);

    this.updateRegularMessage = this.updateRegularMessage.bind(this);
    this.updateScheduledMessage = this.updateScheduledMessage.bind(this);
    this.updateDatetime = this.updateDatetime.bind(this);

    this.isValidDate = this.isValidDate.bind(this)

    this.submitPost = this.submitPost.bind(this);
    this.submitScheduledPost = this.submitScheduledPost.bind(this);

    this.state = {
      regularMessage: '',
      scheduledMessage: '',
      scheduledPublishTime: null
    }
  }

  updateRegularMessage (e) {
    e.preventDefault();
    this.setState({regularMessage: e.target.value});
  }

  updateScheduledMessage (e) {
    e.preventDefault();
    this.setState({scheduledMessage: e.target.value});
  }

  updateDatetime(input) {
    this.setState({scheduledPublishTime: input._d});
  }

  isValidDate(current, selected) {
    const yesterday = Datetime.moment().subtract(1,'day');
    return current.isAfter(yesterday);
  }

  submitPost (e) {
    e.preventDefault();
    this.props.createPost(this.state.regularMessage, this.props.page);
  }

  submitScheduledPost(e) {
    e.preventDefault();
    const { scheduledMessage, scheduledPublishTime } = this.state;
    if (this.state.scheduledPublishTime.getTime() > (new Date()).getTime() ) {
      this.props.createScheduledPost(scheduledMessage, scheduledPublishTime, this.props.page)
    } else {
      alert('please select a future time');
    }
  }

  render () {
    console.log(this.state.scheduledMessage,this.state.scheduledPublishTime);
    return(
      <div>
        <form>
          <h3>Create post</h3>
          <input type='text' onChange={this.updateRegularMessage} value={this.state.regularMessage}></input>
          <Button disabled={this.state.regularMessage === '' ? true : false} onClick={this.submitPost}>Create Post</Button>
      </form>
        <form>
          <h3>Schedule a future post</h3>
          <input type='text' onChange={this.updateScheduledMessage} value={this.state.scheduledMessage}></input>
          <Datetime onChange={this.updateDatetime} isValidDate={this.isValidDate}/>
          <Button disabled={this.state.scheduledMessage === '' || !this.state.scheduledPublishTime ? true : false} onClick={this.submitScheduledPost}>Schedule Post</Button>
      </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  page: store.dashboard.page
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (message, page) => dispatch(createPost(message, page)),
  createScheduledPost: (message, datetime, page) => dispatch(createScheduledPost(message, datetime, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCreator);
