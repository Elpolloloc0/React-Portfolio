import React from 'react';
import { AreaContainer, AreaTitle } from '../layout/styles/BodyStyle';
import { 
  ContactForm, 
  ContactInput, 
  ContactTextArea, 
  InputContainer,
  ContactLabel,
  ContactButton,
  ContactButtonContainer
} from './styles/ContactStyle';

const Contact = () => {
  return (
    <AreaContainer>
      <AreaTitle>Contact</AreaTitle>
      <ContactForm>
        <InputContainer>
          <ContactLabel>Your Name</ContactLabel>
          <ContactInput placeholder="Name" />
        </InputContainer>
        <InputContainer>
          <ContactLabel>Contact Email</ContactLabel>
          <ContactInput placeholder="Email" />
        </InputContainer>
        <InputContainer>
          <ContactLabel>Reason for Contact</ContactLabel>
          <ContactInput placeholder="Contact Reason" />
        </InputContainer>
        <InputContainer>
          <ContactLabel>Contact Description</ContactLabel>
          <ContactTextArea placeholder="Information" />
        </InputContainer>
        <ContactButtonContainer>
          <ContactButton>Submit</ContactButton>
        </ContactButtonContainer>
      </ContactForm>    
    </AreaContainer>
  )
}

export default Contact;
