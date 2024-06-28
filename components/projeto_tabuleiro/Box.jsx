export default function Box(props) {
    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: props.black ? "#000" : "#fff",
        }}>
        </div>
    )
}