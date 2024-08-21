import ValorDisplay from "@/components/ValorDisplay"
import { useState } from "react"

export default function mega_sena(){

    const estilo = {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        color: '#fff',
        backgroundColor: '#222'
    }

    const [resultado, setResultado] = useState([])
    const [qtd, setQtd] = useState("")

    function gera_resultado(){

        if (1 <= qtd <= 15){
            const lista = []

            for (let index = 0; index < qtd; index++) {
                lista.push(
                    <ValorDisplay valor={parseInt(Math.random() * 60) + 1} key={index}></ValorDisplay>
                )
            }

            setResultado(lista)
        }
    }

    return(
        <div style={estilo}>
            <h1>Mega-Sena</h1>
            <div style={{display: 'flex'}}>
                {resultado}
            </div>
            <span>Quantidade de números sorteados (1 a 15):</span>
            <input type="text" value={qtd} onChange={e => setQtd(e.target.value)}/>
            <button style={{margin: '10px'}} onClick={gera_resultado}>GERAR RESULTADO</button>
        </div>
    )
}