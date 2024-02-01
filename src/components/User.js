const User=(props)=>{
    return(
        <div className="user-card">
            {/* accessing the arguments from About.js */}
            <h2>Name:{props.name}</h2>
            <h2>Location: Bengalore/{props.location}</h2>
            <h2>Contact:pmg@gmail.com</h2>

        </div>
    )
}

export default User;