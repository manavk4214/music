import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import usePlayerStore from "../playStore";

export default function PlayingTab() {
    const navigate = useNavigate();
    const { currentTrack, isPlaying, progress, togglePlay } = usePlayerStore();

    return (
        <AnimatePresence>
            {currentTrack && (
                <Motion.div className="playing-tab" onClick={() => navigate("/now-playing")} initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                    <div className="playing-tab-info">
                        <img src={currentTrack.image} alt={currentTrack.title} />
                        <div className="playing-tab-text">
                            <div className="marquee-wrapper">
                                <span className="marquee-text">{currentTrack.title}</span>
                            </div>
                            <p className="playing-tab-artist">{currentTrack.artist}</p>
                        </div>
                    </div>
                    <div className="playing-tab-controls">
                        <IoMdAddCircleOutline onClick={(e) => e.stopPropagation()} />
                        <button className="mini-play-btn" onClick={(e) => {e.stopPropagation(); togglePlay()}}>
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                    </div>
                    <div className="mini-progress">
                        <div className="mini-progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                </Motion.div>
            )}
        </AnimatePresence>
    )
}