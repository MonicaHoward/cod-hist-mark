import React from 'react';

const Card = ({key, title, address, moreInfo, type, yearEstablished, markerText}) => {
    return(
        <div>
            <p>{title}</p>
            <p>{address}</p>
            <p>{moreInfo}</p>
            <p>{type}</p>
            <p>{yearEstablished}</p>

        </div>
    )
}
export default Card;