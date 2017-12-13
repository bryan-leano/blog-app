import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from '../actions/blogs';

const Blog = ({ id, name, complete, dispatch }) => (
    <li
        onClick={ () => dispatch(toggleBlog(id)) }
        style={ complete ? { textDecoration: 'line-through' } : {}}
    >
        {name}
    </li>
)

export default connect()(Blog);