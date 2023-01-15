import { Component } from 'react';
import Deskripsi from './component/dumb/Deskripsi';

class Apps extends Component{

  constructor(props){
    super(props) //dibuat biar bisa menggunakan props
    this.state = {
      name : '',
    }//inisialisasi state'
  }
  
  //fungsi
  setName = (e) => {
    let name = e.target.value
    this.setState({
      name : name
    })
  }

  render(){
    return(
        <div>
          <h1>{this.state.name}</h1>
          <input onChange={this.setName}></input>
          <Deskripsi name = {this.state.name}></Deskripsi>
        </div>
    );
  }
}


export default Apps;
//export default App;
//export default deskripsi

