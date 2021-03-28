import React from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTE } from 'app-constants/route';

class ErrorHandler extends React.Component{
  componentDidCatch() {
    this.props.history.push(ROUTE.ERROR);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
  };
}

export default withRouter(ErrorHandler);