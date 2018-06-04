import React from 'react'

const Profile =(props)=>{
    return(
        <div className="container">
        {this.props.user.length>0 &&
            <div>{this.props.user.nom} {this.props.user.prenom }</div>}
        </div>

    )
}
export default Profile;