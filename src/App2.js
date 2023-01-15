import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Deskripsi from './component/dumb/Deskripsi';
import Input from './component/screen/Input';

class Apps extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
        <div>
          <Deskripsi name="azka"></Deskripsi>
          <Deskripsi name="nisrina"></Deskripsi>
          <Deskripsi></Deskripsi>
          <Input
            name = "alifah"
          />
          <Input
            name = "manusia"
          />
        </div>
    );
  }
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Reactjs
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const deskripsi = () => {
  return <p>hello</p>
}


export default Apps;
//export default App;
//export default deskripsi

