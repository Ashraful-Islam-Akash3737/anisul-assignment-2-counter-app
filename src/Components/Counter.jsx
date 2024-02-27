// import React from 'react'
import { useState } from 'react';
import './Counter.css'
export default function Counter() {
    const [count, setCount] = useState(0);
    function handleIncrement(){
        setCount((count) => count + 1);
    }
    function handleDecrement(){
        setCount((count) => count - 1);
    }
    function handleReset(){
        setCount((count) => count - count);
    }
    return (
        <div className="counter center">
            <h1 className="counter__title">Counter App</h1>
            <div className="card center">
                <h2 className="card__title">Count : {count}</h2>
                <div className="card__btns">
                    <button onClick={handleIncrement} className="btn card__btn" disabled={count === 5? true : false}>Increment <br />+</button>
                    <button onClick={handleDecrement} className="btn card__btn" disabled={count === -5? true : false}>Decrement <br />-</button>
                    <button onClick={handleReset} className="btn card__btn">Reset <br />0</button>
                </div>
            </div>
        </div>
    );
}
