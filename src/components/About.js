import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";


class About extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <ProfileClass name="BVKlr" address="Bangalore"/>
        )
    }
}
export default About;