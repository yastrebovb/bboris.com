import React, { Component } from "react"
import styled from "styled-components"

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 64rem;
  margin: 2rem auto;
  font-size: 1.7rem;
`

const Label = styled.label`
  font-size: 1.7rem;
  font-weight: 500;
`

const Input = styled.input`
  margin: 2rem 0;
  padding: 0.5rem 0.25rem;
  border: none;
  border-bottom: 1.5px solid #000;
  transition: all 0.1s linear;

  &:active,
  &:focus {
    border-color: rgb(255, 204, 51);
    outline: 0;
  }
`

const Submit = styled(Input)`
  width: 20rem;
  margin: 4rem auto;
  padding: 1.2rem 1rem;
  border: 1.5px solid #000;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
  }
`

const TextArea = styled.textarea`
  margin: 2rem 0;
  padding: 0.5rem 0.25rem;
  border: none;
  border-bottom: 1.5px solid #000;

  &:active,
  &:focus {
    border-color: rgba(255, 204, 51, 0.6);
    outline: 0;
  }
`

class Form extends Component {
  state = {
    userName: "",
    userEmail: "",
    userMessage: "",
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const {
      handleInput,
      state: { userName, userEmail, userMessage },
    } = this

    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <Label htmlFor="userName">Name</Label>
        <Input
          type="text"
          placeholder="John Doe"
          id="userName"
          name="userName"
          value={userName}
          onChange={this.handleInput}
          required
        />
        <Label htmlFor="userEmail">Email</Label>
        <Input
          type="email"
          placeholder="example@yourdomain.com"
          id="userEmail"
          name="userEmail"
          value={userEmail}
          onChange={handleInput}
          required
        />
        <Label htmlFor="userMessage">Message</Label>
        <TextArea
          placeholder="Hi there...  "
          id="userMessage"
          name="userMessage"
          rows="3"
          value={userMessage}
          onChange={handleInput}
        />
        <Submit type="submit" value="Send" />
      </FormStyled>
    )
  }
}

export default Form
