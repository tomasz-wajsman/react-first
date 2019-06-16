import React from 'react';

function AvatarImage({login}) {
    var imageURL = "https://api.adorable.io/avatars/285/" + login + ".png";
    return (
        <img src={imageURL} className="ui mini rounded image" />
    );
}

export default AvatarImage;