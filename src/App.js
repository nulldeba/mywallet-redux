import React, { Component } from 'react';
import './App.css';
import MyWallet from './component/balance/MyWallet';
import store from './ConfigureStore';
import {Provider} from 'react-redux';
import {Container} from 'reactstrap';

class App extends Component {



  render() {
    return (
      <Provider store={store}>      
      <Container>
        <div className="App">
          <h3>With Redux state management</h3>
          My money is my money, None of your money.
        <MyWallet />
        </div>
      </Container>
      </Provider>
    );
  }
}

export default App;
