import React, { Component } from 'react';
import './App.css';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robotList: [],
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(result => this.setState({ robotList: result }))
  }

  render() {
    const { robotList, searchfield } = this.state;
    const filtering = robotList.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    });

    return !robotList.length ? 
            <h1 className='tc'>LOADING</h1> :
            (
              <div className='tc'>
                <h1 className='f1'>Robofriend</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                  <CardList robots={filtering} />
                </Scroll>
              </div>
            )
  }

}

export default App