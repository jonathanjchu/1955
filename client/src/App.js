import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import PeopleList from './PeopleList';
import Person from './Person';
import AddPerson from './AddPerson';
import DeletePerson from './DeletePerson';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>1955</h1>
          <BrowserRouter>
            <Route exact path="/" component={PeopleList} />
            <Switch>
              <Route exact path="/new" component={AddPerson} />
              <Route path="/delete/:name" component={DeletePerson} />
              <Route path="/:name" render={(props) => <Person name={props.match.params.name} /> } />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;