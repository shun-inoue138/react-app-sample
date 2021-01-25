import React, {useState} from 'react';


const App = () =>{
  const initialState ={
    name :'サンプル',
    price:1000
  }
  const [name,setName] = useState(initialState.name);
  const [price,setPrice] = useState(initialState.price);
  return (
  <>
    <p >現在の{name}は{price}円です</p>
    <button onClick={() => setPrice(price +1)}>1円値上げ</button>
    <button onClick={() => setPrice(price -1)}>1円値下げ</button>
    <input value={name}　onChange={e => {console.log(e);setName(e.target.value);}}></input>
  </>
  )
}

export default App;
