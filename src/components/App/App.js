import React, { Component } from 'react'
import './App.css'

const contacts = [
    {
        id: 1,
        name: 'John',
        number: '+48 601 000 909'
},
    {
        id: 2,
        name: 'Lisa',
        number: '+48 601 901 909'
},
    {
        id: 3,
        name: 'Theo',
        number: '+48 601 680 909'
},
    {
        id: 4,
        name: 'Viggo',
        number: '+48 691 680 939' 
}

]
class App extends Component{

    
    render() {

        return (
            <ul>
                {

                    contacts.map(contact =>(
                   <li key={contact.id}>{contact.name} {contact.surname}</li>
                    ) )

                }
           </ul>
        )
    }
}
export default App