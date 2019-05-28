import React, { Component } from "react"
import { FormStyled, Label, Input, Submit, TextArea } from "./style"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends Component {
  state = {
    userName: "",
    userEmail: "",
    userMessage: "",
    status: undefined,
  }

  handleInput = e => {
    if (this.state.status !== "success") {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "contact-form": "contact", ...this.state }),
    })
      .then(() =>
        this.setState({
          status: "success",
        })
      )
      .catch(err => {
        this.setState({
          status: "error",
        })

        console.error(err)
      })

    e.preventDefault()
  }

  render() {
    const {
      handleInput,
      state: { userName, userEmail, userMessage, status },
    } = this

    const getSubmitBtn = () => {
      if (status === undefined) {
        return <Submit type="submit" value="Send ✉️" />
      } else if (status === "error") {
        return (
          <Submit type="submit" value="Try again ❌" borderColor="#ff5252" />
        )
      } else if (status === "success") {
        return (
          <Submit
            type="submit"
            value="Sent 📮"
            borderColor="#ffcc33"
            disabled
          />
        )
      }
    }

    return (
      <FormStyled
        onSubmit={this.handleSubmit}
        method="post"
        name="c-form"
        data-netlify="true"
      >
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
        <input type="hidden" name="contact-form" value="contact-form" />
        {getSubmitBtn()}
      </FormStyled>
    )
  }
}

export default Form
