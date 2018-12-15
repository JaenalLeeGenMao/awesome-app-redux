import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    console.log(this.props);
    return <div> Home yours trully</div>;
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Home);
