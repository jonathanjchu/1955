import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


const months = [
  null,
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null
    }
  }

  
  componentDidMount = () => {
    console.log(this.props.name);
    axios.get("http://localhost:8000/api/" + this.props.name)
      .then(res => {
        console.log(res.data.person);
        this.setState({
          person: res.data.person
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    let name = '', dob = '';

    if (this.state.person) {
      name = this.state.person.first_name + " " + this.state.person.last_name;
      dob = `${months[this.state.person.month]} ${this.state.person.day}, ${this.state.person.year}`;
    }

    return (
      <div className="container">
        <h3>Name: {name}</h3>
        <h3>Date of Birth: {dob}</h3>
        <Link to="/">Go Back</Link>
      </div>
    );
  }
}

export default Person;