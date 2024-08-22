import { useEffect, useState } from "react"

export default function Questao(){

    const [questao, setQuestao] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/flamengo')
            .then(resp => resp.json()) //converte o json da api em um objeto JS
            .then(data => setQuestao(data)) //pega o objeto convertido que eu chamei de data e seta a variavel questao
    }, [])
    
    function renderizar_respostas(){

        if(questao){

            return questao.respostas.map((resp, i) => <li key={i}>{resp}</li>)
        }

        return false
    }

    return(
        <div>
            <h1>Integrando API #01</h1>

            <div>
                <span>{questao?.id} - {questao ? questao.enunciado : null}</span>

                <ul>
                    {renderizar_respostas()}
                </ul>
            </div>
        </div>
    )
}