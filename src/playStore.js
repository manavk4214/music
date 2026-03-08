import { create } from "zustand"

const usePlayerStore = create((set, get) => {
  const audio = new Audio()

  audio.addEventListener("timeupdate", () => {
    const duration = audio.duration || 0
    const progress = duration ? (audio.currentTime / duration) * 100 : 0
    set({ progress })
  })

  audio.addEventListener("loadedmetadata", () => {
    set({ duration: audio.duration })
  })

  audio.addEventListener("ended", () => {
    set({ isPlaying: false })
  })

  return {
    currentTrack: null,
    isPlaying: false,
    progress: 0,
    duration: 0,
    tracks: [],
    audio,

    fetchTracks: async (query = "eminem") => {
      const res = await fetch(
        `https://itunes.apple.com/search?term=${query}&media=music&limit=20`
      )
      const data = await res.json()
      const tracks = data.results.map((t) => ({
        id: t.trackId,
        title: t.trackName,
        artist: t.artistName,
        album: t.collectionName,
        image: t.artworkUrl100.replace("100x100", "400x400"),
        preview: t.previewUrl,
      }))

      const { currentTrack } = get()
      set({ tracks, currentTrack: currentTrack ?? tracks[0] })
    },

    setTrack: (track) => {
      const { audio } = get()
      audio.pause()
      audio.src = track.preview
      audio.play()

      set({ currentTrack: track, isPlaying: true, progress: 0 })
    },

    togglePlay: () => {
      const { isPlaying, audio } = get()
      if (isPlaying) audio.pause()
      else audio.play()
      set({ isPlaying: !isPlaying })
    },
  }
})

export default usePlayerStore


