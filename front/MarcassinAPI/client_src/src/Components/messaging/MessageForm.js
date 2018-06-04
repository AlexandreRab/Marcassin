import React, {Component} from 'react'

class MessageForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
        }
    }

    getInitialState() {
        return {text: ''};
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e)
        var message = {
            user: this.props.user,
            text: this.refs.msg
        }
        console.log(message)
        /*this.props.onMessageSubmit(message);*/
        this.setState({text: ''});
    }

    changeHandler(e) {
        console.log(e)
       // this.setState({text: e.target.value});
    }

    render() {
        console.log(this.props.user)
        return (
            <div className='input-box'>
                <form onSubmit={this.handleSubmit} className='input-form'>
                    <textarea ref='msg' name='msg' placeholder='Ecrire un nouveau message' className='input-box materialize-textarea' onChange={()=>this.changeHandler}/>
                    <button className='btn waves-effect blue lighten-1 waves-blue right input-btn' type="submit" >
                        Envoyer &nbsp; <i className="far fa-comment-dots"></i>
                    </button>
                </form>
            </div>
        );
    }
}
export default MessageForm;
