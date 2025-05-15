import React from 'react';
import './App.css';
import FastFood from './FastFood';
import Restuarant from './Restuarant';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Restuarant id={1} /> */}
        <h1>Rate Your Most Favorite And Hated Fast Food</h1>
        <table>
          <tbody>
            <tr>
            <td>
              <FastFood id={1}/>
            </td>
            <td>
              <FastFood id={2}/>
            </td>
            <td>
              <FastFood id={3}/>
            </td>
          </tr>
          <tr>
            <td>
              <FastFood id={4}/>
            </td>
            <td>
              <FastFood id={5}/>
            </td>
            <td>
              <FastFood id={6}/>
            </td>
          </tr>
          </tbody>
         
        </table>
      </header>
    </div>
  );
}

export default App;
