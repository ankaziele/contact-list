import React, {Component} from 'react'

const initialState = {
    contactName: '',
    contactSurname: '',
    contactNumber: '',
    errors: {}
}

class ContactForm extends Component{

    state = initialState

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.contactName === ''){
            this.setState(
                (prevState) => ({
                    errors: {
                        ...prevState.errors,
                        contactName: new Error('Please add name')
                    }
                })
            )
        }

        if (this.state.contactSurname === ''){
            this.setState(
                (prevState) => ({
                    errors: {
                        ...prevState.errors,
                        contactSurname: new Error('Please add Surname')
                    }
                })
            )
        }

        if (this.state.contactNumber === ''){
            this.setState(
                (prevState) => ({
                    errors: {
                        ...prevState.errors,
                        contactNumber: new Error('Please add phonenumber')
                    }
                })
            )
        }

        if(
            this.state.errors.contactName === '' ||
            this.state.errors.contactSurname === '' ||
            this.state.contactNumber === ''
        ){
            return;
        }
        
        this.props.addContactFunction(
            this.state.contactName,
            this.state.contactSurname,
            this.state.contactNumber
            );
        this.setState(initialState)
      }

      handleNameChange = event => {
          this.setState({
              contactName: event.target.value})
      }

      handleSurnameChange = event => {
        this.setState({
            contactSurname: event.target.value})
    }

    handleNumberChange = event => {
        this.setState({
            contactNumber: event.target.value})
    }

      
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            {
              this.state.error && <p>{this.state.error.message}</p>
            }
            <input placeholder="Name" value={this.state.contactName} onChange={this.handleNameChange} />
            {this.state.errors.contactName && this.state.errors.contactName.message}
         
            <input placeholder="Surname" value={this.state.contactSurname} onChange={this.handleSurnameChange} />
            {this.state.errors.contactSurname && this.state.errors.contactSurname.message}
      
            <input placeholder="Phone number" value={this.state.contactNumber} onChange={this.handleNumberChange} />
            {this.state.errors.contactNumber && this.state.errors.contactNumber.message}
    
            <button className="btn btn-primary sm-1">Add Contact</button>
          </form>
        )
    }
}

export default ContactForm