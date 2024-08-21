import { useState } from "react"

export default function mouse(){

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const estilo = {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        color: '#fff',
        backgroundColor: '#222'
    }

    function quando_mover(e){
        setX(e.clientX)
        setY(e.clientY)
    }

    return(
        <div style={estilo} onMouseMove={quando_mover}>
            <span>EIXO X: {x}</span>
            <span>EIXO Y: {y}</span>
        </div>
    )
}