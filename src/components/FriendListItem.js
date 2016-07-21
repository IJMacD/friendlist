import React, { Component } from 'react';

let FriendListItem = ({ friend }) => {
  let style = {
    fontWeight: friend.starred ? 'bold' : '',
    color: 'rgba(0,0,0,1)',
    textDecoration: friend.name.length > 14 ? "line-through" : "underline",
    padding: 10,
    border: '1px solid #CCC'
  };
  return (
    <li style={style}>{ friend.name }</li>
  )
};

export default FriendListItem;
