export default function ValorDisplay(props){

    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
            width: '50px',
            borderRadius: '25px',
            backgroundColor: '#fff',
            color: '#000',
            fontSize: '40px',
            margin: '20px'
        }}>

            {props.valor}

        </div>
    )
}