import { AnimatePresence } from "framer-motion"
import PageWrapper from "./components/PageWrapper"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import NowPlaying from "./screens/NowPlaying"
import Search from "./screens/Search"
export default function App() {
    return (
        <BrowserRouter>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                    <Route path="/now-playing" element={<PageWrapper><NowPlaying /></PageWrapper>} />
                    <Route path="/search" element={<PageWrapper><Search /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}