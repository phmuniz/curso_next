import { useState } from "react"

export default function Form(){

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState(0)
    const [usuarios, setUsuarios] = useState([])

    async function salvar_usuario(){

        await fetch('/api/form', {
            method: "POST",
            body: JSON.stringify({nome, idade})
        })

        setNome("")
        setIdade(0)

        const resp = await fetch('api/form')
        const dados = await resp.json()
        setUsuarios(dados)
    }

    function renderizar_usuarios(){

        return usuarios.map((usuario, i) => <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>)
    }

    return(

        <div>

            <h1>Integração com API #02</h1>

            <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            <input type="number" value={idade} min={0} onChange={e => setIdade(+e.target.value)}/>

            <button onClick={salvar_usuario}>Salvar</button>

            <ul>
                {renderizar_usuarios()}
            </ul>
        </div>
    )
}