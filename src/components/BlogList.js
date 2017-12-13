import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const filtered = (blogs, activeFilter) => {
  switch (activeFilter) {
    case 'Active':
      return blogs.filter(t => !t.complete)
    case 'Completed':
      return blogs.filter(t => t.complete)
    default:
      return blogs
  }
}

const BlogList = ({ blogs, filter}) => (
  <div>
  <ul>
    { filtered(blogs, filter).map(t => <li key={t.id} {...t}>{t.name}</li>) }
  </ul>
  </div>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, filter: state.filter }
}

export default connect(mapStateToProps)(BlogList);