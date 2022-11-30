import React from "react";
class MyComponent extends React.Component {
  state = {
    fisrtName: '',
    lastName: ''
  };
  handleFisrtName = (event) => {
    this.setState({
      fisrtName: event.target.value
    })
  }
  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleClick = () => {
    alert(`Xin chào ${this.state.lastName} ${this.state.fisrtName}`);
  }
  render() {
    return (
      <>
        <form>
          <label>First name:</label><br />
          <input type="text"
            value={this.state.fisrtName}
            onChange={(event) => this.handleFisrtName(event)} />
          <br />
          <label>Last name:</label><br />
          <input type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleLastName(event)} /><br /><br />
          <input type="submit" value="Submit" onClick={() => this.handleClick()} />
        </form>
        <div>{this.state.lastName} {this.state.fisrtName}</div>
      </>
    )
  }
}

export default MyComponent;