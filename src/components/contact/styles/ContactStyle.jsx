import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: fit-content;
  margin-top: -2rem;
  margin-left: 5rem;
  margin-right: 5rem;
  background-color: #1f2833;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  input::placeholder textarea::placeholder { 
    opacity: 0.5;
    color: #C5c6c7;
  }
`;

export const ContactLabel = styled.span`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ContactInput = styled.input`
  height: 3rem;
  text-indent: 1rem;
  border: 1px solid #45a29e;
  border-radius: 0.15rem;
  background-color:  #0b0c10;
  color: white;

`;

export const ContactTextArea = styled.textarea`
  height: 10rem;
  text-indent: 1rem;
  padding-top: 1rem;
  border: 1px solid #45a29e;
  border-radius: 0.15rem;
  background-color:  #0b0c10;
  color: white;
  font-family: 'Barlow';
  resize: none;
  overflow: auto;
`;

export const ContactButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContactButton = styled.button`
  height: 2rem;
  width: 10rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #45a29e;
  background-color: #45a29e;
  border-radius: 0.1rem;
  color: white;
`;