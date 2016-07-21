import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import FriendListApp from './FriendListApp';
import reducer from '../reducers';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

import { addFriend, deleteFriend, starFriend } from '../actions/FriendsActions';

store.dispatch(addFriend('Barack Obama'));

store.dispatch(deleteFriend(1));

store.dispatch(starFriend(4));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <FriendListApp />
      </Provider>
    );
  }
}
