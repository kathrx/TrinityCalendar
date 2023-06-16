import React, {Component} from "react"

export class App extends Component {
  state = {
    name: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => this.setState({ name: data.name }))
  }

  render() {
    return (
      <h1>Hello {this.state.name}!</h1>
    )
  }
}