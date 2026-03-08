import BottomNav from "../components/BottomNav"
import PlayingTab from "../components/PlayingTab"
export default function Library() {
    return (
        <div className="library">
            <h1>Your Library</h1>
            <hr />
            <div className="playlist">
                <h2>Playlists</h2>
                <div className="Library-items">
                    <div className="item">
                        <h1>Liked Songs</h1>
                    </div>
                    <div className="item">
                        <h1>Liked Songs</h1>
                    </div>
                    <div className="item">
                        <h1>Liked Songs</h1>
                    </div>
                    <div className="item">
                        <h1>Liked Songs</h1>
                    </div>
                    <div className="item">
                        <h1>Liked Songs</h1>
                    </div>
                    <div className="item">
                        <h1>Liked Songs</h1>
                    </div>
                    
                    
                </div>
            </div>

            <PlayingTab></PlayingTab>   
        <BottomNav></BottomNav>
        </div>
    )
}