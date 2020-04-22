import React, { useState } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

const App = () => {

  // state = {
  //   userName: 'max'
  // }

  // setName = (e) => {
  //   this.setState({userName: e.target.value})
  // }

  const [user, setUserName] = useState({name: 'max'})
  console.log('user:  ',user)
  const setUser = (event) => {
    setUserName({name : event.target.value})
  }
  return (
    <div className="App">
      <UserInput
        onChangeInput={setUser}
        oldValue={user.name}/>
      <UserOutput
        userName={user.name}/>
      <UserOutput
        userName={'vipul'}/>
    </div>
    )
}

export default App;
