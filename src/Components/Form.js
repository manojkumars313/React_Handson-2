import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.displayData = [];

    this.state = {
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    };

    this.appendData = this.appendData.bind(this);
    this.setName = this.setName.bind(this);
    this.setDepartment = this.setDepartment.bind(this);
    this.setRating = this.setRating.bind(this);
  }

  appendData() {
    this.displayData.push(
      <div className="display-data">
        Name: {this.state.name} | Department: {this.state.department} | Rating:{" "}
        {this.state.rating}
      </div>
    );

    this.setState({
      showData: this.displayData,
      name: "",
      department: "",
      rating: "",
    });
  }

  setName(events) {
    let getName = events.target.value;
    this.setState({
      name: getName,
    });
  }

  setDepartment(events) {
    let getDepartment = events.target.value;
    this.setState({
      department: getDepartment,
    });
  }

  setRating(events) {
    let getRating = events.target.value;
    this.setState({
      rating: getRating,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted");
  };

  render() {
    return (
      <>
        <div id="container">
          <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>

          <form className="form" onSubmit={this.handleSubmit}>
            <label>
              Name :
              <input
                type="text"
                value={this.state.name}
                onChange={this.setName}
              ></input>
            </label>

            <label>
              Department :
              <input
                type="text"
                value={this.state.department}
                onChange={this.setDepartment}
              />
            </label>
            <label>
              Rating :
              <input
                type="text"
                value={this.state.rating}
                onChange={this.setRating}
              />
            </label>

            <input type="submit" value="Submit" onClick={this.appendData} />
          </form>

          <div id="display-form-data">{this.displayData}</div>
        </div>
      </>
    );
  }
}

export default Form;
