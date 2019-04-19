import React from 'react';

export class TodoInput extends React.Component {
  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    );
  }
}
