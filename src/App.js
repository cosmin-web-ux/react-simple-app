import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'aosic', name: 'Cosmin', age: 23},
      {id: 'q34tdg', name: 'Dan', age: 33},
      {id: 'dfg45', name: 'Flaviu', age: 13}
    ],
    otherstate: 'some other value',
    showPersons: false
  }
  
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 24},
  //       {name: 'Dana', age: 34},
  //       {name: 'Flavia', age: 14}
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}></Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max')}
            changed={this.nameChangedHandler}>Hobbies: racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}></Person> */}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button> */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}       
      </div>
    );
  }  
}

export default App;
