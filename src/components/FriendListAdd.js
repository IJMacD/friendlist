import React, { Component } from 'react';

export default class FriendListItem extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  render () {
    let style = {
        width: '100%',
        boxSizing: 'border-box',
        fontSize: "1.2em",
        padding: 4
      };
    return (
      <input
        type="text"
        style={style}
        placeholder="Enter a name"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)} />
    )
  }

  handleChange (e) {
    const name = e.target.value;
    this.setState({name});
  }

  handleKeyDown (e) {
    const name = e.target.value.trim();
    if(e.which == 13){
      this.props.onSubmit(name);
      this.setState({name: ''});
    }
  }
};


export default FriendListItem;
