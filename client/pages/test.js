import React, { Component } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
 

export default class MeetingFormModal extends Component {

    constructor(props) {
      super(props)
  
      this.state = {
        firstName: '',
        lastName: '',
        email: '',
        location: '',
        firstNameError: false,
        lastNameError: false,
        emailError: false,
        locationError: false,
        formError: false,
        errorMessage: 'Please complete all required fields.',
        complete: false,
        modalOpen: false
      }
  
      this.submitMeetingForm = this.submitMeetingForm.bind(this);
      this.successCallback = this.successCallback.bind(this);
    }
  
  
    successCallback() {
      this.setState({
        complete: true
      })
      setTimeout( () => {this.setState({modalOpen: false})}, 5000);
      this.props.hideLoading();
    }
  
    handleClose = () => this.setState({ modalOpen: false })
    handleOpen = () => this.setState({ modalOpen: true })
  
    submitMeetingForm() {
  
      let error = false;
  
      if (this.state.studentFirstName === '') {
        this.setState({firstNameError: true})
        error = true
      } else {
        this.setState({firstNameError: false})
        error = false
      }
      if (this.state.studentLastName === '') {
        this.setState({lastNameError: true})
        error = true
      } else {
        this.setState({lastNameError: false})
        error = false
      }
      if (this.state.email === '') {
        this.setState({emailError: true})
        error = true
      } else {
        this.setState({emailError: false})
        error = false
      }
      if (this.state.location === '') {
        this.setState({locationError: true})
        error = true
      } else {
        this.setState({locationError: false})
        error = false
      }
  
      if (error) {
        this.setState({formError: true})
        return
      } else {
        this.setState({formError: false})
      }
    }
  
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    render() {
      return(
        <Modal
          trigger={<Button onClick={this.handleOpen} basic color='blue'>Login here!</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          closeIcon={true}
        >
          <Modal.Header>Login to your user</Modal.Header>
          <Modal.Content>
            {!this.state.complete ?
            <Modal.Description>
              <Form error={this.state.formError}>
                <Form.Group widths='equal'>
                  <Form.Field>
                    <Form.Input 
                        required={true} 
                        onChange={(e) => this.setState({firstName: e.target.value})} 
                        label='First Name' 
                        placeholder="First Name..." 
                        error={this.state.firstNameError}                        
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input required={true} onChange={(e) => this.setState({lastName: e.target.value})} label='Last Name' placeholder="Last Name..." error={this.state.lastNameError}/>
                  </Form.Field>
                </Form.Group>
                <Form.Field >
                  <Form.Input required={true} onChange={(e) => this.setState({email: e.target.value})} label='Email' placeholder="Email..." error={this.state.emailError}/>
                </Form.Field>
                <Form.Field>
                  <Form.Input required={true} onChange={(e) => this.setState({location: e.target.value})} label='Location' placeholder='City, State/Province, Country...' error={this.state.locationError}/>
                </Form.Field>
              </Form>
            </Modal.Description>
            : 
              <div className='modal-complete'>
                <Image src='/images/check.png' />
                <p>Thanks for scheduling a meeting, {this.capitalize(this.state.name)}. We've received your information and we'll be in touch shortly.</p>
              </div>
            }
          </Modal.Content>
          {!this.state.complete ?
          <Modal.Actions>
            <Button color='red' onClick={this.handleClose}>Close</Button>
            <Button 
                positive icon='checkmark' 
                labelPosition='right' 
                content="Submit" 
                onClick={this.submitMeetingForm} 
                disabled={!this.state.email
                    || !this.state.firstName
                    || !this.state.lastName
                    || !this.state.confirmPassord
                    || !this.state.location
                    || !this.state.zipCode
                }   
                />
          </Modal.Actions>
          : null }
        </Modal>
      )
    }
  }