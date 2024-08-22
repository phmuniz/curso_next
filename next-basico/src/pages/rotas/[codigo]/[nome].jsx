import { useRouter } from "next/router";

export default function CodigoENome(){

    const router = useRouter()
    const codigo = router.query.codigo
    const nome = router.query.nome

    return(
        <div>
            <h1>rotas / {codigo} / {nome}</h1>
        </div>
    )
}