import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    };
  }

  addNewPerson = (e) => {
    e.preventDefault();
    let name = e.target.fname.value + " " + e.target.lname.value;
    console.log(name);
    axios.get("http://localhost:8000/api/new/" + name)
      .then(res => {
        if (res.data.status === "ok") {
          this.setState({
            message: name + " successfully added!"
          })
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container" onSubmit={this.addNewPerson}>
        {
          this.state.message != null ?
            <>
              <h1>{this.state.message}</h1>
              <Link to="/">Go Back</Link>
            </>
            :



            <form className="form">
              <div className="form-group">
                <label htmlFor="fname">First Name: </label>
                <input type="text" name="fname" id="fname" />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name: </label>
                <input type="text" name="lname" id="lname" />
              </div>
              <input type="submit" value="Add Person" />
              <Link to="/"><button>Cancel</button></Link>
            </form>
        }
      </div>
    );
  }
}

export default AddPerson;