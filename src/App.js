import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom'
import Comment from './components/Comment'
import CreateComment from './components/CreateComment'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import { flex } from './utils/css'
import NoMatch from './components/NoMatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className={`${flex.flexContainer}`}>
          <div className={`${flex.flexItem1} list`}>
            <ul>
              <li className={ `listItem` } ><Link to='/'>Home</Link></li>
              <li className={ `listItem` } ><Link to='/comment'>Comment</Link></li>
              <li className={ `listItem` } ><Link to='/post'>Posts</Link></li>
            </ul>
          </div>
          <div className={`${flex.flexItem5} ${flex.flexContainer} ${flex.flexDirectionColumn}`}>
            <div className={`${flex.flexItem1}`}>
              <p className="App-intro">
                Post as much as you like.
              </p>
            </div>
            <div className={`${flex.flexItem1}`}>
              <Switch>
                <Route path='/' exact render={()=>(
                  <div> Go ahead and use. </div>
                )}></Route>
                <Route path='/comment' component={Comment}></Route>
                <Route path='/:category/post' component={Post}></Route>
                <Route path='/:category/:post/createcomment' component={CreateComment}></Route>
                <Route path='/:category/createpost' component={CreatePost}></Route>
                <Route component={NoMatch}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
