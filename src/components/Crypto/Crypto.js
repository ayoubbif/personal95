import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './Crypto.css';
import Coin from './Coin';
import { TextField, Window, WindowHeader, Button, Cutout } from 'react95'
import Draggable from 'react-draggable';
import { StoreContext } from '../../store';


function Crypto() {

const [state, dispatch] = useContext(StoreContext);

const _handleClose = () => {
        dispatch({type: 'SET_CRYPTO_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_CRYPTO_MODAL_BUTTON', payload: true});
    };
const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'crypto' });
    };
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Draggable>
        <Window style={{
              width: "900px",
              height: "740px",
              position: "absolute",
              left: "25%",
              top: "10%",
              display: state.CryptoModal ? 'block' : 'none',
            }} onClick={_handleClick}>
            <WindowHeader className='window-header'>
                <span>crypto.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>

            </WindowHeader>
    
            <TextField onChange={handleChange} placeholder='Search'/>
              
            <Cutout style={{ width: '885px', height: '650px' }}>
                {filteredCoins.map(coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                        );
                })}
            </Cutout>
        </Window>   
    </Draggable>

  );
}

export default Crypto;