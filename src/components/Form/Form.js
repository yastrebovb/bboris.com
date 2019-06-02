import React, { Component } from "react"
import { FormStyled, Label, Input, Submit, TextArea } from "./style"

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
    const form = e.target
    const formData = new FormData(form)

    formData.append("_subject", "Contact form submission ✨")

    fetch(
      `https://script.google.com/macros/s/AKfycbyx0ndOpmt3uDGceThSfkSJ9oXeaX2hpZuzpK7kkQ/exec`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: this.formDataToJson(formData),
      }
    )
      .catch(err => {
        this.setState({
          status: "error",
        })

        console.error(err)
      })
      .then(response => {
        console.log(response)

        this.setState({
          status: "success",
        })
      })

    e.preventDefault()
  }

  formDataToJson = formData => {
    const entries = formData.entries()
    const dataObj = Array.from(entries).reduce((data, [key, value]) => {
      data[key] = value
      if (key === "email") {
        data._replyTo = value
      }
      return data
    }, {})

    return JSON.stringify(dataObj)
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
      <FormStyled name="contact" method="POST" onSubmit={this.handleSubmit}>
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
        {getSubmitBtn()}
      </FormStyled>
    )
  }
}

export default Form
