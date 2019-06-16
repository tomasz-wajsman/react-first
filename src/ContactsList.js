import React from 'react';
import ContactItem from './ContactItem.js';

function ContactsList({users}) {
    switch (users.length) {
        case 0:
            // brak wyników
            return (
                <p>No results</p>
            )
            break;
        default:
            return (
            <div>
                <main className="ui main text container">
                    <ul className="ui relaxed divided list selection">
                        {users.map(user => <li key={user}><ContactItem name={user} /></li>)}
                    </ul>
                </main>
            </div>
        );
    }
}

export default ContactsList;