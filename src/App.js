import React, { Fragment, Component } from 'react';
import Promotions from './components/promotions';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div id='canvas'>
          <div>
            <h1 className='logo'>
              <a href='index.html'>listed _21</a>
            </h1>
          </div>
          <Promotions />
        </div>
      </Fragment>
    );
  }
}

export default App;
