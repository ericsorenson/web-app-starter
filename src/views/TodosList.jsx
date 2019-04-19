import React from 'react';

export class TodosList extends React.Component {
  render() {
    return (
      <ul className="todo-list">
        {/* These are here just to show the structure of the list items */}
        {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
        <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" defaultChecked />
            <label>Taste JavaScript</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Create a TodoMVC template" />
        </li>
        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Rule the web" />
        </li>
      </ul>
    );
  }
}
