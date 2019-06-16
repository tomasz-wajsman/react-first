import React from 'react';
import ContactInfo from './ContactInfo.js';
import AvatarImage from './AvatarImage.js';

function ContactItem({login, name, department}) {
    return (
        <li className="item">
            <AvatarImage login={login} />
            <ContactInfo name={name} department={department} />
        </li>
    );
}

export default ContactItem;