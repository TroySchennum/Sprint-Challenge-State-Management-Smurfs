
import { connect } from "react-redux";
import React, { useState, useEffect } from 'react';
import { addMember } from "../actions/smurfActions";
import { render } from "react-dom";
import axios from "axios"


function SmurfList(props) {


    const [formData, setFormData] = useState({});

    let handleChanges = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    };

    let onSubmit = evt => {
        evt.preventDefault();
        props.addMember(props);
    }




    return (
        <React.Fragment>
            <div className="smurf-list" onSubmit={onSubmit}>
                {props.members.map((member, index) => (
                    <h4 key={index}>
                        {member.name}
                        {member.age}
                        {member.height}
                    </h4>
                ))}
            </div>
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
                    type="text"
                    value={formData.age}
                    onChange={handleChanges}
                    placeholder="Add age"
                />
                <input
                    name="height"
                    type="text"
                    value={formData.height}
                    onChange={handleChanges}
                    placeholder="Add height"
                />
                <button>
                    Add smurf
                </button>
            </form>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    console.log(state);
    return {
        members: state.smurfReducer.members
    };
};

export default connect(
    mapStateToProps,
    { addMember }
)(SmurfList);