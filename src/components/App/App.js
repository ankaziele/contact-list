import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import './App.css'


class App extends Component {

    state = {
        contacts: JSON.parse(localStorage.getItem('tasks') || '[]'),
        previousState: null

    }

    toggleContactFavourite= contactId => {
        this.setState({
            contacts: this.state.contacts.map(
                contact => contactId !== contact.id ? contact : {
                    ...contact,
                    favourite: !contact.favourite
                    
                }
            )
        })
    }

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(
                contact => contactId !== contact.id

            )
        })
    }

    addContact = name => {
        this.setState({
          previousState: this.state,
          contacts: this.state.contacts.concat({
            id: Date.now(),
            name: name,
            favourite: false
          })
        })
      }

      componentDidUpdate() {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      }


    
    
    render() {

                return(
            <div>
            <h1>Contact List</h1>
            <ContactForm addContactFunction={this.addContact} />
            <ul>
                {
                    this.state.contacts.map(contact => (
                        <li key={contact.id}> 
                        <p>
                            {contact.favourite ? 
                            <span onClick={() => this.toggleContactFavourite(contact.id)}>&#9733;</span> :
                            <span onClick={() => this.toggleContactFavourite(contact.id)}>&#9734;</span>}
                            {contact.name} {contact.surname}
                        </p>
                        <p>{contact.number}</p>
                        <button onClick={() => this.removeContact(contact.id)}>Remove Contact</button>
                        </li>
                    ))

                }
            </ul>
           </div >
        )
    }
}
export default App