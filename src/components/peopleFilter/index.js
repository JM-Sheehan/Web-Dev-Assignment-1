import React from "react";
import "./peopleFilter.css";

const PeopleFilters = props => {

    const handleChange = (e, type, value) => {
        e.preventDefault();
        props.onUserInput(type, value);
    };

    const handleTextChange = e => {
        handleChange(e, "name", e.target.value);
    };

    return (
        <div className="row bg-warning">
            <div className="col-md-12">
                <h4>
                    <span>Name:</span>
                    <input
                        type="text"
                        placeholder="Title Search"
                        onChange={handleTextChange}
                    />
                </h4>
            </div>
        </div>
    );
};

export default PeopleFilters;