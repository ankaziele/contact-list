import React, { Component } from 'react'
import './App.css'


class App extends Component {

    state = {
        contacts: [
            {
                id: 1,
                name: 'John',
                surname: 'Smith',
                number: '+48 601 000 909',
                favourite: false,
            },
            {
                id: 2,
                name: 'Lisa',
                surname: 'Monroe',
                number: '+48 601 901 909',
                favourite: false,
            },
            {
                id: 3,
                name: 'Theo',
                surname: 'Taco',
                number: '+48 601 680 909',
                favourite: true,
            },
            {
                id: 4,
                name: 'Viggo',
                surname: 'Lodoe',
                number: '+48 691 680 939',
                favourite: true
            }
        ]

    }

    makeContactImportant = contactId => {
        this.setState({
            contacts: this.state.contacts.map(
                contact => contactId !== contact.id ? contact : {
                    ...contact,
                    favourite: true
                    
                }
            )
        })
    }

    makeContactUnimportant = contactId => {
        this.setState({
            contacts: this.state.contacts.map(
                contact => contactId !== contact.id ? contact : {
                    ...contact,
                    favourite: false
                    
                }
            )
        })
    }

    
    
    render() {

                return(
            <div>
            <h1>Contact List</h1>
            <ul>
                {
                    this.state.contacts.map(contact => (
                        <li key={contact.id}> 
                        <p>
                            {contact.favourite ? 
                            <span onClick={() => this.makeContactUnimportant(contact.id)}>&#9733;</span> :
                            <span onClick={() => this.makeContactImportant(contact.id)}>&#9734;</span>}
                            {contact.name} {contact.surname}
                        </p>
                        <p>{contact.number}</p>
                        </li>
                    ))

                }
            </ul>
           </div >
        )
    }
}
export default App