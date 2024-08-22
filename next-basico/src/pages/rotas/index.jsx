import Link from "next/link"
import router, { useRouter } from "next/router"

export default function rotas(){

    function navegacao_simples(url){
        router.push(url)
    }

    function navegacao_com_params(){
        router.push({
            pathname: '/rotas/params',
            query: {
                id: 123,
                nome: 'phmuniz'
            }
        })
    }

    return(
        <div>

            <h1>Rotas Index</h1>

            <ul>

                <Link href="/rotas/params?nome=PH&id=123">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/phmuniz">
                    <li>phmuniz</li>
                </Link>
                
            </ul>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>

                <button onClick={navegacao_com_params}>Params</button>
                <button onClick={() => navegacao_simples("/rotas/123/buscar")}>Buscar</button>
                <button onClick={() => router.push("/rotas/123/phmuniz")}>phmuniz</button>
            </div>

        </div>
    )
}