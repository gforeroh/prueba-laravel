// Dependencias
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Componentes
// import ComingSoon from './ComingSoon';
import Content from './Global/Content';


class App extends Component {
  // static propTypes = {
  //   children: PropTypes.object.isRequired
  // };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Content body={children} />
      </div>
    );
  }
}

export default App;
