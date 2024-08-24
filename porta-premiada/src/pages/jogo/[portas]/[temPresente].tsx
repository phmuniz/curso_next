import Porta from "../../../components/Porta"
import { useEffect, useState } from "react"
import { atualizarPortas, criarPortas } from "../../../functions/porta"
import styles from "../../../styles/Jogo.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Home() {

  const router = useRouter()

  const [portas, setPortas] = useState(criarPortas(0,0))

  useEffect(() => {
    const qtdPortas = router.query.portas ? +router.query.portas : 0
    const temPresente = router.query.temPresente ? +router.query.temPresente : 0
    setPortas(criarPortas(qtdPortas, temPresente))
  }, [router?.query])

  function renderizarPortas(){

    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta} onChange={
        novaPorta => setPortas(atualizarPortas(portas, novaPorta))
      }/>
    })
  }
  
  return (
    <div id={styles.jogo}>

        <div className={styles.portas}>
            {renderizarPortas()}
        </div>

        <div className={styles.botoes}>
            <Link href='/'>
                <button>Reiniciar jogo</button>
            </Link>
        </div>
        
    </div>
  )
}