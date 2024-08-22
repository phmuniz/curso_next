import { useRouter } from "next/router";

export default function Buscar(){

    const router = useRouter()
    const codigo = router.query.codigo

    return(
        <div>
            <h1>rotas / {codigo} / buscar</h1>
        </div>
    )
}