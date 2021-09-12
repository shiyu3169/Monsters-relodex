import { Component } from "react"
import "./App.css"
import { CardList } from "./components/card-list/card-list.jsx"

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: "",
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
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    )
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monster"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App
