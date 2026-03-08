import { useEffect } from "react"
import SongCard from "./song-card"
import usePlayerStore from "../playStore"
import { useNavigate } from "react-router-dom"

export default function Trending() {
    const { tracks, fetchTracks, setTrack } = usePlayerStore()
    const navigate = useNavigate()

    useEffect(() => {
        fetchTracks("eminem")
    }, [fetchTracks])

    const handleSongClick = (song) => {
        setTrack(song)
        navigate("/now-playing")
    }

    return (
        <div className="recommended">
            <h3> Trending </h3>
            <div className="recommended-cards">
                {tracks.map((song) => (
                    <SongCard key={song.id} image={song.image} title={song.title} artist={song.artist} album={song.album ?? "single"} onClick={() => handleSongClick(song)} />
                    
                ))}
            </div>
        </div>
    )
}