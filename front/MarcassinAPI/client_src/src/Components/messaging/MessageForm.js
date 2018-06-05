import React, {Component} from 'react'
import moment from 'moment'

class MessageForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:''
        }
    }

    handleSubmit = (e) => { 
        e.preventDefault();
        var message = {
            idUtilisateur: this.props.user.idUtilisateur,
            contenu: this.refs.msg.value,
            dateAjout: moment().toISOString(),
            idRoom: this.props.idRoom
        }

        this.props.onMessageSubmit(message);
        this.refs.msg.value =''
        
    }

    onChange=(e)=>{
        this.setState({value:e.target.value})
    }
    render() {
        
        return (
            <div className='input-box'>
                <form onSubmit={this.handleSubmit} className='input-form'>
                    <textarea 
                        ref='msg' 
                        name='msg'
                        placeholder='Ecrire un nouveau message' 
                        className='input-box materialize-textarea' 
                        onChange={this.onChange}
                    />

                    <button className={`btn waves-effect blue lighten-1 waves-blue right input-btn ${this.state.value.length > 0?'':'disabled'}`} type="submit" >
                        Envoyer &nbsp; <i className="far fa-comment-dots"></i>
                    </button>
                </form>
            </div>
        );
    }
}
export default MessageForm;
