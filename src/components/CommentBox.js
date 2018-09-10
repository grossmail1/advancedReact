import React, { Component } from 'react'
import { connect } from 'react-redux'

import { saveComment, fetchComments } from 'actions'

class CommentBox extends Component {
  state = {
    comment: ''
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    // save comment
    this.props.saveComment(this.state.comment)

    // clear state
    this.setState({ comment: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>FetchComments</button>
      </div>
    )
  }
}

export default connect(null, { saveComment, fetchComments })(CommentBox)
