import React from 'react';

function HeaderButton({
    content, 
    func = () => {console.log('default function')},
    funcParam = 0 }) {
    return (
        <div className="header item">
            <button className="ui button" onClick={() => func(funcParam)}>{content}</button>
        </div>
    );
}

export default HeaderButton;