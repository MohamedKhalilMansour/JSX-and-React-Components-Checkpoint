import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Adress from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <h1 style={{color:"darkgrey"}}>User Profile</h1>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}
ReactDOM.render(App(),document.getElementById("root"));
export default App;
