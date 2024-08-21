import styles from '../../styles/projeto_tabuleiro.module.css'
import Box from '@/components/projeto_tabuleiro/Box'

export default function Tabuleiro() {

    function cria_tabuleiro(){
        let tabuleiro = []
        for (let i = 0; i < 8; i++){
            let linha = []
            for (let j = 0; j < 8; j++){
                
                if ((i + j) % 2 === 0){
                    linha.push(<Box></Box>)
                }
                else{
                    linha.push(<Box black></Box>)
                }
            }
            tabuleiro.push(
                <div className={styles.linha}>
                    {linha}
                </div>
            )
        }
        return tabuleiro
    }

    return (
        <div className={styles.body}>

            <div>
                {cria_tabuleiro()}
            </div>
            
        </div>
    )
}