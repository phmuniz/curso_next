import Time from "@/model/time"

export default function repeticao2(){

    const classificacao = [
        new Time(1, "Flamengo", 17, 10, 34),
        new Time(2, "Botafogo", 18, 9, 30),
        new Time(3, "Vasco", 18, 5, 20),
        new Time(4, "Fluminense", 17, 2, 11)
    ]

    function renderizar_classificacao(){

        return classificacao.map((time)=>
            <tr key={time.posicao}>
                <td>{time.posicao} {time.nome}</td>
                <td>{time.pontos}</td>
                <td>{time.jogos}</td>
                <td>{time.vitorias}</td>
            </tr>
        )
    }

    const size = {fontSize: "30px"}

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <h1>BRASILEIRÃO SÉRIE A</h1>

            <table style={size}>
                <thead>
                    <tr>
                        <td>Clube</td>
                        <td>Pts</td>
                        <td>PJ</td>
                        <td>VIT</td>
                    </tr>
                </thead>

                <tbody style={size}>
                    {renderizar_classificacao()}
                </tbody>
            </table>
        </div>
    )
}