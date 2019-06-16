import React from 'react';

function ContactInfo({name, department}) {
    return (
        <div className="content">
            <h4 className="header">{name}</h4>
            <div className="description">{department}</div>
        </div>
    );
}

export default ContactInfo;