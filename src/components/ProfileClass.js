import React from "react";

class ProfileClass extends React.Component{
    // Call first then render
    constructor(props){
        super(props);
        this.state = {
            userDetails:null
        }
        console.log(("ctr called"))
    }


    //api call
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/bharathv005");
        const resdata = await data.json();
        this.setState({userDetails:resdata});
        console.log("About componentDidMount is called");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }
    
    render(){
        console.log("render called");
        const {name, avatar_url} = this.state.userDetails || {};
        return this.state.userDetails===null? <h1>Loading...</h1>:(
            <div style={{ border: "2px solid black" , padding:"10px", margin:"10px"}}>
                <h1>Class Based Component</h1>
                <h3>Name: {name}</h3>
                <h3>GitHub Profile: {name}</h3>
                <img src={avatar_url} alt="profile pic" width="100px"/>
            </div>
        )
    }
};
export default ProfileClass;