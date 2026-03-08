import { motion as Motion } from "framer-motion"

export default function SongCard({ image, title, artist, album, onClick }) {
    return (
        <Motion.div
            className="song-card"
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileTap={{ scale: 0.95 }}
        >
            <img src={image} alt={title} />
            <h4 className="song-card-title">{title}</h4>
            <p className="song-card-artist">{artist} . {album}</p>
        </Motion.div>
    )
}