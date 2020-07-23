import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

import { CardList } from "./components/card-list/card-list.components";
import SearchBox from './components/search-box/search-box.component'
import Head from './components/header/head.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      name: 'arnold'
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => this.setState({ searchField: e.target.value }, () => console.log(this.state))

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return (
      <div className="App">
        <Head />
        <SearchBox placeholder='search monster' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />

      </div>

    );
  }
}

export default App;
