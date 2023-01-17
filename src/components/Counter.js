import React,{useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    const handleIncrement=() =>{
        setCount(count + 1)
    }
    const handleDecrement=() =>{
        setCount(count - 1)
    }
    const handleZero = () => {
        return setCount(0);
    }
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button onClick={handleIncrement} disabled={count==5} className="btn card__btn">+</button>
          <button onClick={handleDecrement} disabled={count==-5} className="btn card__btn">-</button>
          <button onClick={handleZero} className="btn card__btn">0</button>
        </div>
      </div>
    </div>
  )
}
