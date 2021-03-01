import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    console.log(props.players);
    const {image,name, salary} = props.players;
    const handleAddPlayer = props.handleAddPlayer;

    /* const flagStyle = {
        height:'50px'
    }; */
    const divStyle = {
        border: '1px solid red',
        margin:'10px',
        padding: '10px'
    }
    return (
        <div>
            <div style={divStyle}>
            <img src={image} />
           <h2>Player Name: {name}</h2>
           <p>Salary : {salary}</p>
           <button className = 'btn btn-primary' onClick={() => handleAddPlayer(props.players)}>
           <FontAwesomeIcon icon={faShoppingCart} />Add Country</button>
        </div>
        </div>
    );
};

export default Players;