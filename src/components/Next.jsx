
export default function Next(props) {
    return (
        <div className="next" style={{backgroundImage:props.image}}>
            <p>Next Track</p>
            <h1>{props.title}</h1>
        </div>

    )
}