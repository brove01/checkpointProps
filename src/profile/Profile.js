import React from "react";
import './Profile.css'
import HandleName from "./hanleName";
//import { PropTypes } from "prop-types";
const Profile=({fullName,bio,profession})=>{
    
    return(
    
        <div>
            <h1>{fullName[0]}<span> {fullName[1]}</span></h1>
            <h2><span>Bio :</span>{bio}</h2>
            <h2><span>profession :</span>{profession}</h2>
            <HandleName name={fullName}/>
            <GetImage><img src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/334255952_745659916957111_8572337909735698315_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HPSxVtKiH6EAX_m7qx4&_nc_ht=scontent.ftun16-1.fna&oh=00_AfACAMjeVXxGZFK4jMbNJKOzCY-haYwNYGkM0ncutBNy2A&oe=6440E1D8"alt=""></img></GetImage>
        </div>
        
    );
}

//Profile.propTypes={
  //  fullName: PropTypes.arrayOf(PropTypes.string).isRequired,

//}
const GetImage=props=>{
    return <div>{props.children}</div>
}

export default Profile;