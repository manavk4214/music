import TopNav from "../components/TopNav"
import Recommended from "../components/Recommended"
import Featured from "../components/Featured"
import BottomNav from "../components/BottomNav"
import PlayingTab from "../components/PlayingTab"
import Trending from "../components/Trending"
export default function Home() {
  return (
    <div className="home">
      <TopNav firstName="John" />
      <Featured />
      <Recommended />
      <Trending />
      <PlayingTab />
      <BottomNav />
    </div>
  )
}
