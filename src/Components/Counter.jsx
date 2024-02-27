// import React from 'react'
import './Counter.css'
export default function Counter() {
    return (
        <div className="counter center">
            <h1 className="counter__title">Counter App</h1>
            <div className="card center">
                <h2 className="card__title">Count : 0</h2>
                <div className="card__btns">
                    <button className="btn card__btn">Increment <br />+</button>
                    <button className="btn card__btn">Decrement <br />-</button>
                    <button className="btn card__btn">Reset <br />0</button>
                </div>
            </div>
        </div>
    );
}
