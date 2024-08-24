import PortaModel from "@/model/porta";

export function criarPortas(qtd: number, portaComPresente: number): PortaModel []{

    return Array.from({length: qtd}, (_, i) => {
        const numero = i + 1
        const temPresente = numero === portaComPresente
        return new PortaModel(numero, temPresente)
    })
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{

    return portas.map(porta => {

        if(porta.numero === portaModificada.numero){
            return portaModificada
        }
        else{
            return portaModificada.aberta ? porta : porta.desselecionar()
        }
    })
}