import React from 'react'
import { useAppDispatch } from './app/store/hook';
import { dec, inc } from './app/reducers/counterSlice';

export default function Part3() {
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(inc(3))
            }} >Inc</button>
            <button onClick={() => {
                dispatch(dec(2))
            }} >Dec</button>
        </div>
    )
}
