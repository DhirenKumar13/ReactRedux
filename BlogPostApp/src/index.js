import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Promise from 'redux-promise';

import PostsIndex from './components/posts_index';
import NewPost from './components/post_new';
import DetailedPost from './components/post_details';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="container">
        <h3 className="text-xs-center">Redux Blog Single Page Application</h3>
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/post/:id" component={DetailedPost} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
