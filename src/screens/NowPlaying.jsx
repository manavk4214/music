import usePlayerStore from "../playStore"
import BottomNav from "../components/BottomNav"
import { IoChevronBackOutline } from "react-icons/io5"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa"
import { FaShuffle } from "react-icons/fa6"
import { MdRepeat } from "react-icons/md"
import { motion as Motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return "0:00"
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60).toString().padStart(2, "0")
    return `${m}:${s}`
}

export default function NowPlaying() {
    const navigate = useNavigate()
    const { currentTrack, isPlaying, progress, duration, togglePlay } = usePlayerStore()

    useEffect(() => {
        if (!currentTrack) {
            navigate("/")
        }
    }, [currentTrack])

    if (!currentTrack) return null

    return (
        <div className="now-playing">
            <div className="upper">
                <IoChevronBackOutline onClick={() => window.history.back()} />
                <h2>Now Playing</h2>
                <BsThreeDotsVertical strokeWidth="1" />
            </div>

            <img src={currentTrack.image} alt={currentTrack.title} className="now-playing-art" />

            <div className="now-playing-info">
                <h3>{currentTrack.title}</h3>
                <p>{currentTrack.artist}</p>
            </div>

            <div className="controls">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}>
                        <div className="progress-dot" />
                    </div>
                </div>
                <div className="progress-times">
                    <span>{formatTime((progress / 100) * duration)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
                <div className="buttons">
                    <FaShuffle className="control-secondary" />
                    <FaStepBackward className="control-primary" />
                    <Motion.button
                        className="play-btn"
                        onClick={togglePlay}
                        whileTap={{ scale: 0.9 }}
                        animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </Motion.button>
                    <FaStepForward className="control-primary" />
                    <MdRepeat className="control-secondary" />
                </div>
            </div>

            <BottomNav />
        </div>
    )
}