import './App.css';
import { useEffect, useState } from 'react';
import Players from './Component/Players/Players';
import Cart from './Component/Players/Cart/Cart';
import playerData from './data/data.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  const [playersInfo, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect (() =>{
      
    setPlayer(playerData);
    console.log(playerData);
  
})

const handleAddPlayer = (players) =>{
  //console.log('country added',country);
  const newCart =[...cart, players];
  setCart (newCart)
}
  return (
    <div className="App">
     <div className ="players">
     <h1>Total Players: {playersInfo.length}</h1>
      <h4>Players added:{cart.length}</h4>
       {/* <h3>players name:{playersInfo.name}</h3>
            <p>Salary : {playersInfo  .salary}</p>  */}
      <Cart cart ={cart}></Cart>
     
       {
          playersInfo.map (players =><Players players = {players} handleAddPlayer ={handleAddPlayer} key = {players.id}></Players>)
        }
     </div>
    </div>
  );
}

export default App;
