import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PersonListItem from './PersonListItem';
import {
  Link
} from 'react-router-dom';

class PeopleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount = () => {
    axios.get("http://localhost:8000/api/people")
      .then(res => {
        this.setState({ people: res.data.people });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div>
              <div className="row mb-5">
                <Link to="/new">
                  <button>Add Person</button>
                </Link>
              </div>
              <div className="col date head">Date</div>
              <div className="col name head">Name</div>
              <div className="col action head">Actions</div>
            </div>
            {
              this.state.people.map((p, i) =>
                <PersonListItem info={p} key={i} />
              )
            }
          </div>
        </header>
      </div>
    );
  }
}

export default PeopleList;