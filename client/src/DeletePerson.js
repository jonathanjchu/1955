import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class DeletePerson extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        status: "Deleting...",
        isDeleted: false
    }
  }

  componentDidMount = () => {
    axios.get("http://localhost:8000/api/remove/" + this.props.match.params.name)
      .then(res => {
        this.setState({
            status: this.props.match.params.name = " deleted",
            isDeleted: true
        })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            {
                this.state.isDeleted ?
                <>
                    {this.state.status}<br />
                    <Link to="/">Go Back</Link>
                </> :
                <>Deleting...</>
            }
        </header>
      </div>
    );
  }
}

export default DeletePerson;