import React from 'react';
import './App.scss';

import AppHeader from './AppHeader.js';
import ContactsList from './ContactsList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ["Adam", "Brian", "Eugeniusz", "Remigiusz", "Jerzy", "Celina", "Olivia", "Eliza", "Tomasz", "Michał", "Gabriel", "Rafał", "Oliwier", "Roman", "Zygmunt", "Piotr", "Wojciech", "Jonasz", "Zbigniew", "Adrian", "Radosław", "Mirosław"],
      filteredUsers: ["Adam", "Brian", "Eugeniusz", "Remigiusz", "Jerzy", "Celina", "Olivia", "Eliza", "Tomasz", "Michał", "Gabriel", "Rafał", "Oliwier", "Roman", "Zygmunt", "Piotr", "Wojciech", "Jonasz", "Zbigniew", "Adrian", "Radosław", "Mirosław"],
      filter: ""
    };
    this.getFilteredUsers = (list, str) => {
      return new Promise(resolve => {
        const time = (Math.random() + 1) * 250;
        setTimeout(() => {
          const filteredUsers = list.filter(user => user.toLowerCase().includes(str.toLowerCase()));
          resolve(filteredUsers);
        }, time);
         });
    }
    this.inputText = (event) => {
      var filtered = null;
      var timeoutHandler = null;
      if (!this.state.locked) {
        var self = this;
        var val = event.target.value;
        self.setState((state) => ({
          filter: val
        }));
        filtered = this.getFilteredUsers(this.state.users, val);
        clearTimeout(timeoutHandler);
        timeoutHandler = setTimeout(() => {
          console.log('wyświetlanie');
          filtered.then(val => {
            self.setState((state) => ({
              filteredUsers: val
            }));
          });
        }, 300);
      }
    }
    this.sort = (reverse) => {
      switch (reverse) {
        case "0":
          this.setState((state) => ({
            users: state.users.sort(),
            filteredUsers: state.filteredUsers.sort()
          }));
          break;
        case "1":
          this.setState((state) => ({
            users: state.users.sort().reverse(),
            filteredUsers: state.filteredUsers.sort().reverse()
          }));
          break;
      }
    }
  }
  render() {
    return (
      <div>
        <AppHeader sortingFunction={this.sort} />
        <input type="text" onInput={this.inputText} />
        <ContactsList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default App;
