import { useNavigate } from "react-router-dom"
import usePlayerStore from "../playStore"

export default function Horizontal({ id, art, title, artist, song }) {
    const navigate = useNavigate()
    const { setTrack } = usePlayerStore()

    const handleClick = () => {
    console.log("song:", song)
    setTrack(song)
    navigate("/now-playing")
}

    return (
        <div className="horizontal" onClick={handleClick}>
            <img src={art} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{artist}</p>
            </div>
        </div>
    )
}