import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this); //to bind method to "this" component
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  // handleChange(e) { need to bind in this case
  handleChange = (e) => { //bind it to the component automatically
    this.setState({searchField:e.target.value}, 
      () => { /*callback function here for onChange */ })
  }

  render() {
    const { monsters, searchField } = this.state;
    /* same as
      const monsters = this.state.monsters;
      const searchField = this.state.searchField; 
    */
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
      <h1></h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
      ></SearchBox>
      <CardList monsters={filteredMonsters}>
      </CardList>
    </div>
    )
  }
}
export default App;
