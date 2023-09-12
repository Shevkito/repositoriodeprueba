import React from "react"
import { useState } from "react"

const PrimerComponente =()=>{

    const [count, SetCount]= useState(0)
    const increment =()=>{
        SetCount ( count + 1)
    }
    const decrement =()=>{
        SetCount ( count - 1)
    }

    return (
        <div>   
            <h1>PRIMER COMPONENTE</h1>
            <h3>{count}</h3>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    )
}
 export default PrimerComponente;