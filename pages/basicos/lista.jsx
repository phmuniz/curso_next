function gerar_lista(){

    const lista = []

    for(let i = 0; i <= 10; i++){
        var tag = <span>{i}, </span>
        lista.push(tag)
    }

    return lista
}

export default function lista(){

    return(
        <div>
            {gerar_lista()}
        </div>
    );
}