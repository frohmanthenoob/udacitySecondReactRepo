import React, { Component } from 'react';
import { flex, postClass } from '../utils/css'
import { PostAPI } from '../api/api'
import { connect } from 'react-redux'

class Post extends Component {
  state = {
      Posts:[],
  }
  componentDidMount(){
      (new PostAPI()).getAllPosts()
      .then(data=>{
          this.setState({Posts:data})
      })
  }
  render() {
      return (
          <div>
              {this.state.Posts.map((post)=>
                  (
                      <div key={post.id} className={`${postClass} `}>
                          <div>{post.id}</div>
                          <div>{post.timestamp}</div>
                          <div>{post.title}</div>
                          <div>{post.body}</div>
                          <div>{post.author}</div>
                          <div>{post.category}</div>
                          <div>{post.voteScore}</div>
                          <div>{post.deleted}</div>
                          <div>{post.commentCount}</div>
                      </div>
                  )
              )}
          </div>
      );
  }
}

export default connect()(Post);
