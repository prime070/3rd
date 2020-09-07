import React from 'react';

const Card = ({id,name,email}) => {
    return (
        <div className = 'tc pa2 ma2 dib ba bw2 grow bg-washed-green'>
        <img alt = "robots" src = {`https://robohash.org/${id}`}/>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
    )
}

export default Card