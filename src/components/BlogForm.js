import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../actions/blogs';
import { incId } from '../actions/nextId';

class BlogForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { id, dispatch } = this.props;
    const blog = { id, name };
    dispatch(addBlog(blog))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => this.setState({ name: e.target.value })

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);