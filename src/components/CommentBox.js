import React, { Component } from 'react'
import {connect} from 'react-redux'

import {saveComment} from 'actions'

class CommentBox extends Component {
  state = {
    comment: ''
  }

  handleChange = (event) => {
    this.setState({comment: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // save comment
    this.props.saveComment(this.state.comment)

    // clear state
    this.setState({comment: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default connect(null, {saveComment})(CommentBox)
