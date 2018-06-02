import React , { Component } from 'react';

class ProfilPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            valueInput : '',
        }
        
    }

    change =(e) =>{
        this.setState({valueInput : e.target.value})
    }
    
    render(){
        const { valueInput } = this.state
        
        return(
            <div className="row pageWrapper">
                <div className="col s3 grey lighten-1">

                <input type='text' name='text' onChange={this.change}  />

                <div >{valueInput && !valueInput.length >0 && <div> Ce champ est requis </div>}</div>
                </div>
                <button className={valueInput.length >0  ? 'btn waves-effect waves-green' : 'btn waves-effect waves-green disabled'} >test </button>
                <button className={` btn waves-effect waves-green ${!valueInput.length>0 && "disabled"} `} >test </button>
            <div className="col s9 grey lighten-1">
             
            </div>
      
          </div>
        )
    }
}

export default ProfilPage;