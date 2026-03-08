import { useState } from "react"
import usePlayerStore from "../playStore"

import { useNavigate } from "react-router-dom"
import Horizontal from "../components/Horizontal"
import PlayingTab from "../components/PlayingTab"
import BottomNav from "../components/BottomNav"
export default function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const { tracks, fetchTracks, setTrack } = usePlayerStore()
    const navigate = useNavigate()

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value.length > 2) {
            fetchTracks(e.target.value)
        }
    }

    const handleSongClick = (song) => {
        setTrack(song)
        navigate("/now-playing")
    }

    return (
        <div className="search">
            <h1>Search</h1>
            <input
                type="text"
                placeholder="Search for a Song"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="search-results">
                {tracks.map((song) => (
                    <Horizontal key={song.id} art={song.image} title={song.title} artist={song.artist} album={song.album ?? "single"} song={song}/>
                ))}
            </div>
            <PlayingTab />
            <BottomNav />

        </div>
    )
}