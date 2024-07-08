export default function repeticao1(){

    const nomes = [
        'Joao',
        'Maria',
        'Pedro',
        'Andressa',
        'Bernardo',
        'Catarina'
    ]

    function renderizar_lista(){
        return nomes.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return(
        <ul>
            {renderizar_lista()}
        </ul>
    )
}