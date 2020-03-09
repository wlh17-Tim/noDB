import React, {Component} from 'react';
import Header from './Components/Header'
import Input from './Components/Input'
import Output from './Components/Output'
import Display from './Components/Display'
import Saved from './Components/Saved'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      

    }
  }

  componentDidMount(){
    axios.get('/api/monsterPic')
      .then(res => {
        this.setState({
          monsterPic: res.data
        })
      })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Input />
        <Saved />
        <footer>Footery Type Things</footer>
      </div>
    );
  }
}


export default App
