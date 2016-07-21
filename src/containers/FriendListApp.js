import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendListItem from '../components/FriendListItem'
import starFriend from '../actions/FriendsActions'

let App = ({ friendCount, friends, toggleStar}) => {
  let containerStyle = {
        width: 200
      },
      headerStyle = {
        background: '#8080ff',
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
      <ul style={listStyle}>
        {friends.map(friend =>
          <FriendListItem onClick={toggleStar} friend={friend} key={friend.id} />
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
    toggleStar: () => {
      dispatch(starFriend(ownProps.id))
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App
