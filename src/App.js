import './App.css';
import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import PhoneBook from './components/PhoneBook/PhoneBook';
import { v4 as uuidv4 } from 'uuid';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addUser = (name, number) => {
    const newUser = {
      name: name,
      id: uuidv4(),
      number: number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newUser, ...contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  checkExistingContact = newName => {
    this.state.contacts.map(contact => {
      if (contact.name === newName) {
        alert('This name already exist');
      }
    });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
    return (
      <Layout>
        <PhoneBook
          onSubmit={this.addUser}
          checkExistingContact={this.checkExistingContact}
        />
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Layout>
    );
  }
}

export default App;
