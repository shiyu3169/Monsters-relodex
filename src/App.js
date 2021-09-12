import { Component } from "react"
import "./App.css"
import { CardList } from "./components/card-list/card-list.jsx"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
    }
  }

  onClick = () => {
    this.setState({ string: this.state.string + 1 })
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await res.json()
      this.setState({ monsters: data })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    )
  }
}

export default App
