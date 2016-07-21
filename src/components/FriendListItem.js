import React, { Component } from 'react';

let FriendListItem = ({ friend, onClick, onClickCross }) => {
  let style = {
    fontWeight: friend.starred ? 'bold' : '',
    color: 'rgba(0,0,0,1)',
    padding: 10,
    border: '1px solid #CCC',
    cursor: 'pointer'
  },
  crossStyle = {
    float: 'right',
    textDecoration: 'none'
  };
  return (
    <li style={style} onClick={()=>{onClick(friend.id)}}>
      { friend.name }
      <a style={crossStyle} href="#" onClick={()=>{onClickCross(friend.id)}}>x</a>
    </li>
  )
};

export default FriendListItem;
