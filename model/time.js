
export default class Time{
    
    #posicao
    #nome
    #jogos
    #vitorias
    #pontos

    constructor(posicao, nome, jogos, vitorias, pontos){
        this.#posicao = posicao
        this.#nome = nome
        this.#jogos = jogos
        this.#vitorias = vitorias
        this.#pontos = pontos
    }

    get posicao(){
        return this.#posicao
    }
    get nome(){
        return this.#nome
    }
    get jogos(){
        return this.#jogos
    }
    get vitorias(){
        return this.#vitorias
    }
    get pontos(){
        return this.#pontos
    }
}