import usePlayerStore from "../playStore"

export default function Featured() {
    const { tracks } = usePlayerStore()
    const featured = tracks[0]

    if (!featured) return null

    return (
        <div className="featured">
            <img src={featured.image} alt={featured.album} className="featured-bg" />
            <div className="featured-overlay" />
            <div className="featured-content">
                <span className="featured-tag">Next Up</span>
                <h2 className="featured-title">{featured.album}</h2>
                <p className="featured-artist">{featured.artist}</p>
            </div>
        </div>
    )
}