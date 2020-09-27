import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RevenueGraph from '../Components/RevenueGraph';
import { loadRevenueData } from '../actions';

// This never gets called
const Container = (userId) => {
  console.log("CONTAINER")
  // return dispatch(loadRevenueData(userId))
  // return state.revenue;
}

Container.propTypes = {
  userId: PropTypes.number.isRequired
}

export default Container;
