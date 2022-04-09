import React from 'react';
import Login from '../containers/Login'
import Navigationbar from './Navbar';
import '../../src/App.css'
import Products from '../containers/Products';
import Cart from '../containers/Cart';
function App({auth}) {
  return (
    <div className="App">
      <Navigationbar />
      {!auth.token && <Login />}
      {/* {auth.token && <TodoApp />} */}
      <div className='buy-area'>
        <div className='row'>
          <div className='col-1'>
            <Products />
          </div>
          <div className='col-2'>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
