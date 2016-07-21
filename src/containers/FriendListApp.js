import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendListAdd from '../components/FriendListAdd'
import FriendListItem from '../components/FriendListItem'
import { starFriend, deleteFriend, addFriend } from '../actions/FriendsActions'

let App = ({ friendCount, friends, toggleStar, deleteFriend, addFriend}) => {
  let containerStyle = {
        width: 200
      },
      headerStyle = {
        background: '#7575ff',
        color: 'white',
        marginBottom: 0,
        padding: 10,
        fontSize: 20
      },
      listStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0
      };
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Hello, { friendCount }!</h1>
      <FriendListAdd onSubmit={addFriend} />
      <ul style={listStyle}>
        {friends.map(friend =>
          <FriendListItem onClick={toggleStar} onClickCross={deleteFriend} friend={friend} key={friend.id} />
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    friendCount: state.friendlist.friends.length,
    friends: state.friendlist.friends.map(id => state.friendlist.friendsById[id])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleStar: (id) => {
      dispatch(starFriend(id))
    },
    deleteFriend: (id) => {
      dispatch(deleteFriend(id))
    },
    addFriend: (name) => {
      dispatch(addFriend(name))
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App
