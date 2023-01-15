import React from 'react';

class Input extends React.Component{

    constructor (props){
        super(props)
        console.log(props)
    } //fungsi yang di run saat object dibentuk

    render(){
        return(
            <div>
                <input
                name="nama"
                value={this.props.name}
                ></input>
            </div>
        );
    }
}

export default Input;