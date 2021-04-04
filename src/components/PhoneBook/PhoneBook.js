import React, { Component } from 'react';
import style from './PhoneBook.module.css';
import IconButton from '../../templates/IconButton/IconButton';

class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = event => {
    this.setState({ name: event.target.value });
  };
  handlePhoneChange = event => {
    this.setState({ number: event.target.value });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({ name: '', number: '' });
    this.props.checkExistingContact(this.state.name);
    this.props.onSubmit(this.state.name, this.state.number);
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className={style.form}>
        <h1 className={style.title}>Phone Book</h1>
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Adelaida"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <h3>Number</h3>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handlePhoneChange}
          placeholder="+7894992910"
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
        <IconButton type="submit">Add contact</IconButton>
      </form>
    );
  }
}
export default PhoneBook;
