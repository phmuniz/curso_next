import { useState } from "react"

export default function contador(){

    const [num, setNum] = useState(0)

    const estilo = {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        color: '#fff',
        backgroundColor: '#222'
    }

    const estilo2 = {height: '200px', width:'200px', fontSize: '200px'}


    return(
        <div style={estilo}>

            <div>
                <button style={estilo2} onClick={() => setNum(num-1)}>-</button>
                <button style={estilo2} onClick={() => setNum(num+1)}>+</button>
            </div>
        
            <h1 style={{fontSize: '60px'}}>
                Valor : {num}
            </h1>
        </div>
    )
}