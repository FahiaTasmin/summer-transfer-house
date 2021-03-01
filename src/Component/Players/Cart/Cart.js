import React from 'react';
const Cart = (props) => {
    //console.log(props);
    const cart = props.cart;
    const totalSalary = cart.reduce((sum, players) => sum + players.salary,0)
    return (
        <div>
            <div>
            <h2>Player Selected: {cart.length}</h2> 
            </div>
          <p>Total Expense : {totalSalary}</p> 
        </div>
    );
};

export default Cart;