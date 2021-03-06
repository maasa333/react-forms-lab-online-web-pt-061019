import React from "react"

class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = this.state
    if (username && password) {
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => this.handleInputChange(e)}value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => this.handleInputChange(e)} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm