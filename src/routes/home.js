import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import actions from "../actions/home";
import "./home.css";

class Home extends Component {
  handleClick = e => {
    const { onHandleAddUser, onHandleDeleteUser } = this.props;

    const type = e.currentTarget.id;
    let payload;
    switch (type) {
      case "add":
        const name = document.getElementById("inputName").value;
        const hobby = document.getElementById("inputHobby").value;

        payload = {
          name,
          hobby
        };

        onHandleAddUser(payload);
        break;
      case "remove":
        payload = { name: e.currentTarget.name };
        onHandleDeleteUser(payload);
        break;
      default:
        break;
    }
  };

  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <div className="table_wrapper">
          <table>
            <tr>
              <th>Name</th>
              <th>Hobbies</th>
            </tr>
            {data.map(({ name, hobby }) => (
              <tr>
                <td>{name}</td>
                <td>{hobby}</td>
                <td>
                  <button id="remove" name={name} onClick={this.handleClick}>
                    REMOVE
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
        <div className="input_wrapper">
          <input
            id="inputName"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            id="inputHobby"
            type="text"
            name="hobby"
            placeholder="Enter your hobbies"
          />
          <button id="add" onClick={this.handleClick}>
            ADD
          </button>
        </div>
        {data.length === 0 && (
          <div className="empty_wrapper">
            Aww.. looks like fields are empty<p>Jot down, something!</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.home };
};

const mapDispatchToProps = (dispatch, getState) => ({
  onHandleAddUser: payload => dispatch(actions.addUser(payload)),
  onHandleDeleteUser: payload => dispatch(actions.deleteUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
