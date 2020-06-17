
import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import { addMember } from "../actions/smurfActions";
import { render } from "react-dom";
import axios from "axios"


function SmurfList(props) {

//     useEffect(() => {
//         props.addMember();
//   }, []);


    const [formData, setFormData] = useState({});

    const handleChanges = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    const onSubmit = evt => {
        evt.preventDefault();
        props.addMember(formData);
    }




    return (
        <React.Fragment>
            <form onSubmit={onSubmit}>
                <input
                    name= "name"
                    type="text"
                    value={formData.name}
                    onChange={handleChanges}
                    placeholder="Add new smurf"
                />
                <input
                    name= "age"
                    type="number"
                    value={formData.age}
                    onChange={handleChanges}
                    placeholder="Add age"
                />
                <input
                    name="height"
                    type="number"
                    value={formData.height}
                    onChange={handleChanges}
                    placeholder="Add height"
                />
                <button>
                    Add smurf
                </button>
            </form>
            <div className="smurf-list" >
                {props.member.map((member, index) => (
                     <h4 key={index}>
                        {member.name} is <pre></pre> 
                        {member.age} Years old <pre></pre> 
                        {member.height} cm tall
                    </h4>
                ))}
            </div>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    console.log("state ", state);
    return {
        member: state.smurfReducer.member
    };
};

export default connect(
    mapStateToProps,
    { addMember }
)(SmurfList);