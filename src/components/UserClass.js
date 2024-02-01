import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name,location}= this.props
        return(
            <div className="user-card">
                {/* accessing the arguments from About.js . Here you should use this.props */}
            <h2>Name:{name}</h2>
            <h2>Location:Bengalore-{location}</h2>
            <h2>Contact:pmg@gmail.com</h2>

        </div>
        )
    }
};
export default UserClass; 