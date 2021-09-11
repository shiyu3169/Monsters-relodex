import { Component } from "react"
import "./App.css"

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
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    )
  }
}

export default App
