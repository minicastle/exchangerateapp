import React from "react";
import {store} from "./store";
import axios from "axios";
window.store = store;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count : store.getState().reducer.count,
      exchange:[],
      nowdate:""
    }
  }
  render(){
    return (
      <div>
        <button type="button" onClick = {function(){
          axios.get("/server/exchange_rate/nowdate").then(res => this.setState({exchange:res.data}));
        }.bind(this)}>reload</button>
        {this.state.nowdate}
        <button type="button" onClick = {function(){
          axios.get("/server/nowdate").then(res => this.setState({nowdate:res.data}));
        }.bind(this)}>nowdate</button>
      </div>
    );
  }
}

export default App;