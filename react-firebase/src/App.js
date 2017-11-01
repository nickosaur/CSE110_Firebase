import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from './components/TeamMembers.js'
import firebase from 'firebase'
import DisplayData from './components/DisplayData.js';


class App extends Component {

  constructor(props){
    super(props);
    var config = {
      apiKey: "AIzaSyBbKu3sOqNEOU6Qh-3rsK8RvnoCFfVcpuY",
      authDomain: "cse110-firebase.firebaseapp.com",
      databaseURL: "https://cse110-firebase.firebaseio.com",
      projectId: "cse110-firebase",
      storageBucket: "cse110-firebase.appspot.com",
      messagingSenderId: "777274311553"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
          <TeamMembers db={firebase}/>
          <DisplayData db={firebase}/>
      </div>
    );
  }
}

export default App;
