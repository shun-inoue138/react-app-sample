import React, {useState} from 'react';


const App = () =>{
  const[count,setCount] =useState(0);
  const upCount = () => setCount(count+1);
  const divisionThree = () => setCount(previousCount => {
    if(previousCount % 3 === 0){return previousCount / 3;}else{return previousCount}
  })
  return(
  <>
    <div>
      count:{count}
    </div>
    <button onClick={upCount}>数字が増えます</button>
    <button onClick={divisionThree}>3の倍数のとき商を出します</button>

  </>
  )
}

export default App;
