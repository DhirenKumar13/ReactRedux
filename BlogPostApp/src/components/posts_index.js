import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../actions';
import { Link } from 'react-router-dom';

import _ from 'lodash';

class PostsIndex extends Component {

    constructor(props){
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        this.props.fetchBlogs();
    }

    renderList() {
        return _.map(this.props.posts , post => {
            return(
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            )
        })
    }
  render() {
    return (
      <div>
          <div className="text-xs-right" >
              <Link className="btn btn-success" to="/posts/new">
                ADD NEW BLOG
              </Link>
          </div>
          <h3> List of Blogs </h3>
          <ul className="list-group">
            {this.renderList()}
          </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps, { fetchBlogs } )(PostsIndex);