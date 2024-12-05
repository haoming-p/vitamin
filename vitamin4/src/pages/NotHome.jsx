import React, { useEffect, useState } from 'react'
import './Home.css'

const NotHome = () => {
    const [count, setCount] = useState(0)
    const [showMessage, setShowMessage] = useState(false)

    const increase = () => setCount(count+1)
    const decrease = () => setCount(count-1)
    
    useEffect(() => {
        if (count<0){
            setCount(0)
        }
        if (count>5){
            setShowMessage(true)
        }else{
            setShowMessage(false)
        }
    },[count])

    return (
        <div className='HomeContainer'>
            <h1>Not Home Page</h1>
            <h3>Counter: {count}</h3>
            {showMessage && <p> you passed 5</p>}
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    )
}

export default NotHome
