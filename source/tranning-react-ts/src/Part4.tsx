import React from 'react'
import { useAppSelector } from './app/store/hook';

export default function Part4() {
    const counter = useAppSelector((state) => state.counter.counter);
    return (
        <div>Counter: {counter}</div>
    )
}
