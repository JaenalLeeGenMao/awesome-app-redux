import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// class Home extends Component {
//   render() {
//     return <div> Home yours trully</div>;
//   }
// }
let multiplication = 1;

const Home = props => {
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      if (count !== 0 && count % 10 === 0) {
        multiplication += 1;
      }
    },
    [count]
  );

  return (
    <div onClick={() => setCount(count + multiplication)}>
      {" "}
      Home yours trully, clicked {count} times
    </div>
  );
};

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Home);
