import React from 'react';
// import PropTypes from 'prop-types';
import Card from './Card';
import Graph from './Graph';

const RevenueGraph = (props) => {
  return (
    <div>
      <h1>Hello, {props.userId}</h1>
      < Card title="Revenue by Sales Rep" />
      < Graph />
    </div>
  );
}

// RevenueGraph.propTypes = {
//   userId: PropTypes.number.isRequired
// }

export default RevenueGraph;