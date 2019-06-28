import React, { Component } from 'react';
import './App.css';
import {
  Link
} from 'react-router-dom';
import 'react-router';

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

class PersonListItem extends Component {

  viewPerson(name) {
    this.props.history.push(`/${name}`);
    console.log(name);
  }

  render() {
    let name = this.props.info.first_name + " " + this.props.info.last_name;

    return (
      <div className="row">
        <div className="col date">
          {months[this.props.info.month]} {this.props.info.day}
        </div>
        <div className="col name">
          {name}
        </div>
        <div className="col action">
          <Link to={"/" + name}>View</Link> |
          <Link to={"/delete/" + name}>Delete</Link>
        </div>
      </div>
    );
  }
}

export default PersonListItem;


{/* <button onClick={this.viewPerson.bind(this, `${this.props.info.first_name} ${this.props.info.last_name}`)}>View</button> */ }


// <div className="row">
// <div className="col date">
//   {months[this.props.info.month]} {this.props.info.day}
// </div>
// <div className="col name">
//   {name}
// </div>
// <div></div>
// </div>