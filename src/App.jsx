import { AnimatePresence } from "framer-motion"
import PageWrapper from "./components/PageWrapper"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import NowPlaying from "./screens/NowPlaying"
import Search from "./screens/Search"
import Library from "./screens/Library"
export default function App() {
    return (
        <BrowserRouter>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                    <Route path="/now-playing" element={<PageWrapper><NowPlaying /></PageWrapper>} />
                    <Route path="/search" element={<PageWrapper><Search /></PageWrapper>} />
                    <Route path="/library" element={<PageWrapper><Library /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}